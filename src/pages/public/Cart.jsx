import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../contexts/CartContext';
import { deliveryOptions } from '../../data/deliveryOptions';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import CartEmpty from '../../components/cart/CartEmpty';

const Cart = () => {
  useEffect(() => {
    document.title = "Panier | EliteShop";
  }, []);

  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    setDeliveryOption, 
    cartTotal, 
    deliveryCost, 
    grandTotal 
  } = useCart();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "1234567890"; // Remplacez par votre numéro WhatsApp
    const message = `Bonjour, je souhaite passer commande:\n\n${cart.items.map(item => 
      `- ${item.name} (x${item.quantity}): ${item.price * item.quantity}€`
    ).join('\n')}\n\nTotal: ${grandTotal}€\n\nLivraison: ${cart.delivery?.name || 'Non sélectionnée'}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (cart.items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cart.items.map(item => (
            <CartItem
              key={`${item.type}-${item.id}`}
              item={item}
              onRemove={() => removeFromCart(item.id, item.type)}
              onUpdateQuantity={(quantity) => updateQuantity(item.id, item.type, quantity)}
            />
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <CartSummary 
            cartTotal={cartTotal}
            deliveryCost={deliveryCost}
            grandTotal={grandTotal}
            deliveryOptions={deliveryOptions}
            selectedDelivery={cart.delivery}
            onSelectDelivery={setDeliveryOption}
            onCheckout={handleWhatsAppRedirect}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;