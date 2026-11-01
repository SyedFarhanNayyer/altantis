"use client";

import { useId, useState, type FormEvent } from "react";
import { buttonClass } from "@/components/ui/ButtonLink";
import { business } from "@/lib/site";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const topics = [
  "A new phone system",
  "Replacing copper phone lines",
  "Moving from my current provider",
  "Support for my Atlantis system",
  "Something else",
];

const userCounts = ["1–5", "6–20", "21–50", "51+", "Not sure"];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = "Enter your name so we know who to reply to.";
  const email = String(data.get("email") ?? "").trim();
  if (!email) errors.email = "Enter your email address so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter an email address like name@company.com.";
  if (!String(data.get("message") ?? "").trim())
    errors.message = "Tell us a little about what you need.";
  return errors;
}

// No form backend yet: a valid submission opens the visitor's email app
// with the message filled in, addressed to the business inbox. Swap
// `send` for a server action or form service to send it directly.
export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: Field) => `${id}-${name}-error`;

  const checkField = (name: Field, form: HTMLFormElement | null) => {
    if (!form) return;
    const next = validate(new FormData(form));
    setErrors((prev) => ({ ...prev, [name]: next[name] }));
  };

  const send = (data: FormData) => {
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const details = [
      ["Name", get("name")],
      ["Business", get("company")],
      ["Email", get("email")],
      ["Phone", get("phone")],
      ["Phone users", get("users")],
      ["Topic", get("topic")],
    ]
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}: ${value}`);
    const subject = get("topic") ? `Website enquiry: ${get("topic")}` : "Website enquiry";
    const body = [...details, "", get("message")].join("\n");
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = validate(data);
    setErrors(next);
    const first = (Object.keys(next) as Field[])[0];
    if (first) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    send(data);
    setSent(true);
  };

  const label = "block text-small font-bold text-ink";
  const control =
    "mt-2 block w-full rounded-lg border border-line bg-canvas px-4 text-body-sm text-ink transition-colors placeholder:text-ink/60 hover:border-line-strong focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand aria-[invalid=true]:border-brand-strong";
  const errorText = "mt-2 text-small text-brand-strong";

  const describe = (name: Field) => (errors[name] ? errorId(name) : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor={fieldId("name")} className={label}>
          Your name <span aria-hidden="true" className="text-brand-strong">*</span>
        </label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describe("name")}
          onBlur={(e) => checkField("name", e.currentTarget.form)}
          className={`${control} h-12`}
        />
        {errors.name && (
          <p id={errorId("name")} className={errorText}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={fieldId("company")} className={label}>
          Business name
        </label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          autoComplete="organization"
          className={`${control} h-12`}
        />
      </div>

      <div>
        <label htmlFor={fieldId("email")} className={label}>
          Email <span aria-hidden="true" className="text-brand-strong">*</span>
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describe("email")}
          onBlur={(e) => checkField("email", e.currentTarget.form)}
          className={`${control} h-12`}
        />
        {errors.email && (
          <p id={errorId("email")} className={errorText}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={fieldId("phone")} className={label}>
          Phone
        </label>
        <input
          id={fieldId("phone")}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={`${control} h-12`}
        />
      </div>

      <div>
        <label htmlFor={fieldId("topic")} className={label}>
          What can we help with?
        </label>
        <select id={fieldId("topic")} name="topic" defaultValue="" className={`${control} h-12 cursor-pointer`}>
          <option value="">Choose a topic</option>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={fieldId("users")} className={label}>
          How many people use phones?
        </label>
        <select id={fieldId("users")} name="users" defaultValue="" className={`${control} h-12 cursor-pointer`}>
          <option value="">Choose a range</option>
          {userCounts.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={fieldId("message")} className={label}>
          Message <span aria-hidden="true" className="text-brand-strong">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describe("message")}
          onBlur={(e) => checkField("message", e.currentTarget.form)}
          className={`${control} resize-y py-3`}
        />
        {errors.message && (
          <p id={errorId("message")} className={errorText}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-ink/75">
          <span aria-hidden="true" className="text-brand-strong">*</span> Required
        </p>
        <button type="submit" className={`${buttonClass()} w-full sm:w-auto sm:px-9`}>
          Send Message
        </button>
      </div>

      <p role="status" className="text-body-sm sm:col-span-2 empty:hidden">
        {sent &&
          `Your email app should open with your message ready to send. If it doesn’t, email ${business.email} or call ${business.phone.display}.`}
      </p>
    </form>
  );
}
