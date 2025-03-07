"use client";

import { SectionSeparator } from "./section-separator";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer className="px-4 md:px-12 py-3 md:py-6 bg-background">
      <SectionSeparator />
      <div className="text-center mt-6">
        <p className="text-xs md:text-sm font-medium leading-6">
          {intl.formatMessage({ id: "footer.copyright" })}
        </p>
      </div>
    </footer>
  );
}
