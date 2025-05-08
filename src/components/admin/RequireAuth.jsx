import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../common/Loading';

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return null; // Redirection gérée par useEffect
  }

  return children;
};

export default RequireAuth;