"use client";

import { useEffect, useState } from "react";
import type { GithubEvent } from "@/lib/github";
import { formatEvent, relativeDate } from "@/lib/github";

type Weather = {
  apparentTemperature: number;
  condition: string;
  temperature: number;
  windSpeed: number;
};

type NewsItem = {
  id: number;
  title: string;
  url: string;
};

const weatherConditions: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Icy fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy showers",
  95: "Thunderstorm",
};

const commitMessages = [
  "feat: automate mobile release approvals",
  "fix: tighten cloud cost alert thresholds",
  "docs: clarify Looply installation",
  "refactor: simplify deployment workflow",
  "chore: refresh portfolio signals",
];

function WeatherIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-11 w-11 shrink-0 text-[var(--highlight)]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9" />
      <path d="M8.5 19h9a3.5 3.5 0 0 0 .3-7 4.75 4.75 0 0 0-8.96 1.28A2.9 2.9 0 0 0 8.5 19Z" />
    </svg>
  );
}

export function RightPanel({ events }: { events: GithubEvent[] }) {
  const [commitMessage, setCommitMessage] = useState(commitMessages[0]);
  const [looplyDownloads, setLooplyDownloads] = useState<number | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function getLooplyDownloads() {
      try {
        const response = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/looply-comp-lib",
          { signal: controller.signal },
        );
        if (!response.ok) return;

        const data: { downloads?: number } = await response.json();
        if (typeof data.downloads === "number")
          setLooplyDownloads(data.downloads);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") return;
      }
    }

    getLooplyDownloads();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function getNews() {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json",
          { signal: controller.signal },
        );
        if (!response.ok) return;

        const ids: number[] = await response.json();
        const stories = await Promise.all(
          ids.slice(0, 30).map(async (id) => {
            const storyResponse = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
              { signal: controller.signal },
            );
            return storyResponse.ok ? storyResponse.json() : null;
          }),
        );
        const items = stories
          .filter(
            (
              story,
            ): story is {
              id: number;
              title: string;
              type: string;
              url?: string;
            } => story?.type === "story" && Boolean(story.title),
          )
          .map((story) => ({
            id: story.id,
            title: story.title,
            url:
              story.url ?? `https://news.ycombinator.com/item?id=${story.id}`,
          }));
        const relevantItems = items.filter((item) =>
          /\b(ai|cloud|software|developer|programming|code|open source|security)\b/i.test(
            item.title,
          ),
        );

        const selectedItems = [
          ...relevantItems,
          ...items.filter(
            (item) =>
              !relevantItems.some(
                (relevantItem) => relevantItem.id === item.id,
              ),
          ),
        ];

        setNews(selectedItems.slice(0, 3));
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") return;
      }
    }

    getNews();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function getWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Europe%2FLondon",
          { signal: controller.signal },
        );
        if (!response.ok) return;

        const data: {
          current?: {
            apparent_temperature: number;
            temperature_2m: number;
            weather_code: number;
            wind_speed_10m: number;
          };
        } = await response.json();
        if (!data.current) return;

        setWeather({
          apparentTemperature: Math.round(data.current.apparent_temperature),
          condition:
            weatherConditions[data.current.weather_code] ??
            "Current conditions",
          temperature: Math.round(data.current.temperature_2m),
          windSpeed: Math.round(data.current.wind_speed_10m),
        });
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") return;
      }
    }

    getWeather();
    return () => controller.abort();
  }, []);

  // A fixed initial value keeps server and client markup identical before the live clock starts.
  const date = now ?? new Date(0);
  const start = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const total = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return (
    <details
      className="group relative w-full transition-[width] duration-200 ease-in-out lg:w-[280px] xl:w-[340px] lg:[grid-area:activity] [&:not([open])]:min-h-[42px] [&:not([open])]:w-[42px] [&:not([open])_summary]:left-[7px]"
      open
    >
      <summary
        className="absolute top-[14px] -left-[13px] z-10 grid h-7 w-7 list-none place-items-center rounded-full border border-[#51514d] bg-[#303030] text-[#d9d9d4] [&::-webkit-details-marker]:hidden"
        aria-label="Toggle information panel"
      >
        <span aria-hidden="true">&gt;</span>
      </summary>
      <div className="grid gap-4">
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Calendar
          </p>
          <h2 className="mb-5 mt-0 text-[19px]">
            {date.toLocaleString("en-GB", {
              month: "long",
              year: "numeric",
              timeZone: "Europe/London",
            })}
          </h2>
          <div className="mb-[11px] grid grid-cols-7 gap-[9px] text-center text-[9px] uppercase text-[var(--muted)]">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-[9px] text-center [&_span]:min-h-[23px] [&_span]:text-xs [&_span]:text-[#d0d0cb]">
            {Array.from({ length: start + total }, (_, index) =>
              index < start ? null : index - start + 1,
            ).map((day, index) => (
              <span
                className={
                  day === date.getDate()
                    ? "grid !h-6 !w-6 place-items-center !min-h-0 -mt-0.5 mx-auto rounded-full bg-[#d0d0cb] !text-[var(--bg)]"
                    : ""
                }
                key={`${day}-${index}`}
              >
                {day}
              </span>
            ))}
          </div>
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Activity
          </p>
          {events.slice(0, 5).map((event) => (
            <div
              className="border-b border-[var(--line)] py-[14px]"
              key={event.id}
            >
              <p className="m-0 text-xs leading-[1.5] text-[#d5d5d0]">
                {formatEvent(event)}
                <small className="mt-[3px] block text-[10px] text-[var(--muted)]">
                  {relativeDate(event.created_at)}
                </small>
              </p>
            </div>
          ))}
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Weather
          </p>
          {weather ? (
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <WeatherIcon />
                  <strong className="text-[42px] tracking-[-.08em] text-[var(--text)]">
                    {weather.temperature}°
                  </strong>
                </div>
                <p className="mb-0 mt-1 text-xs text-[var(--muted)]">
                  {weather.condition}
                </p>
              </div>
              <dl className="m-0 text-right text-[11px] text-[var(--muted)] [&_dd]:mb-2 [&_dd]:mt-1 [&_dd:last-child]:mb-0 [&_dt]:text-[10px] [&_dd]:text-[var(--text)]">
                <dt>Feels like</dt>
                <dd>{weather.apparentTemperature}°C</dd>
                <dt>Wind</dt>
                <dd>{weather.windSpeed} km/h</dd>
              </dl>
            </div>
          ) : (
            <p className="mb-0 text-xs text-[var(--muted)]">
              Weather is temporarily unavailable.
            </p>
          )}
          <div className="mt-5 border-t border-[var(--line)] pt-3 text-[11px] text-[var(--muted)]">
            London, United Kingdom
          </div>
        </section>
        <section className="grid gap-2 rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Current time
          </p>
          <strong className="text-[30px] tracking-[-.07em] text-[#deded9]">
            {date.toLocaleTimeString("en-GB", { timeZone: "Europe/London" })}
          </strong>
          <span className="text-[11px] text-[var(--muted)]">
            {date.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "Europe/London",
            })}
          </span>
          <small className="text-[11px] text-[var(--muted)]">
            London, United Kingdom
          </small>
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Fun fact
          </p>
          <p className="mb-2 mt-0 text-[13px] leading-[1.5] text-[var(--text)]">
            The most goated note-taking app is Obsidian.
          </p>
          <small className="text-[11px] leading-[1.5] text-[var(--muted)]">
            Local markdown files, backlinks, and no lock-in.
          </small>
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Tech news
          </p>
          {news.length ? (
            <div className="grid gap-3">
              {news.map((item) => (
                <a
                  className="border-b border-[var(--line)] pb-3 text-xs leading-[1.5] text-[var(--muted)] last:border-0 last:pb-0 hover:text-[var(--text)]"
                  href={item.url}
                  key={item.id}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.title} -&gt;
                </a>
              ))}
            </div>
          ) : (
            <p className="mb-0 text-xs text-[var(--muted)]">
              Loading the latest stories...
            </p>
          )}
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Looply
          </p>
          <strong className="text-[32px] tracking-[-.07em] text-[var(--text)]">
            {looplyDownloads === null
              ? "-"
              : new Intl.NumberFormat("en-GB").format(looplyDownloads)}
          </strong>
          <p className="mb-0 mt-1 text-[11px] text-[var(--muted)]">
            npm downloads in the last 7 days
          </p>
          <a
            className="mt-4 inline-block text-[11px] text-[var(--muted)] underline underline-offset-3 hover:text-[var(--text)]"
            href="https://www.npmjs.com/package/looply-comp-lib"
            rel="noreferrer"
            target="_blank"
          >
            View npm package -&gt;
          </a>
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Build queue
          </p>
          <ol className="m-0 grid list-none gap-3 text-xs text-[var(--muted)]">
            <li>01 Improve Looply documentation</li>
            <li>02 Expand Terraform cost alerts</li>
            <li>03 Learn GCP observability</li>
          </ol>
        </section>
        <section className="rounded-[14px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[0_18px_45px_rgb(0_0_0_/_16%)]">
          <p className="mb-3 mt-0 text-xs uppercase tracking-[.06em] text-[#bdbdb8]">
            Commit message generator
          </p>
          <code className="block rounded-md border border-[#454545] bg-[var(--bg)] p-3 text-[11px] leading-[1.6] text-[var(--highlight)]">
            {commitMessage}
          </code>
          <button
            className="mt-4 text-[11px] text-[var(--muted)] underline underline-offset-3 hover:text-[var(--text)]"
            onClick={() => {
              setCommitMessage((current) => {
                const alternatives = commitMessages.filter(
                  (message) => message !== current,
                );
                return alternatives[
                  Math.floor(Math.random() * alternatives.length)
                ];
              });
            }}
            type="button"
          >
            Generate message -&gt;
          </button>
        </section>
      </div>
    </details>
  );
}
