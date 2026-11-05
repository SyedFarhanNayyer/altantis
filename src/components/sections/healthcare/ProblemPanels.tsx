"use client";

import { Hourglass, MoonStars, Signpost, Stethoscope } from "@phosphor-icons/react";
import { useId, useState } from "react";
import { phoneProblems } from "@/content/healthcare";

const icons = [Signpost, Hourglass, Stethoscope, MoonStars];

// Four tall panels on desktop: hovering, clicking or tabbing to one widens it,
// turns it to the brand gradient and reveals its answer. Small screens stack them
// with every answer showing. All the text stays in the HTML. The active text has a
// fixed width on desktop, so it doesn't rewrap while its panel is widening.
export function ProblemPanels() {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <ul className="flex flex-col gap-3 lg:h-[27rem] lg:flex-row">
      {phoneProblems.map((item, i) => {
        const selected = active === i;
        const Icon = icons[i];
        const answerId = `${baseId}-${i}`;
        return (
          <li
            key={item.problem}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
            className={`relative flex flex-col overflow-hidden rounded-[0.625rem] bg-sand p-6 transition-[flex-grow,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:min-w-0 lg:basis-0 lg:p-5 xl:p-7 ${
              selected ? "lg:grow-[2.6] lg:bg-brand-gradient-card lg:text-on-dark" : "lg:grow"
            }`}
          >
            <Icon size={34} aria-hidden="true" className={selected ? "text-brand lg:text-on-dark" : "text-brand"} />

            <h3 className={`mt-5 lg:mt-auto ${selected ? "lg:w-[17.5rem] xl:w-[23rem]" : ""}`}>
              <button
                type="button"
                aria-expanded={selected}
                aria-controls={answerId}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`block cursor-pointer text-left font-display font-bold after:absolute after:inset-0 after:rounded-[0.625rem] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-current max-lg:pointer-events-none ${
                  selected ? "text-title-lg" : "text-title-lg lg:text-title-sm"
                }`}
              >
                {item.problem}
              </button>
            </h3>

            <div
              id={answerId}
              className={`mt-3 transition-opacity duration-500 motion-reduce:transition-none lg:w-[17.5rem] xl:w-[23rem] ${
                selected ? "" : "lg:invisible lg:mt-0 lg:h-0 lg:opacity-0"
              }`}
            >
              <p className="text-body">{item.fix}</p>
              <p className={`mt-4 border-t pt-4 text-small font-medium ${selected ? "border-line lg:border-on-dark/40" : "border-line"}`}>
                {item.plan}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
