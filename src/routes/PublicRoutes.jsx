import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/common/Loading';
import Layout from '../components/common/Layout';

const CryptoVerification = lazy(() => import('../pages/public/CryptoVerification'));
const Home = lazy(() => import('../pages/public/Home'));
const Products = lazy(() => import('../pages/public/Products'));
const ProductDetail = lazy(() => import('../pages/public/ProductDetail'));
const Services = lazy(() => import('../pages/public/Services'));
const ServiceDetail = lazy(() => import('../pages/public/ServiceDetail'));
const CryptoCourses = lazy(() => import('../pages/public/CryptoCourses'));
const Delivery = lazy(() => import('../pages/public/Delivery'));
const Cart = lazy(() => import('../pages/public/Cart'));
const About = lazy(() => import('../pages/public/About'));
const Contact = lazy(() => import('../pages/public/Contact'));
const NotFound = lazy(() => import('../pages/public/NotFound'));

const PublicRoutes = () => {
    return (
<Suspense fallback={<Loading />}>
        <Routes >
            <Route element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/crypto-courses" element={<CryptoCourses />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/cart" element={<Cart />} />
                <Route path= "/verification" element={<CryptoVerification />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes >
        </Suspense>
    );
};

export default PublicRoutes;