// AdminRoutes.js
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../components/admin/RequireAuth';
import AdminLayout from '../components/admin/AdminLayout';
import Loading from '../components/common/Loading';

const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const ProductList = lazy(() => import('../pages/admin/Products/List'));
const ProductAdd = lazy(() => import('../pages/admin/Products/Add'));
const ProductEdit = lazy(() => import('../pages/admin/Products/Edit'));
const ServiceList = lazy(() => import('../pages/admin/Services/List'));
const ServiceAdd = lazy(() => import('../pages/admin/Services/Add'));
const ServiceEdit = lazy(() => import('../pages/admin/Services/Edit'));
const Orders = lazy(() => import('../pages/admin/Orders'));
const Users = lazy(() => import('../pages/admin/Users'));
const Settings = lazy(() => import('../pages/admin/Settings'));
const Login = lazy(() => import('../pages/admin/Login'));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="login" element={<Login />} />
        
        {/* Routes protégées */}
        <Route
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />
          <Route path="services" element={<ServiceList />} />
          <Route path="services/add" element={<ServiceAdd />} />
          <Route path="services/edit/:id" element={<ServiceEdit />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;