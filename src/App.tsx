import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BuyDataBundles from './pages/BuyDataBundles';
import MyESims from './pages/MyESims';
import Users from './pages/Users';
import CompanyInfo from './pages/CompanyInfo';
import WalletHistory from './pages/WalletHistory';
import OrderHistory from './pages/OrderHistory';
import Reports from './pages/Reports';
import ApiDetails from './pages/ApiDetails';
// import SystemStatus from './pages/SystemStatus';
import Developers from './pages/Developers';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />

        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bundles" element={<BuyDataBundles />} />
          <Route path="esims" element={<MyESims />} />
          <Route path="users" element={<Users />} />
          <Route path="company" element={<CompanyInfo />} />
          <Route path="wallet" element={<WalletHistory />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="api" element={<ApiDetails />} />
          {/* <Route path="status" element={<SystemStatus />} /> */}
          <Route path="devs" element={<Developers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
