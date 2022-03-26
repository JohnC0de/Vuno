// vite.config.ts
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";

export default {
  plugins: [
    Unocss({
      presets: [presetWind()],
    }),
  ],
};
