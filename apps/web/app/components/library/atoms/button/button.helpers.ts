import { cn } from "@/lib/utils";
import { BUTTON_COLORS } from "./button.constants";
import { ButtonVariant, Color, Design, StyleObject } from "./button.types";

export const generateSolidStyles = (colors: Color[]): StyleObject => {
  const styles: Partial<StyleObject> = {};
  colors.forEach((color) => {
    switch (color) {
      case "primary":
        styles[color] = cn(
          "bg-primary-base hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-base"
        );
        break;

      case "secondary":
        styles[color] = cn(
          "bg-secondary-base hover:bg-secondary-dark dark:bg-secondary-dark dark:hover:bg-secondary-base"
        );
        break;
      case "success":
        styles[color] = cn(
          "bg-success-base hover:bg-success-dark dark:bg-success-dark dark:hover:bg-success-base"
        );
        break;
      case "warning":
        styles[color] = cn(
          "bg-warning-base hover:bg-warning-dark dark:bg-warning-dark dark:hover:bg-warning-base"
        );
        break;
      case "danger":
        styles[color] = cn(
          "bg-danger-base hover:bg-danger-dark dark:bg-danger-dark dark:hover:bg-danger-base"
        );
        break;
      case "info":
        styles[color] = cn(
          "bg-info-base hover:bg-info-dark dark:bg-info-dark dark:hover:bg-info-base"
        );
        break;
      case "highlight":
        styles[color] = cn(
          "bg-highlight-base hover:bg-highlight-dark dark:bg-highlight-dark dark:hover:bg-highlight-base"
        );
        break;
      case "neutral":
        styles[color] = cn(
          "bg-neutral-900 hover:bg-neutral-700 dark:text-neutral-900 dark:bg-neutral-50 dark:hover:bg-neutral-200"
        );
        break;
    }
  });
  return styles as StyleObject;
};

export const generateOutlineStyles = (colors: Color[]): StyleObject => {
  const styles: Partial<StyleObject> = {};
  colors.forEach((color) => {
    switch (color) {
      case "primary":
        styles[color] = cn(
          "text-primary-base hover:bg-primary-lighter dark:hover:bg-primary-darkest"
        );
        break;

      case "secondary":
        styles[color] = cn(
          "text-secondary-base hover:bg-secondary-lighter dark:hover:bg-secondary-darkest"
        );
        break;
      case "success":
        styles[color] = cn(
          "text-success-base hover:bg-success-lighter dark:hover:bg-success-darkest"
        );
        break;
      case "warning":
        styles[color] = cn(
          "text-warning-base hover:bg-warning-lighter dark:hover:bg-warning-darkest"
        );
        break;
      case "danger":
        styles[color] = cn(
          "text-danger-base hover:bg-danger-lighter dark:hover:bg-danger-darkest"
        );
        break;
      case "info":
        styles[color] = cn(
          "text-info-base hover:bg-info-lighter dark:hover:bg-info-darkest"
        );
        break;
      case "highlight":
        styles[color] = cn(
          "text-highlight-base hover:bg-highlight-lighter dark:hover:bg-highlight-darkest"
        );
        break;
      case "neutral":
        styles[color] = cn(
          "text-neutral-900 hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-700"
        );
        break;
    }
  });
  return styles as StyleObject;
};

export const generateFancyStyles = (colors: Color[]): StyleObject => {
  const styles: Partial<StyleObject> = {};
  colors.forEach((color) => {
    switch (color) {
      case "primary":
        styles[color] = cn(
          "bg-primary-base hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-base after:from-primary-dark"
        );
        break;

      case "secondary":
        styles[color] = cn(
          "bg-secondary-base hover:bg-secondary-dark dark:bg-secondary-dark dark:hover:bg-secondary-base after:from-secondary-dark"
        );
        break;
      case "success":
        styles[color] = cn(
          "bg-success-base hover:bg-success-dark dark:bg-success-dark dark:hover:bg-success-base after:from-success-dark"
        );
        break;
      case "warning":
        styles[color] = cn(
          "bg-warning-base hover:bg-warning-dark dark:bg-warning-dark dark:hover:bg-warning-base after:from-warning-dark"
        );
        break;
      case "danger":
        styles[color] = cn(
          "bg-danger-base hover:bg-danger-dark dark:bg-danger-dark dark:hover:bg-danger-base after:from-danger-dark"
        );
        break;
      case "info":
        styles[color] = cn(
          "bg-info-base hover:bg-info-dark dark:bg-info-dark dark:hover:bg-info-base after:from-info-dark"
        );
        break;
      case "highlight":
        styles[color] = cn(
          "bg-highlight-base hover:bg-highlight-dark dark:bg-highlight-dark dark:hover:bg-highlight-base after:from-highlight-dark"
        );
        break;
      case "neutral":
        styles[color] = cn(
          "bg-neutral-900 hover:bg-neutral-700 dark:text-neutral-900 dark:bg-neutral-50 dark:hover:bg-neutral-200 after:from-neutral-700 dark:after:from-neutral-200"
        );
        break;
    }
  });
  return styles as StyleObject;
};

export const generateLinkStyles = (colors: Color[]): StyleObject => {
  const styles: Partial<StyleObject> = {};
  colors.forEach((color) => {
    switch (color) {
      case "primary":
        styles[color] = cn("text-primary-base");
        break;

      case "secondary":
        styles[color] = cn("text-secondary-base");
        break;
      case "success":
        styles[color] = cn("text-success-base");
        break;
      case "warning":
        styles[color] = cn("text-warning-base");
        break;
      case "danger":
        styles[color] = cn("text-danger-base");
        break;
      case "info":
        styles[color] = cn("text-info-base");
        break;
      case "highlight":
        styles[color] = cn("text-highlight-base");
        break;
      case "neutral":
        styles[color] = cn("text-main");
        break;
    }
  });
  return styles as StyleObject;
};

export const generateFlatStyles = (colors: Color[]): StyleObject => {
  const styles: Partial<StyleObject> = {};
  colors.forEach((color) => {
    switch (color) {
      case "primary":
        styles[color] = cn(
          "text-primary-base hover:bg-primary-lighter dark:hover:bg-primary-darkest"
        );
        break;

      case "secondary":
        styles[color] = cn(
          "text-secondary-base hover:bg-secondary-lighter dark:hover:bg-secondary-darkest"
        );
        break;
      case "success":
        styles[color] = cn(
          "text-success-base hover:bg-success-lighter dark:hover:bg-success-darkest"
        );
        break;
      case "warning":
        styles[color] = cn(
          "text-warning-base hover:bg-warning-lighter dark:hover:bg-warning-darkest"
        );
        break;
      case "danger":
        styles[color] = cn(
          "text-danger-base hover:bg-danger-lighter dark:hover:bg-danger-darkest"
        );
        break;
      case "info":
        styles[color] = cn(
          "text-info-base hover:bg-info-lighter dark:hover:bg-info-darkest"
        );
        break;
      case "highlight":
        styles[color] = cn(
          "text-highlight-base hover:bg-highlight-lighter dark:hover:bg-highlight-darkest"
        );
        break;
      case "neutral":
        styles[color] = cn(
          "text-main hover:bg-neutral-200 dark:hover:bg-neutral-700"
        );
        break;
    }
  });
  return styles as StyleObject;
};

export const generateCompoundVariants = (design: Design): ButtonVariant[] => {
  const styleGenerators = {
    outline: generateOutlineStyles,
    solid: generateSolidStyles,
    fancy: generateFancyStyles,
    link: generateLinkStyles,
    flat: generateFlatStyles,
  };

  const styleGenerator = styleGenerators[design];
  return styleGenerator ? generateStyles(styleGenerator, design) : [];
};

const generateStyles = (
  // eslint-disable-next-line no-unused-vars
  styleGenerator: (colors: Color[]) => StyleObject,
  design: Design
) => {
  const styles = styleGenerator(BUTTON_COLORS);
  return Object.entries(styles).map(([color, classString]) => ({
    color: color as Color,
    design,
    class: classString,
  }));
};
