import React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, LucideIcon, MinusIcon } from "lucide-react";
import { Badge } from "./badge";

function PricingTable({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table className={cn("w-full text-sm", className)} {...props} />
    </div>
  );
}

function PricingTableHeader({ ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr]:divide-x [&_tr]:border-b [&_tr]:border-slate-200", className)}
      {...props}
    />
  );
}

function PricingTableRow({ ...props }: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" {...props} />;
}

function PricingTableCell({
  className,
  children,
  ...props
}: React.ComponentProps<"td"> & { children: boolean | string }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle whitespace-nowrap text-center text-slate-700",
        className
      )}
      {...props}
    >
      {children === true ? (
        <CheckIcon
          aria-hidden="true"
          className="size-4 mx-auto text-brand-600"
        />
      ) : children === false ? (
        <MinusIcon
          aria-hidden="true"
          className="size-4 mx-auto text-slate-300"
        />
      ) : (
        children
      )}
    </td>
  );
}

function PricingTableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "p-4 text-left align-middle font-medium whitespace-nowrap text-slate-600",
        className
      )}
      {...props}
    />
  );
}

type PricingPlanType = {
  name: string;
  icon: LucideIcon;
  badge: string;
  price: string;
  compareAt?: string;
};

function PricingTablePlan({
  name,
  badge,
  price,
  compareAt,
  icon: Icon,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & PricingPlanType) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-3 font-normal text-left",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full border border-slate-200 p-1.5 text-brand-600">
          {Icon && <Icon className="h-3 w-3" />}
        </div>
        <h3 className="text-slate-500 font-mono text-sm">{name}</h3>
        <Badge
          variant="secondary"
          className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-normal"
        >
          {badge}
        </Badge>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        {compareAt && (
          <span className="text-slate-400 text-sm line-through">
            {compareAt}
          </span>
        )}
      </div>
      <div className="relative z-10 mt-4">{children}</div>
    </div>
  );
}

type FeatureValue = boolean | string;

type FeatureItem = {
  label: string;
  values: FeatureValue[];
};

export {
  type PricingPlanType,
  type FeatureValue,
  type FeatureItem,
  PricingTable,
  PricingTableHeader,
  PricingTableBody,
  PricingTableRow,
  PricingTableHead,
  PricingTableCell,
  PricingTablePlan,
};
