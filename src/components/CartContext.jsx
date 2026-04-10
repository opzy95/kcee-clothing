import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity + amount } : i)
         .filter(i => i.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = cart.reduce((sum, i) => {
    const price = parseFloat(String(i.price).replace(/,/g, ''));
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,   // ✅ this is what Navbar needs
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ must be exported
export function useCart() {
  return useContext(CartContext);
}