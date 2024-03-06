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
        array_method_challege: resolve(
          __dirname,
          "sandbox/05-iteration-array-methods/11-array-method-challenges/index.html"
        ),
        for_of: resolve(
          __dirname,
          "sandbox/05-iteration-array-methods/05-for-of-loop/index.html"
        ),
        for_in: resolve(
          __dirname,
          "sandbox/05-iteration-array-methods/06-for-in-loop/index.html"
        ),
        setcleartimeout: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/01-settimeout-cleartimeout/index.html"
        ),
        setclearinterval: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/02-setinterval-clearinterval/index.html"
        ),
      },
    },
  },
};
