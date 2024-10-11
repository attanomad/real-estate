"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const breadcrumbLabelByPath: Record<string, string> = {
  "": "Home",
  properties: "Properties",
  settings: "Settings",
};

export default function NavBreadcrumb() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const pathList = pathname === "/" ? [""] : pathname.split("/");

  return (
    <Breadcrumb className="flex">
      <BreadcrumbList>
        {pathList.map((p, idx) => {
          if (!breadcrumbLabelByPath[p]) {
            breadcrumbLabelByPath[p] = p[0].toUpperCase() + p.slice(1);
          }

          const label = breadcrumbLabelByPath[p];
          const sliced = pathList.slice(0, idx + 1).join("/");

          return (
            <Fragment key={p}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={sliced || "/"}>{t(label)}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {idx < pathList.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
