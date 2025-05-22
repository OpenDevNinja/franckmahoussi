import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;