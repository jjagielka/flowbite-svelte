import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";
import type { PopperProps } from "$lib/utils/Popper.svelte";

interface DropdownProps extends PopperProps {
  header?: Snippet;
  footer?: Snippet;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  activeUrl?: string;
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
}

interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
}

interface DropdownGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export { type DropdownProps, type DropdownDividerProps, type DropdownItemProps, type DropdownGroupProps, type DropdownHeaderProps, type DropdownFooterProps };
