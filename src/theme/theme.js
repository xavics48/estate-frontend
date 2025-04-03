// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Global SVG fixes
      svg: {
        transform: "translateZ(0)", // Fix blur on iOS
        shapeRendering: "crispEdges", // Sharp edges
      },
      // Optional: Fix font smoothing for icons
      ".icon": {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
    },
  },
});

export default theme;