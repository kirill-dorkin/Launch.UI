import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Affordable Repair Packages",
  description = "Transparent pricing with no hidden costs.",
  plans = [
    {
      name: "Basic",
      icon: <User className="size-4" />,
      description: "Diagnostics and standard repairs",
      price: 49,
      priceNote: "Includes free consultation",
      cta: {
        variant: "default",
        label: "Choose Basic",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Hardware diagnostics",
        "Operating system reinstall",
      ],
      variant: "default",
    },
    {
      name: "Standard",
      icon: <User className="size-4" />,
      description: "Advanced repairs and virus removal",
      price: 99,
      priceNote: "Parts not included",
      cta: {
        variant: "default",
        label: "Choose Standard",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Full diagnostics",
        "Virus and malware removal",
        "System optimization",
      ],
      variant: "glow-brand",
    },
    {
      name: "Premium",
      icon: <Users className="size-4" />,
      description: "Priority service for businesses",
      price: 199,
      priceNote: "Priority turnaround",
      cta: {
        variant: "default",
        label: "Choose Premium",
        href: siteConfig.pricing.team,
      },
      features: [
        "Priority diagnostics",
        "On-site repairs",
        "Extended warranty",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
