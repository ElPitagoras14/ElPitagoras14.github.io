import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface AccordionListProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="w-full">
          <AccordionTrigger className="w-full hover:cursor-pointer text-lg">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="w-full text-base">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
