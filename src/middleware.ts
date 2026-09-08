import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const hostname = context.url.hostname;

  if (hostname === "ravengrid.ravenorix.com") {
    const pathname = context.url.pathname;

    if (!pathname.startsWith("/ravengrid")) {
      const newPath =
        pathname === "/"
          ? "/ravengrid"
          : `/ravengrid${pathname}`;

      return context.rewrite(new URL(newPath, context.url));
    }
  }

  return next();
});