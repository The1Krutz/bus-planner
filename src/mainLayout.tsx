import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '70px 1fr 70px',
        gridTemplateAreas: `
        'header'
        'content'
        'footer'
        `,
        overflow: 'scroll',
      }}
    >
      <h2 style={{ gridArea: 'header' }}>
        Bus planner - [figure out how to hoist the name of the child component
        into here]
      </h2>
      <div style={{ gridArea: 'content', overflow: 'scroll' }}>
        <Outlet />
      </div>
      <div style={{ gridArea: 'footer' }}>Footer content</div>
    </div>
  );
}
