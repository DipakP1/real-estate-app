// import { defaultCache } from "@serwist/next/browser";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
// import { installSerwist } from "@serwist/sw";
import { Serwist } from "serwist";
import { defaultCache } from "@serwist/next/worker";

// declare const self: ServiceWorkerGlobalScope & {
//   // Change this attribute's name to your `injectionPoint`.
//   __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
// };

// // Anything random.
// const revision = crypto.randomUUID();

// installSerwist({
//   precacheEntries: self.__SW_MANIFEST,
//   skipWaiting: true,
//   clientsClaim: true,
//   navigationPreload: true,
// //   runtimeCaching: defaultCache,
//   fallbacks: {
//     entries: [
//       {
//         url: "/~offline",
//         revision,
//         matcher({ request }) {
//           return request.destination === "document";
//         },
//       },
//     ],
//   },
// });

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();