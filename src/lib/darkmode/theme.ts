import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export const darkmode = tv({
  base: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5"
});

export type DarkModeTheme = ClassValue;
