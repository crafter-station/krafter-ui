export type Design = "solid" | "outline" | "fancy" | "link" | "flat";
export type Size = "small" | "medium" | "large";
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "highlight"
  | "neutral";

export type StyleObject = {
  // eslint-disable-next-line no-unused-vars
  [key in Color]: string;
};

export interface ButtonVariant {
  color: Color;
  design: Design;
  class: string;
}
