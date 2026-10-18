"use client";

import { useEffect, useState } from "react";
import type { GithubEvent } from "@/lib/github";
import { formatEvent, relativeDate } from "@/lib/github";

export function RightPanel({ events }: { events: GithubEvent[] }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const date = now ?? new Date(0);

  return (
    <aside className="order-6 border-b-2 border-[var(--text)] px-5 py-8 sm:px-9 sm:py-10" id="notes" aria-label="Portfolio notes">
      <p className="mb-5 font-mono text-[11px] text-[var(--muted)]">
        notes.md
      </p>

      <section className="border-b border-[var(--line)] pb-6">
        <p className="mb-2 font-mono text-[10px] text-[var(--muted)]">based in</p>
        <p className="m-0 text-lg font-semibold tracking-[-.04em]">London, United Kingdom</p>
        <p className="mt-2 mb-0 text-xs leading-[1.65] text-[var(--muted)]">Open to thoughtful collaboration, difficult problems, and well-made tools.</p>
      </section>

      <section className="border-b border-[var(--line)] py-6">
        <p className="mb-2 font-mono text-[10px] text-[var(--muted)]">local time</p>
        <time className="block text-3xl font-semibold tracking-[-.08em]" dateTime={date.toISOString()}>
          {date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" })}
        </time>
        <p className="mb-0 mt-2 font-mono text-[10px] text-[var(--muted)]">
          {date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/London" })}
        </p>
      </section>

      <section className="border-b border-[var(--line)] py-6">
        <p className="mb-4 font-mono text-[10px] text-[var(--muted)]">recent activity</p>
        {events.length ? (
          <ol className="m-0 grid list-none gap-4 p-0">
            {events.slice(0, 4).map((event, index) => (
              <li className="grid grid-cols-[20px_1fr] gap-3" key={event.id}>
                <span className="font-mono text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="m-0 text-xs leading-[1.5]">{formatEvent(event)}</p>
                  <time className="mt-1 block font-mono text-[10px] text-[var(--muted)]" dateTime={event.created_at}>{relativeDate(event.created_at)}</time>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="m-0 text-xs leading-[1.6] text-[var(--muted)]">Activity is temporarily unavailable.</p>
        )}
      </section>

      <section className="py-6">
        <p className="mb-3 font-mono text-[10px] text-[var(--muted)]">elsewhere</p>
        <div className="grid gap-3 font-mono text-[10px]">
          <a className="hover:text-[var(--text)]" href="https://github.com/Akin-Genc0" rel="noreferrer" target="_blank">GitHub</a>
          <a className="hover:text-[var(--text)]" href="https://www.linkedin.com/in/akin-genc-1a5a02278/" rel="noreferrer" target="_blank">LinkedIn</a>
          <a className="hover:text-[var(--text)]" href="mailto:akingenc212@gmail.com">Email</a>
        </div>
      </section>
    </aside>
  );
}
