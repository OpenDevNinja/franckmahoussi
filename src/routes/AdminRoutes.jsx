// AdminRoutes.js
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../components/admin/RequireAuth';
import AdminLayout from '../components/admin/AdminLayout';
import Loading from '../components/common/Loading';
import BlogList from '../pages/admin/blog/List';
import BlogAdd from '../pages/admin/blog/Add';
import BlogEdit from '../pages/admin/blog/Edit';
import TrendingCryptoList from '../pages/admin/crypto/List';
import TrendingCryptoAdd from '../pages/admin/crypto/Add';
import TrendingCryptoEdit from '../pages/admin/crypto/Edit';
import TestimonialList from '../pages/admin/testimonial/List';
import TestimonialAdd from '../pages/admin/testimonial/Add';
import TestimonialEdit from '../pages/admin/testimonial/Edit';
import DeliveryOptionList from '../pages/admin/delivery/List';
import DeliveryOptionAdd from '../pages/admin/delivery/Add';
import DeliveryOptionEdit from '../pages/admin/delivery/Edit';
import VerificationList from '../pages/admin/verification/List';
import VerificationDetail from '../pages/admin/verification/detail';

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
const ForgotPassword = lazy(() => import('../pages/admin/ForgotPassword'));

// const BlogList = lazy(() => import('../pages/admin/Blog/List'));
// const BlogAdd = lazy(() => import('../pages/admin/Blog/Add'));
// const BlogEdit = lazy(() => import('../pages/admin/Blog/Edit'));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

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

          <Route path="blog" element={<BlogList />} />
          <Route path="blog/add" element={<BlogAdd />} />
          <Route path="blog/edit/:id" element={<BlogEdit />} />


          <Route path="trending-cryptos" element={<TrendingCryptoList />} />
          <Route path="trending-cryptos/add" element={<TrendingCryptoAdd />} />
          <Route path="trending-cryptos/edit/:id" element={<TrendingCryptoEdit />} />


          <Route path="testimonials" element={<TestimonialList />} />
          <Route path="testimonials/add" element={<TestimonialAdd />} />
          <Route path="testimonials/edit/:id" element={<TestimonialEdit />} />



          <Route path="delivery-options" element={<DeliveryOptionList />} />
          <Route path="delivery-options/add" element={<DeliveryOptionAdd />} />
          <Route path="delivery-options/edit/:id" element={<DeliveryOptionEdit />} />


          <Route path="services" element={<ServiceList />} />
          <Route path="services/add" element={<ServiceAdd />} />
          <Route path="services/edit/:id" element={<ServiceEdit />} />


          <Route path="services" element={<ServiceList />} />
          <Route path="services/add" element={<ServiceAdd />} />
          <Route path="services/edit/:id" element={<ServiceEdit />} />

          <Route path="verification" element={<VerificationList />} />
          <Route path="verifications/:id" element={<VerificationDetail />} />


          <Route path="orders" element={<Orders />} />
          {/* <Route path="users" element={<Users />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;