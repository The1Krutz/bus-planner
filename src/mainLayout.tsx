import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div
      style={{
        // height: '100vh',
        width: '100%',
      }}
    >
      <h2>Bus planner</h2>
      <Outlet />
    </div>
  );
}
