import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '70px 1fr 70px',
        gridTemplateAreas: `
        'header'
        'content'
        'footer'
        `,
      }}
    >
      <h2 style={{ gridArea: 'header' }}>Bus planner</h2>
      <div style={{ gridArea: 'content' }}>
        <Outlet />
      </div>
      <div style={{ gridArea: 'footer' }}>Footer content</div>
    </div>
  );
}
