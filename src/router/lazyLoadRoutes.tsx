import { lazy, Suspense } from "react";

/**
 * Lazily load the mentioned component which resides in page directory
 * This method will be used in routes so that the files are loaded only
 * when users are on that route
 */

/**
 * IMPORTANT: import method requires to get all slice bars visible in order to work correctly.
 * There is no other way in this moment
 */

const getLazyComponent = (componentPath: string) => {
  const splittedPath = componentPath.split("/");

  if (splittedPath.length === 2) {
    return lazy(
      () => import(/* @vite-ignore */ `../views/${splittedPath[1]}/index.tsx`)
    );
  }

  return lazy(
    () =>
      import(
        /* @vite-ignore */ `../views/${splittedPath[1]}/${splittedPath[2]}/index.tsx`
      )
  );
};

export const lazyLoadRoutes = (componentPath: string) => {
  const LazyElement = getLazyComponent(componentPath);

  // Wrapping around suspense component is mandatory
  return (
    <Suspense fallback="">
      <LazyElement />
    </Suspense>
  );
};
