import './app.css';
import { NavLink } from 'react-router';

export function App() {
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
