"use client";

import Link from "next/link";
import { useId, useState, type FormEvent, type HTMLInputAutoCompleteAttribute } from "react";
import { buttonClass } from "@/components/ui/ButtonLink";
import { business } from "@/lib/site";

type Field = "name" | "business" | "phone" | "email" | "city";
type Errors = Partial<Record<Field, string>>;

const topics = ["Business Phone Systems", "Managed IT", "Cybersecurity", "Security Cameras", "Something else"];

// In display order, so a failed submit focuses the first problem on the page.
const inputs: {
  name: Field;
  label: string;
  type: "text" | "tel" | "email";
  autoComplete: HTMLInputAutoCompleteAttribute;
  placeholder?: string;
}[] = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "business", label: "Business name", type: "text", autoComplete: "organization" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "city", label: "City and state", type: "text", autoComplete: "address-level2", placeholder: "Ventura, CA" },
];

function validate(data: FormData): Errors {
  const get = (k: Field) => String(data.get(k) ?? "").trim();
  const errors: Errors = {};
  if (!get("name")) errors.name = "Enter your name so we know who to reply to.";
  if (!get("business")) errors.business = "Enter your business name.";
  if (!get("phone")) errors.phone = "Enter a phone number so we can reach you.";
  else if (get("phone").replace(/\D/g, "").length < 7) errors.phone = "Enter a phone number like (805) 658-2329.";
  if (!get("email")) errors.email = "Enter your email address so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) errors.email = "Enter an email address like name@company.com.";
  if (!get("city")) errors.city = "Enter your city and state, like Ventura, CA.";
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
      ["Business", get("business")],
      ["Phone", get("phone")],
      ["Email", get("email")],
      ["City and state", get("city")],
      ["Needs help with", get("topic")],
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
    const first = inputs.find((input) => next[input.name]);
    if (first) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
      return;
    }
    send(data);
    setSent(true);
  };

  const label = "block text-small font-bold text-ink";
  const control =
    "mt-2 block w-full rounded-lg border border-line bg-canvas px-4 text-body-sm text-ink transition-colors placeholder:text-ink/60 hover:border-line-strong focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand aria-[invalid=true]:border-brand-strong";
  const errorText = "mt-2 text-small text-brand-strong";
  const inlineLink = "font-medium text-brand-strong underline underline-offset-4 hover:no-underline";

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={fieldId(input.name)} className={label}>
            {input.label}
          </label>
          <input
            id={fieldId(input.name)}
            name={input.name}
            type={input.type}
            autoComplete={input.autoComplete}
            placeholder={input.placeholder}
            required
            aria-invalid={Boolean(errors[input.name])}
            aria-describedby={errors[input.name] ? errorId(input.name) : undefined}
            onBlur={(e) => checkField(input.name, e.currentTarget.form)}
            className={`${control} h-12`}
          />
          {errors[input.name] && (
            <p id={errorId(input.name)} className={errorText}>
              {errors[input.name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor={fieldId("topic")} className={label}>
          What do you need help with?
        </label>
        <select id={fieldId("topic")} name="topic" defaultValue="" className={`${control} h-12 cursor-pointer`}>
          <option value="">Please choose one</option>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={fieldId("message")} className={label}>
          Tell us how we can help (optional)
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          placeholder="A line or two is plenty"
          className={`${control} resize-y py-3`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:gap-6">
        <button type="submit" className={`${buttonClass()} w-full sm:w-auto sm:px-9`}>
          Send message
        </button>
        <p className="text-body-sm">
          Urgent? Call{" "}
          <a href={`tel:${business.phone.tel}`} className={inlineLink}>
            {business.phone.display}
          </a>{" "}
          instead.
        </p>
      </div>

      <p className="text-small sm:col-span-2">
        By sending this, you agree {business.legalName} may contact you about your inquiry. Opt out
        any time. See our{" "}
        <Link href="/privacy-policy" className={inlineLink}>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-and-conditions" className={inlineLink}>
          Terms &amp; Conditions
        </Link>
        .
      </p>

      <p role="status" className="text-body-sm sm:col-span-2 empty:hidden">
        {sent &&
          `Your email app should open with your message ready to send. If it doesn’t, email ${business.email} or call ${business.phone.display}.`}
      </p>
    </form>
  );
}
