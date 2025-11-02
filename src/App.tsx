import { useState, useEffect } from 'react';
// Import images so Vite bundles them
// Use public static paths (served from `public/imgs/`) so production serves them as /imgs/...
const sankyo1 = '/imgs/IMG_20251031_082526_969.jpg';
const sankyo3 = '/imgs/IMG_20251031_082527_412.jpg';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { HomePage } from './components/HomePage';
import { ProductPage } from './components/ProductPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';
import { CookieBanner } from './components/CookieBanner';
import { TrackOrderPage } from './components/TrackOrderPage';
import { FAQPage } from './components/FAQPage';
import { ShippingPage } from './components/ShippingPage';
import { CatalogPage } from './components/CatalogPage';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
  hasVideoTest: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

// Mock products data
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Sankyo Sound XL 40S',
    brand: 'Sankyo',
    year: '1978',
    price: 150,
    image: sankyo1,
    hasVideoTest: true
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} aggiunto al carrello!`);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info('Articolo rimosso dal carrello');
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleSuccessfulCheckout = () => {
    setCartItems([]);
    setCartOpen(false);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onCartClick={() => setCartOpen(true)}
        cartItemsCount={cartItemsCount}
      />

      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage products={PRODUCTS} onAddToCart={handleAddToCart} />} />
          <Route path="/catalogo" element={<CatalogPage products={PRODUCTS} onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductPage products={PRODUCTS} onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/traccia-ordine" element={<TrackOrderPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/termini-e-condizioni" element={<TermsAndConditionsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/spedizioni" element={<ShippingPage />} />
        </Routes>
      </main>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onSuccessfulCheckout={handleSuccessfulCheckout}
      />

      <CookieBanner />
      <Toaster position="bottom-right" />
    </div>
  );
}
