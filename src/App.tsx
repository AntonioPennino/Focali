import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { TestingPage } from './components/TestingPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

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
    name: 'Canon 310XL Super 8',
    brand: 'Canon',
    year: '1976',
    price: 450,
    image: 'https://images.unsplash.com/photo-1609084580132-97e9a613c0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlciUyMDglMjBjYW1lcmF8ZW58MXx8fHwxNzYxNjM4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hasVideoTest: true
  },
  {
    id: 2,
    name: 'Bolex H16 Reflex',
    brand: 'Bolex',
    year: '1968',
    price: 850,
    image: 'https://images.unsplash.com/photo-1694793727965-152bd04ff056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmlsbSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2MzU1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hasVideoTest: true
  },
  {
    id: 3,
    name: 'Nikon R10 Super 8',
    brand: 'Nikon',
    year: '1974',
    price: 380,
    image: 'https://images.unsplash.com/photo-1585074729568-7efec1c018cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNpbmVtYSUyMGNhbWVyYXxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hasVideoTest: true
  },
  {
    id: 4,
    name: 'Beaulieu 4008 ZM II',
    brand: 'Beaulieu',
    year: '1972',
    price: 920,
    image: 'https://images.unsplash.com/photo-1721920098128-09567eae6e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmaWxtJTIwY2FtZXJhJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjE2Mzg5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hasVideoTest: true
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Simple client-side routing
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/about') setCurrentPage('about');
      else if (path === '/testing') setCurrentPage('testing');
      else if (path === '/contact') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(link.href).pathname;
        window.history.pushState({}, '', path);
        handleNavigation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

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

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onCartClick={() => setCartOpen(true)}
        cartItemsCount={cartItemsCount}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage products={PRODUCTS} onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'testing' && <TestingPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}
