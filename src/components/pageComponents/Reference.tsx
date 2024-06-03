import { ProjectLinks } from "@/utils/interfaces";
import {
  TypographyH2,
  TypographyH5,
  TypographyP,
  TypographySmall,
} from "../ui/typography";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

interface ReferenceProps {
  links: ProjectLinks;
}

export const Reference = ({ links }: ReferenceProps) => {
  const { live, code, documentation } = links;
  return (
    <section className="px-2 space-y-4">
      <TypographyH2>Reference</TypographyH2>
      <div className="flex items-center">
        <Collapsible className="space-y-2">
          <div className="flex items-center justify-between space-x-2 px-2">
            <TypographyP>Related to {code.length} repositories</TypographyP>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2 pr-3">
            {code.map((repo) => {
              const { label, url } = repo;
              return (
                <div className="rounded-md border px-4 py-1">
                  <Link href={url} target="_blank">
                    <TypographyP>{label}</TypographyP>
                  </Link>
                </div>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {(live || documentation) && (
          <div className="flex space-x-4 items-center self-start">
            <Separator orientation="vertical" className="h-8"></Separator>
            {documentation && (
              <Link href={documentation} target="_blank">
                <Button size={"xl"} variant="outline">
                  <TypographyH5>See docs</TypographyH5>
                </Button>
              </Link>
            )}
            {live && documentation && (
              <Separator orientation="vertical" className="h-8"></Separator>
            )}
            {live && (
              <Link href={live} target="_blank">
                <Button size={"xl"}>
                  <TypographyH5>View live</TypographyH5>
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
