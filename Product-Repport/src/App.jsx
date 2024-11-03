import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx'
import AdminDashboard from './components/AdminDashboard.jsx';
import OperatorDashboard from './components/OperatorDashboard.jsx';

function App() {
  console.log('App component is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/operator" element={<OperatorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
