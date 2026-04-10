import { useContext, useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { FaPlus, FaMinus, FaTrash, FaTimes, FaWhatsapp, FaQrcode } from 'react-icons/fa';
import QRCode from 'qrcode';
import './Cart.css';

function Cart({ onClose }) {
  const { cart, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const [showQR, setShowQR] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const phoneNumber = "2348000000000"; // ✅ replace with your number

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const buildWhatsAppUrl = () => {
  const lines = cart.map(i => {
    const price = parseFloat(String(i.price).replace(/,/g, ''));
    return `• ${i.name} x${i.quantity} — ₦${(price * i.quantity).toLocaleString()}`;
  }).join('%0A');
  const msg = `Hello! I'd like to order:%0A%0A${lines}%0A%0A*Total: ₦${totalPrice.toLocaleString()}*`;
  return `https://wa.me/${2347039146198}?text=${msg}`;
};

  useEffect(() => {
    if (showQR) {
      QRCode.toDataURL(buildWhatsAppUrl(), { width: 220, margin: 2 })
        .then(setQrDataUrl)
        .catch(console.error);
    }
  }, [showQR, cart]);

  const handleOrder = () => {
    if (isMobile) window.open(buildWhatsAppUrl(), '_blank');
    else setShowQR(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={onClose} />

      {/* Drawer */}
      <div className="cart-drawer">

        {/* Header */}
        <div className="cart-drawer-header">
          <h3>Your Cart <span className="cart-drawer-count">({totalItems} items)</span></h3>
          <button className="cart-drawer-close" onClick={onClose}><FaTimes /></button>
        </div>

        {/* Items */}
        <div className="cart-drawer-items">
          {cart.length === 0 ? (
            <div className="cart-drawer-empty">
              <span>🛒</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-drawer-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-drawer-img" />
                <div className="cart-drawer-info">
                  <p className="cart-drawer-name">{item.name}</p>
                 <p className="cart-drawer-price">
  ₦{(parseFloat(String(item.price).replace(/,/g, '')) * item.quantity).toLocaleString()}
</p>
                  <div className="cart-drawer-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                  </div>
                </div>
                <button
                  className="cart-drawer-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-total">
              <span>Total</span>
              <span className="cart-drawer-total-price">
                ₦{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="cart-drawer-actions">
              <button className="cart-drawer-clear" onClick={clearCart}>
                <FaTrash /> Clear
              </button>
              <button className="cart-drawer-order" onClick={handleOrder}>
                {isMobile ? <FaWhatsapp /> : <FaQrcode />}
                {isMobile ? ' Order via WhatsApp' : ' Scan to Order'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* QR Modal — desktop only */}
      {showQR && (
        <>
          <div className="qr-backdrop" onClick={() => setShowQR(false)} />
          <div className="qr-modal">
            <button className="qr-close" onClick={() => setShowQR(false)}><FaTimes /></button>
            <FaWhatsapp className="qr-wa-icon" />
            <h3>Scan to Order</h3>
            <p>Point your phone camera at the QR code</p>
            {qrDataUrl && <img src={qrDataUrl} alt="QR Code" className="qr-img" />}
            <span className="qr-hint">Opens WhatsApp with your full order</span>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;