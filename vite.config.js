import htmlPurge from "vite-plugin-purgecss";
import { resolve } from "path";

export default {
  base: "/javascript_traversymedia_course/",
  plugins: [htmlPurge()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        truthy_falsy: resolve(
          __dirname,
          "sandbox/04-logic-control-flow/05-truthy-falsy/index.html"
        ),
      },
    },
  },
};
