// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import OperatorDashboard from './OperatorDashboard';
import Login from './Login';

const Navbar = () => {
  return (
    <header className="navbar">
      <ul>
        <li><Link to="/admin" element={<AdminDashboard/>}>Admin Dashboard</Link></li>
        <li><Link to="/operator" element={<OperatorDashboard/>}>Operator Dashboard</Link></li>
        <li><Link to="/" element={<Login/>}>Logout</Link></li>
      </ul>
    </header>
  );
};

export default Navbar;
