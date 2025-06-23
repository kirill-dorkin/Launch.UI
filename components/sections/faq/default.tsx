import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How long will my repair take?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Most repairs are completed within 1-2 business days. We&apos;ll give you an exact estimate after diagnostics.
        </p>
      ),
    },
    {
      question: "Do you use original parts?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          We source high-quality original or OEM parts to ensure the best reliability for your device.
        </p>
      ),
    },
    {
      question: "Is there any warranty?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Yes, all repairs come with a 90-day warranty covering both parts and labor.
        </p>
      ),
    },
    {
      question: "Can you come to my location?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          We offer on-site service for business clients and by request for home users.
        </p>
      ),
    },
    {
      question: "What if my data is lost?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Our specialists can attempt data recovery from damaged drives. We&apos;ll let you know the chances of success after evaluation.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
