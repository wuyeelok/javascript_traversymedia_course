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
        fizzbuzz_challenge: resolve(
          __dirname,
          "sandbox/05-iteration-array-methods/04-fizzbuzz-challenge/index.html"
        ),
      },
    },
  },
};
