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
    <details className="right-panel" open>
      <summary
        className="collapse-button"
        aria-label="Toggle information panel"
      >
        <span aria-hidden="true">&gt;</span>
      </summary>
      <div className="right-panel-content">
        <section className="rail-card">
          <p className="eyebrow">Calendar</p>
          <h2>
            {date.toLocaleString("en-GB", {
              month: "long",
              year: "numeric",
              timeZone: "Europe/London",
            })}
          </h2>
          <div className="weekdays">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="calendar-days">
            {Array.from({ length: start + total }, (_, index) =>
              index < start ? null : index - start + 1,
            ).map((day, index) => (
              <span
                className={day === date.getDate() ? "today" : ""}
                key={`${day}-${index}`}
              >
                {day}
              </span>
            ))}
          </div>
        </section>
        <section className="rail-card">
          <p className="eyebrow">Activity</p>
          {events.slice(0, 5).map((event) => (
            <div className="activity-item" key={event.id}>
              <span className="activity-dot" />
              <p>
                {formatEvent(event)}
                <small>{relativeDate(event.created_at)}</small>
              </p>
            </div>
          ))}
        </section>
        <section className="rail-card">
          <p className="eyebrow">Profile</p>
          <div className="cv-stat">
            <span>Role</span>
            <strong>Software Engineer</strong>
          </div>
          <div className="cv-stat">
            <span>Company</span>
            <strong>Elanco</strong>
          </div>
          <div className="cv-stat">
            <span>Featured projects</span>
            <strong>2</strong>
          </div>
          <div className="cv-stat">
            <span>Public repositories</span>
            <strong>{profile?.public_repos ?? "-"}</strong>
          </div>
        </section>
        <section className="rail-card time-card">
          <p className="eyebrow">Current time</p>
          <strong>
            {date.toLocaleTimeString("en-GB", { timeZone: "Europe/London" })}
          </strong>
          <span>
            {date.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "Europe/London",
            })}
          </span>
          <small>London, United Kingdom</small>
        </section>
        <section className="rail-card fun-fact-card">
          <p className="eyebrow">Fun fact</p>
          <p>The most goated note-taking app is Obsidian.</p>
          <small>Local markdown files, backlinks, and no lock-in.</small>
        </section>
      </div>
    </details>
  );
}
