import { tv, type VariantProps } from "tailwind-variants";

export type TabsVaraints = VariantProps<typeof tabs>;

export const tabs = tv({
  slots: {
    base: "flex flex-col",
    ul: "flex gap-2 rtl:space-x-reverse border-b",
    // content: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4 grid overflow-hidden",
    content: "mt-4 grid overflow-hidden",
  },
  variants: {
    tabStyle: {
      full: {
        ul: "border-b-0 gap-0 rounded-lg shadow-sm divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700"
      },
      pill: {
        ul: "border-b-0"
      },
      underline: {
      },
      none: {}
    },
    vertical: {
      true: {
        base: "flex-row",
        ul: "flex-col",
        content: "mt-0 ms-4"
      }
    },
  },
  defaultVariants: {
    tabStyle: "none",
  }
});

export const tabItem = tv({
  slots: {
    base: "group focus-within:z-10",
    button: "p-4 inline-block rounded-t-lg text-sm font-medium text-center disabled:cursor-not-allowed",
    active: "text-primary-600 bg-gray-100 dark:bg-gray-800 dark:text-primary-500",
    inactive: "text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"

  },
  variants: {
    tabStyle: {
      full: {
        base: "w-full",
        button: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg",
        active: " text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:bg-gray-700 dark:text-white",
        inactive: "text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      },
      pill: {
        button: "py-3 px-4 rounded-lg",
        active: "text-white bg-primary-600",
        inactive: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      },
      underline: {
        base: "-mb-px",
        button: "p-4 border-b-2 bg-transparent",
        active: "border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500",
        inactive: "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400"
      },
      none: {
        active: "",
        inactive: ""
      }
    },
    vertical: {
      true: {
        button: "w-full text-start"
      }
    },
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed text-gray-100"
      }
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: "" // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: "" // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
