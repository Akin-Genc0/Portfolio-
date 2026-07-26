"use client";

import { useEffect, useState } from "react";
import type { GithubEvent, GithubProfile } from "@/lib/github";
import { formatEvent, relativeDate } from "@/lib/github";

export function RightPanel({
  events,
  profile,
}: {
  events: GithubEvent[];
  profile: GithubProfile | null;
}) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
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
            Profile
          </p>
          <div className="flex justify-between gap-3 border-b border-[var(--line)] py-[11px] text-[11px] text-[var(--muted)] [&_strong]:text-right [&_strong]:text-[var(--text)]">
            <span>Role</span>
            <strong>Software Engineer</strong>
          </div>
          <div className="flex justify-between gap-3 border-b border-[var(--line)] py-[11px] text-[11px] text-[var(--muted)] [&_strong]:text-right [&_strong]:text-[var(--text)]">
            <span>Company</span>
            <strong>Elanco</strong>
          </div>
          <div className="flex justify-between gap-3 border-b border-[var(--line)] py-[11px] text-[11px] text-[var(--muted)] [&_strong]:text-right [&_strong]:text-[var(--text)]">
            <span>Featured projects</span>
            <strong>2</strong>
          </div>
          <div className="flex justify-between gap-3 py-[11px] text-[11px] text-[var(--muted)] [&_strong]:text-right [&_strong]:text-[var(--text)]">
            <span>Public repositories</span>
            <strong>{profile?.public_repos ?? "-"}</strong>
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
      </div>
    </details>
  );
}
