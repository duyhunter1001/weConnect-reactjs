import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// Supports weights 100-900
import '@fontsource-variable/public-sans';
export const RootLayout = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};
