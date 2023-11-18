import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Suspense fallback={<p>is Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
