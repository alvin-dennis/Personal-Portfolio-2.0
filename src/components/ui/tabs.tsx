"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// Variants for TabsList
const tabsListVariants = cva("flex items-center shrink-0", {
  variants: {
    variant: {
      default: "bg-accent p-1",
      button: "",
      line: "border-b border-border",
    },
    shape: {
      default: "",
      pill: "",
    },
  },
  compoundVariants: [
    { variant: "default", className: "p-1.5 gap-2.5" },
    { variant: "default", className: "p-1 gap-2" },
    { variant: "default", className: "p-1 gap-1.5" },
    { variant: "default", className: "p-1 gap-1" },

    {
      variant: "default",
      shape: "default",
      className: "rounded-lg",
    },
    {
      variant: "default",
      shape: "default",
      className: "rounded-lg",
    },
    {
      variant: "default",
      shape: "default",
      className: "rounded-md",
    },
    {
      variant: "default",
      shape: "default",
      className: "rounded-md",
    },

    { variant: "line", className: "gap-9" },
    { variant: "line", className: "gap-8" },
    { variant: "line", className: "gap-4" },
    { variant: "line", className: "gap-4" },

    {
      variant: "default",
      shape: "pill",
      className: "rounded-full [&_[role=tab]]:rounded-full",
    },
    {
      variant: "button",
      shape: "pill",
      className: "rounded-full [&_[role=tab]]:rounded-full",
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

// Variants for TabsTrigger
const tabsTriggerVariants = cva(
  "shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&:hover_svg]:text-primary [&[data-state=active]_svg]:text-primary",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground data-[state=active]:bg-background hover:text-foreground data-[state=active]:text-foreground data-[state=active]:shadow-xs data-[state=active]:shadow-black/5",
        button:
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg text-accent-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-foreground",
        line: "border-b-2 text-muted-foreground border-transparent data-[state=active]:border-primary hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:text-primary",
      },
    },
    compoundVariants: [
      { variant: "default", className: "py-2.5 px-4 rounded-md" },
      { variant: "default", className: "py-1.5 px-3 rounded-md" },
      { variant: "default", className: "py-1.5 px-2.5 rounded-sm" },
      { variant: "default", className: "py-1 px-2 rounded-sm" },

      { variant: "button", className: "py-3 px-4 rounded-lg" },
      { variant: "button", className: "py-2.5 px-3 rounded-lg" },
      { variant: "button", className: "py-2 px-2.5 rounded-md" },
      { variant: "button", className: "py-1.5 px-2 rounded-md" },

      { variant: "line", className: "py-3" },
      { variant: "line", className: "py-2.5" },
      { variant: "line", className: "py-2" },
      { variant: "line", className: "py-1.5" },
    ],
    defaultVariants: {
      variant: "default",
    },
  },
);

// Variants for TabsContent
const tabsContentVariants = cva(
  "mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Context
type TabsContextType = {
  variant?: "default" | "button" | "line";
};
const TabsContext = React.createContext<TabsContextType>({
  variant: "default",
});

// Components
function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant = "default",
  shape = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsContext.Provider value={{ variant: variant || "default" }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          tabsListVariants({ variant, shape }),
          "inline-flex w-fit items-center justify-center rounded-full bg-muted p-1",
          className,
        )}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> & VariantProps<typeof tabsContentVariants>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
