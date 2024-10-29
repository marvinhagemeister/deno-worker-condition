import { Worker } from "node:worker_threads";

new Worker("./worker.mjs", {
  execArgv: ["--conditions", "foo"],
});
