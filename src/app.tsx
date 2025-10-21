// import { useState } from 'react';
import './app.css';
import { NavLink } from 'react-router';

export function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavLink to="/satisfactory" end>
          Satisfactory
        </NavLink>
      </div>
    </>
  );
}
