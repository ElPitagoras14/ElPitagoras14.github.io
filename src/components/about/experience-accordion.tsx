import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  metric: string;
  activities: string[];
}

interface ExperienceAccordionProps {
  jobs: Job[];
}

export function ExperienceAccordion({ jobs }: ExperienceAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-0"
      className="flex w-full flex-col gap-3"
    >
      {jobs.map((job, index) => {
        return (
          <AccordionItem
            // biome-ignore lint/suspicious/noArrayIndexKey: No need
            key={`item-${index}`}
            value={`item-${index}`}
            className="rounded-xl border-0 bg-muted/40 dark:bg-card ring-1 ring-foreground/10 transition-colors hover:ring-blue-400/30"
          >
            <AccordionTrigger className="rounded-xl px-6 py-5 text-left hover:no-underline transition-all [&>svg]:shrink-0 data-[state=open]:rounded-b-none">
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <span className="text-base md:text-lg font-semibold tracking-tight leading-tight">
                  {job.company}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">
                  {job.role}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/80 font-mono">
                  {job.period} · {job.location}
                </span>
                <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                  {job.metric}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="rounded-b-xl px-6 pt-0 pb-5">
              <ul className="flex flex-col gap-2.5 border-t border-foreground/10 pt-4">
                {job.activities.map((activity, i) => (
                  <li
                    // biome-ignore lint/suspicious/noArrayIndexKey: No need
                    key={i}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-blue-600 dark:text-blue-400 shrink-0">
                      —
                    </span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
