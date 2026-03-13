"use client";

import { FormEvent, useState } from "react";

type FormState = {
  school: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  school: "",
  email: "",
  message: "",
};

export function MailingListForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Unable to submit right now.");
      }

      setStatus("success");
      setFeedback("Thanks, you are on the list. We will be in touch.");
      setFormState(initialFormState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to submit right now.");
    }
  }

  return (
    <form className="mix-form mt-6" onSubmit={onSubmit}>
      <label className="mix-form-field">
        <span className="mix-form-label">School</span>
        <input
          className="mix-form-input"
          type="text"
          name="school"
          value={formState.school}
          onChange={(event) =>
            setFormState((previous) => ({ ...previous, school: event.target.value }))
          }
          autoComplete="organization"
          placeholder="e.g. Harvard, Berklee, Babson, Northeastern, Emerson"
          required
        />
      </label>

      <label className="mix-form-field">
        <span className="mix-form-label">Student Email</span>
        <input
          className="mix-form-input"
          type="email"
          name="email"
          value={formState.email}
          onChange={(event) =>
            setFormState((previous) => ({ ...previous, email: event.target.value }))
          }
          autoComplete="email"
          placeholder="you@school.edu"
          required
        />
      </label>

      <label className="mix-form-field">
        <span className="mix-form-label">Why do you want to join The Mix?</span>
        <textarea
          className="mix-form-input mix-form-textarea"
          name="message"
          value={formState.message}
          onChange={(event) =>
            setFormState((previous) => ({ ...previous, message: event.target.value }))
          }
          rows={5}
          placeholder="Tell us what you want to build, learn, or contribute."
          required
        />
      </label>

      <div className="flex items-center gap-3">
        <button className="mix-button-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Join Mailing List"}
        </button>
      </div>

      {feedback ? (
        <p className={`mix-form-feedback ${status === "error" ? "mix-form-feedback-error" : ""}`}>
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
