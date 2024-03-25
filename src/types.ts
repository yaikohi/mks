import type { Component, JSX } from "solid-js";

export type ComponentWithGenericChildrenType = Component<
  { children: JSX.Element }
>;
