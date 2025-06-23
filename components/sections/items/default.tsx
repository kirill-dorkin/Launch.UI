import {
  BugIcon,
  Clock3Icon,
  DatabaseIcon,
  HardDriveIcon,
  Laptop2Icon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Our Services",
  items = [
    {
      title: "Free diagnostics",
      description: "We identify issues quickly at no cost",
      icon: <WrenchIcon className="size-5 stroke-1" />,
    },
    {
      title: "Virus removal",
      description: "Clean malware and secure your system",
      icon: <BugIcon className="size-5 stroke-1" />,
    },
    {
      title: "Data recovery",
      description: "Restore lost files from damaged drives",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Hardware replacement",
      description: "Quality parts for all brands and models",
      icon: <HardDriveIcon className="size-5 stroke-1" />,
    },
    {
      title: "System cleanup",
      description: "Improve performance and stability",
      icon: <RefreshCcwIcon className="size-5 stroke-1" />,
    },
    {
      title: "Upgrades",
      description: "RAM, SSD and other component upgrades",
      icon: <Laptop2Icon className="size-5 stroke-1" />,
    },
    {
      title: "On-site support",
      description: "We can come to your home or office",
      icon: <Clock3Icon className="size-5 stroke-1" />,
    },
    {
      title: "Warranty",
      description: "All repairs backed by our service guarantee",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
