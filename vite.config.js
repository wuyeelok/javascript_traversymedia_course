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
        callback: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/03-callbacks/index.html"
        ),
        ajax_xhrobj: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/04-ajax-xhr/index.html"
        ),
        chunkjoke: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/05-joke-generator-challenge/chuck-joke-generator/index.html"
        ),
        callbackhell: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/06-callback-hell/index.html"
        ),
        promiseintro: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/07-promises/index.html"
        ),
        promisechain: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/09-promise-chaining/index.html"
        ),
        promise_vs_callback_hell: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/10-promises-vs-callback-hell/index.html"
        ),
        promise_all: resolve(
          __dirname,
          "sandbox/09-asynchronous-javascript/11-promise-all/index.html"
        ),
        fetch_basic: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/01-fetch-basics/index.html"
        ),
        random_user_project: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/02-random-user-project/random-user-generator/index.html"
        ),
        fetch_option: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/03-fetch-options/index.html"
        ),
        typicode_todo_project: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/04-typicode-todos-mini-project/typicode-todos/index.html"
        ),
        fetch_error_handle: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/05-fetch-error-handling/index.html"
        ),
        async_await: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/06-async-await/index.html"
        ),
        try_catch: resolve(
          __dirname,
          "sandbox/10-fetch-and-async-await/07-try-catch/index.html"
        ),
      },
    },
  },
};
