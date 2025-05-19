import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { jobsMap } from "@/lib/jobs";

interface JobsProps {
  jobs: {
    logo: string;
    role: string;
    company: string;
    date: string;
    activities: string[];
  }[];
}

export default function Jobs({ jobs }: JobsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {jobs.map((job, index) => {
        const srcImage = jobsMap[job.logo]?.img;

        return (
          <div className="border-b" key={index}>
            <AccordionItem value={`item-${index}`} className="w-full">
              <AccordionTrigger className="w-full hover:cursor-pointer hover:no-underline py-3 px-4 no-chevron">
                <div className="w-full flex justify-between">
                  <div className="flex space-x-4">
                    <img
                      src={srcImage}
                      alt={job.company}
                      className="rounded-full border-2 p-1 w-auto h-16"
                    />
                    <div className="flex flex-col justify-center space-y-1">
                      <span className="text-xl">{job.role}</span>
                      <span className="text-foreground/60">{job.company}</span>
                    </div>
                  </div>
                  <span className="text-foreground/60">{job.date}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="w-full px-4 flex flex-col">
                <ul className="list-disc list-inside space-y-1 text-foreground/60">
                  {job.activities.map((activity, index) => {
                    const [firstWord, ...rest] = activity.split(" ");
                    return (
                      <li key={index}>
                        <strong>{firstWord}</strong> {rest.join(" ")}
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </div>
        );
      })}
    </Accordion>
  );
}
