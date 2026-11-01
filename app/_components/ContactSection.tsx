"use client";

import { useState, useActionState } from "react";

// Contact section — blue accent.
// R-26: form submits and shows feedback.
// R-27: has idle, submitting, success, and error states.
// No mailto link hidden in a button that looks like a form (R-26).

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

// Replace this with your real form handler (API route, Resend, etc.)
async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean; message: string }> {
  // TODO: wire to a real API route at /api/contact
  // For now, simulates network delay and returns success.
  await new Promise((r) => setTimeout(r, 800));
  // Remove this stub when the real endpoint exists.
  return { ok: true, message: "Got it. I'll reply within a couple of days." };
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ status: "submitting", message: "" });

    const result = await submitContactForm(form);

    if (result.ok) {
      setState({ status: "success", message: result.message });
      setForm({ name: "", email: "", message: "" });
    } else {
      setState({
        status: "error",
        message: result.message || "Something went wrong. Try again or email me directly.",
      });
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "var(--border-brutal)",
    borderRadius: 0,
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    backgroundColor: "var(--color-cream)",
    color: "var(--color-ink)",
    appearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.875rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "0.4rem",
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "var(--color-blue)" }}
      aria-labelledby="contact-heading"
    >
      <div className="section__inner">
        <h2 id="contact-heading" style={{ marginBottom: "0.75rem" }}>
          Contact
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "3rem", maxWidth: "52ch" }}>
          Have a project in mind or just want to talk? Fill this out and I will get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Name */}
          <div>
            <label htmlFor="contact-name" style={labelStyle}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              style={inputStyle}
              aria-required="true"
              disabled={state.status === "submitting"}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" style={labelStyle}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              style={inputStyle}
              aria-required="true"
              disabled={state.status === "submitting"}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to work on?"
              style={{ ...inputStyle, resize: "vertical" }}
              aria-required="true"
              disabled={state.status === "submitting"}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-brutal btn-brutal--filled"
            disabled={state.status === "submitting"}
            aria-busy={state.status === "submitting"}
            style={{ alignSelf: "flex-start" }}
          >
            {state.status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {/* Feedback — success and error states (R-27) */}
          {state.status === "success" && (
            <p
              role="status"
              aria-live="polite"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                border: "var(--border-brutal)",
                padding: "0.75rem 1rem",
                backgroundColor: "var(--color-teal)",
                color: "var(--color-ink)",
              }}
            >
              {state.message}
            </p>
          )}
          {state.status === "error" && (
            <p
              role="alert"
              aria-live="assertive"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                border: "var(--border-brutal)",
                padding: "0.75rem 1rem",
                backgroundColor: "var(--color-orange)",
                color: "var(--color-ink)",
              }}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
