import Link from "next/link";

import JobsLogo from "assets/sections/dashboard/navbar_icon_folio.svg";
import CareerLogo from "assets/sections/dashboard/navbar_icon_learntrack.svg";
import React from "react";

interface DashboardCardType {
  title: "Career" | "Jobs";
  description: string;
  link: string;
}

const TITLE_ICON_MAP = {
  Career: CareerLogo as typeof React.Component,
  Jobs: JobsLogo as typeof React.Component,
};

export default function DashboardCard({
  title,
  description,
  link,
}: DashboardCardType) {
  const Icon = TITLE_ICON_MAP[title as keyof typeof TITLE_ICON_MAP];

  return (
    <div className="flex max-w-[370px] flex-col items-start justify-start gap-4 rounded-2xl bg-white px-4 py-6">
      <div className="rounded-full bg-primary-light px-4 py-4">
        <Icon className="stroke-muted-primary stroke-1" />
      </div>
      <h3 className="text-2xl font-bold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <Link
        href={link}
        title={title}
        aria-label={title}
        className="mt-10 w-full rounded-[100px] border border-secondary py-2"
      >
        <p className="text-center text-base text-secondary">{title}</p>
      </Link>
    </div>
  );
}
