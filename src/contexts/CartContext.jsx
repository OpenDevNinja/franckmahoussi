import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.type === action.payload.type
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => !(item.id === action.payload.id && item.type === action.payload.type)),
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.type === action.payload.type
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      
    case 'SET_DELIVERY':
      return {
        ...state,
        delivery: action.payload,
      };
      
    case 'CLEAR_CART':
      return {
        items: [],
        delivery: null,
      };
      
    default:
      return state;
  }
};

const initialState = {
  items: [],
  delivery: null,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (item, type) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, type, quantity: item.quantity || 1 },
    });
  };

  const removeFromCart = (id, type) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id, type },
    });
  };

  const updateQuantity = (id, type, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, type);
      return;
    }
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, type, quantity },
    });
  };

  const setDeliveryOption = (option) => {
    dispatch({
      type: 'SET_DELIVERY',
      payload: option,
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCost = state.delivery ? state.delivery.price : 0;
  const grandTotal = cartTotal + deliveryCost;

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        updateQuantity,
        setDeliveryOption,
        clearCart,
        cartTotal,
        deliveryCost,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};