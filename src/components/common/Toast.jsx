import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500 text-xl" />;
      case 'error':
        return <FaExclamationCircle className="text-red-500 text-xl" />;
      case 'warning':
        return <FaExclamationCircle className="text-yellow-500 text-xl" />;
      default:
        return <FaInfoCircle className="text-blue-500 text-xl" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500';
      case 'error':
        return 'bg-red-100 border-red-500';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500';
      default:
        return 'bg-blue-100 border-blue-500';
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 border-l-4 rounded-lg shadow-lg ${getBgColor()} max-w-xs w-full`}>
      <div className="flex items-start p-4">
        <div className="flex-shrink-0 mr-3">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Toast;