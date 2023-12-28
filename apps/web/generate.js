const colors = [
  "blue",
  "purple",
  "green",
  "red",
  "orange",
  "yellow",
  "teal",
  "pink",
];

const newColors = colors.reduce((acc, color) => {
  return {
    ...acc,
    [color]: {
      50: `hsl(var(--color-${color}-50))`,
      100: `hsl(var(--color-${color}-100))`,
      200: `hsl(var(--color-${color}-200))`,
      300: `hsl(var(--color-${color}-300))`,
      400: `hsl(var(--color-${color}-400))`,
      500: `hsl(var(--color-${color}-500))`,
      600: `hsl(var(--color-${color}-600))`,
      700: `hsl(var(--color-${color}-700))`,
      800: `hsl(var(--color-${color}-800))`,
      900: `hsl(var(--color-${color}-900))`,
    },
  };
}, {});

console.log({ newColors });
