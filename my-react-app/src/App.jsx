import atomicHabitsImg from "./assets/atomic habitsjpg.jpg";
import creativeBrickBoxImg from "./assets/creative brick box.jpg";
import electricPressureCookerImg from "./assets/electric pressure cooker.jpg";
import facewashImg from "./assets/facewash.avif";
import footballImg from "./assets/football.jpg";
import harryPotterSetImg from "./assets/harry-poter-complete-set.jpg";
import headphoneImg from "./assets/headphone.jpg";
import heroImg from "./assets/hero.png";
import himalayaToothpasteImg from "./assets/himalaya toothpaste.jpg";
import mensShoesImg from "./assets/mensShoes.webp";
import mensSlimFitJeansImg from "./assets/mensSlimfitjeans.webp";
import mixerGrinderImg from "./assets/mixergrinder.jpg";
import monopolyGameBoardImg from "./assets/monopoly game board.avif";
import yogaMatImg from "./assets/yoga mat.jpg";
import tvImg from "./assets/tv.jpg";
import iphoneImg from "./assets/iphone.jpg";
import laptopImg from "./assets/laptop.jpg";
// New banner image import
import megaSaleImg from "./assets/megaSale.jpg"; 

import { useState, useMemo } from "react";

const PRODUCTS = [
  { id: 1, name: "Boat Airdopes 141 Bluetooth Truly Wireless Earbuds", price: 1299, mrp: 4990, category: "Electronics", rating: 4.2, reviews: 84321, image: headphoneImg, badge: "Best Seller", description: "40H playtime, ENx™ tech, ASAP™ Charge, IPX4", brand: "boAt" },
  { id: 2, name: "Samsung 43\" Crystal 4K Ultra HD Smart LED TV", price: 28990, mrp: 54900, category: "Electronics", rating: 4.4, reviews: 12453, image: tvImg, badge: "Deal of Day", description: "4K UHD, PurColor, HDR, Crystal Processor 4K", brand: "Samsung" },
  { id: 3, name: "Apple iPhone 15 (128 GB) - Black", price: 69900, mrp: 79900, category: "Electronics", rating: 4.6, reviews: 23109, image: iphoneImg, badge: "Amazon's Choice", description: "Dynamic Island, 48MP Camera, USB-C, A16 Bionic", brand: "Apple" },
  { id: 4, name: "Lenovo IdeaPad Slim 3 Intel Core i3 15.6\" Laptop", price: 32990, mrp: 49990, category: "Electronics", rating: 4.1, reviews: 9876, image: laptopImg, badge: "Best Seller", description: "8GB RAM, 512GB SSD, Win 11, MS Office 2021", brand: "Lenovo" },
  { id: 5, name: "Prestige Iris 750W Mixer Grinder", price: 2299, mrp: 4995, category: "Kitchen", rating: 4.3, reviews: 31204, image: mixerGrinderImg, badge: "Best Seller", description: "3 Jars, 3 Speed + Pulse, Stainless Steel Blades", brand: "Prestige" },
  { id: 6, name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", price: 5999, mrp: 8999, category: "Kitchen", rating: 4.5, reviews: 18900, image: electricPressureCookerImg, badge: "Amazon's Choice", description: "Pressure cooker, slow cooker, rice cooker & more", brand: "Instant Pot" },
  { id: 7, name: "Nike Air Max 270 Men's Running Shoes", price: 7495, mrp: 10995, category: "Fashion", rating: 4.4, reviews: 5432, image: mensShoesImg, badge: "New Launch", description: "Breathable mesh upper, Air Max heel unit", brand: "Nike" },
  { id: 8, name: "Levi's Men's 511 Slim Fit Jeans", price: 1799, mrp: 3999, category: "Fashion", rating: 4.2, reviews: 22110, image: mensSlimFitJeansImg, badge: "Best Seller", description: "Slim through thigh, regular waist, tapered leg", brand: "Levi's" },
  { id: 9, name: "Himalaya Herbals Complete Care Toothpaste 3-Pack", price: 249, mrp: 450, category: "Health", rating: 4.3, reviews: 45890, image: himalayaToothpasteImg, badge: "Amazon's Choice", description: "Fluoride-free, prevents cavities, fresh breath", brand: "Himalaya" },
  { id: 10, name: "Mamaearth Vitamin C Face Wash", price: 299, mrp: 499, category: "Health", rating: 4.1, reviews: 67234, image: facewashImg, badge: "Best Seller", description: "With turmeric, for glowing skin, sulphate-free", brand: "Mamaearth" },
  { id: 11, name: "Harry Potter Complete 7-Book Collection", price: 1799, mrp: 3499, category: "Books", rating: 4.8, reviews: 102345, image: harryPotterSetImg, badge: "Best Seller", description: "Paperback box set, J.K. Rowling", brand: "Bloomsbury" },
  { id: 12, name: "Atomic Habits by James Clear", price: 399, mrp: 799, category: "Books", rating: 4.7, reviews: 89123, image: atomicHabitsImg, badge: "Amazon's Choice", description: "Tiny changes, remarkable results - #1 NYT Bestseller", brand: "Avery" },
  { id: 13, name: "Boldfit Premium Yoga Mat 6mm Anti-Slip", price: 499, mrp: 1299, category: "Sports", rating: 4.2, reviews: 34567, image: yogaMatImg, badge: "Best Seller", description: "NBR foam, carry strap, 183x61cm, 1kg", brand: "Boldfit" },
  { id: 14, name: "Cosco Champions Football Size 5", price: 799, mrp: 1499, category: "Sports", rating: 4.0, reviews: 8765, image: footballImg, badge: null, description: "Machine stitched, durable PU material", brand: "Cosco" },
  { id: 15, name: "Funskool Monopoly Classic Board Game", price: 699, mrp: 1299, category: "Toys", rating: 4.5, reviews: 21098, image: monopolyGameBoardImg, badge: "Best Seller", description: "Classic property trading game for 2-8 players", brand: "Funskool" },
  { id: 16, name: "LEGO Classic Creative Brick Box 484 Pieces", price: 2499, mrp: 3499, category: "Toys", rating: 4.7, reviews: 15432, image: creativeBrickBoxImg, badge: "Amazon's Choice", description: "Build & rebuild, ages 4+, 33 building ideas", brand: "LEGO" },
];

const CATEGORIES = ["All", "Electronics", "Fashion", "Kitchen", "Health", "Books", "Sports", "Toys"];

const DEALS = [
  { label: "Electronics", discount: "Up to 70% off", color: "#FF6B35", bg: "#FFF3EE", image: tvImg },
  { label: "Fashion", discount: "Min 40% off", color: "#E91E8C", bg: "#FFF0F7", image: mensShoesImg },
  { label: "Home & Kitchen", discount: "Up to 60% off", color: "#00897B", bg: "#E8F5E9", image: mixerGrinderImg },
  { label: "Books", discount: "Up to 50% off", color: "#1565C0", bg: "#E3F2FD", image: harryPotterSetImg },
];

function StarRating({ rating }) {
  return (
    <span style={{ color: "#FFA41C", fontSize: 13, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#007185", fontWeight: 400, marginLeft: 4, fontSize: 12 }}>{rating.toFixed(1)}</span>
    </span>
  );
}

function Badge({ text }) {
  if (!text) return null;
  const colors = {
    "Best Seller": { bg: "#FF6B00", color: "#fff" },
    "Amazon's Choice": { bg: "#0F3460", color: "#fff" },
    "Deal of Day": { bg: "#CC0C39", color: "#fff" },
    "New Launch": { bg: "#1DA462", color: "#fff" },
  };
  const c = colors[text] || { bg: "#232F3E", color: "#fff" };
  return (
    <span style={{ background: c.bg, color: c.color, fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 3, letterSpacing: 0.3, textTransform: "uppercase" }}>
      {text}
    </span>
  );
}

function ProductImage({ src, alt, size = 64, style = {} }) {
  const isEmoji = typeof src === 'string' && src.length <= 4;
  if (isEmoji) {
    return <div style={{ fontSize: size, ...style }}>{src}</div>;
  }
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ 
        width: "100%", 
        height: "100%", 
        maxHeight: size * 1.5, 
        objectFit: "contain", 
        mixBlendMode: "multiply",
        ...style 
      }} 
    />
  );
}

function ProductCard({ product, onAdd, onView }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <div
      onClick={() => onView(product)}
      style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: 14, cursor: "pointer", transition: "box-shadow 0.2s", display: "flex", flexDirection: "column", gap: 6, position: "relative" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      <div style={{ textAlign: "center", padding: "12px 0", background: "#f9f9f9", borderRadius: 6, height: 120, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <ProductImage src={product.image} alt={product.name} size={64} />
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center", minHeight: 18 }}>
        <Badge text={product.badge} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 500, color: "#0F1111", lineHeight: 1.4, height: 40, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
        {product.name}
      </div>
      <div style={{ fontSize: 11, color: "#565959" }}>{product.description}</div>
      <StarRating rating={product.rating} />
      <div style={{ fontSize: 11, color: "#565959" }}>{product.reviews.toLocaleString()} reviews</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#0F1111" }}>₹{product.price.toLocaleString()}</span>
        <span style={{ fontSize: 12, color: "#CC0C39", fontWeight: 600 }}>{discount}% off</span>
      </div>
      <div style={{ fontSize: 11, color: "#565959" }}>M.R.P: <s>₹{product.mrp.toLocaleString()}</s></div>
      <div style={{ fontSize: 11, color: "#007600" }}>✓ Free Delivery by Tomorrow</div>
      <button
        onClick={e => { e.stopPropagation(); onAdd(product); }}
        style={{ marginTop: 6, background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "8px 0", fontWeight: 600, fontSize: 13, cursor: "pointer", color: "#0F1111", transition: "background 0.15s" }}
        onMouseEnter={e => e.currentTarget.style.background = "#F7CA00"}
        onMouseLeave={e => e.currentTarget.style.background = "#FFD814"}
      >
        Add to Cart
      </button>
    </div>
  );
}

function CartItem({ item, onRemove, onQtyChange }) {
  return (
    <div style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: "1px solid #e8e8e8" }}>
      <div style={{ background: "#f9f9f9", borderRadius: 6, width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", padding: 4 }}>
        <ProductImage src={item.image} alt={item.name} size={48} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: "#0F1111", lineHeight: 1.4 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: "#007600", marginTop: 2 }}>In Stock · Free Delivery</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#0F1111", marginTop: 4 }}>₹{item.price.toLocaleString()}</div>
        <div style={{ display: "flex", gap: 10, marginTop: 8, alignItems: "center" }}>
          <select
            value={item.qty}
            onChange={e => onQtyChange(item.id, parseInt(e.target.value))}
            style={{ padding: "3px 6px", borderRadius: 4, border: "1px solid #888", fontSize: 13, background: "#f0f2f2", cursor: "pointer" }}
          >
            {[1,2,3,4,5].map(n => <option key={n} value={n}>Qty: {n}</option>)}
          </select>
          <span style={{ color: "#ddd" }}>|</span>
          <button onClick={() => onRemove(item.id)} style={{ background: "none", border: "none", color: "#C7511F", fontSize: 13, cursor: "pointer", padding: 0 }}>Delete</button>
          <span style={{ color: "#ddd" }}>|</span>
          <button style={{ background: "none", border: "none", color: "#C7511F", fontSize: 13, cursor: "pointer", padding: 0 }}>Save for later</button>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div style={{ background: "#fff", borderRadius: 10, maxWidth: 540, width: "100%", padding: 24, position: "relative", maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 14, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#555" }}>✕</button>
        <div style={{ textAlign: "center", padding: "16px 0", background: "#f9f9f9", borderRadius: 8, marginBottom: 16, height: 180, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <ProductImage src={product.image} alt={product.name} size={80} />
        </div>
        <Badge text={product.badge} />
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "10px 0 4px", color: "#0F1111", lineHeight: 1.4 }}>{product.name}</h3>
        <div style={{ fontSize: 12, color: "#565959", marginBottom: 8 }}>by {product.brand}</div>
        <StarRating rating={product.rating} />
        <span style={{ fontSize: 12, color: "#007185", marginLeft: 6 }}>{product.reviews.toLocaleString()} ratings</span>
        <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "12px 0" }} />
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#B12704" }}>₹{product.price.toLocaleString()}</span>
          <span style={{ fontSize: 13, color: "#CC0C39", fontWeight: 600 }}>-{discount}%</span>
        </div>
        <div style={{ fontSize: 12, color: "#565959", marginBottom: 6 }}>M.R.P: <s>₹{product.mrp.toLocaleString()}</s>  Inclusive of all taxes</div>
        <div style={{ fontSize: 13, color: "#007600", marginBottom: 4 }}>✓ FREE Delivery by Tomorrow</div>
        <div style={{ fontSize: 13, color: "#007600", marginBottom: 12 }}>✓ In Stock</div>
        <div style={{ fontSize: 13, color: "#0F1111", marginBottom: 14, lineHeight: 1.6 }}>
          <strong>About this item:</strong><br />{product.description}
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <label style={{ fontSize: 13 }}>Qty:</label>
          <select value={qty} onChange={e => setQty(parseInt(e.target.value))} style={{ padding: "4px 8px", borderRadius: 4, border: "1px solid #888", fontSize: 13 }}>
            {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
        <button
          onClick={() => { for(let i=0;i<qty;i++) onAdd(product); onClose(); }}
          style={{ width: "100%", background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: "pointer", color: "#0F1111", marginBottom: 8 }}
        >
          Add to Cart
        </button>
        <button style={{ width: "100%", background: "#FFA41C", border: "1px solid #FF8F00", borderRadius: 20, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: "pointer", color: "#0F1111" }}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default function AmazonClone() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setNotification(`"${product.name.slice(0, 30)}..." added to cart`);
    setTimeout(() => setNotification(null), 2500);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));

  const doSearch = () => { setSearch(searchInput); setActiveCategory("All"); setPage("home"); };

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const placeOrder = () => { setCart([]); setOrderPlaced(true); };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#EAEDED", minHeight: "100vh", color: "#0F1111" }}>
      {/* Navbar */}
      <nav style={{ background: "#131921", color: "#fff", padding: "0 16px", display: "flex", alignItems: "center", gap: 10, height: 56, position: "sticky", top: 0, zIndex: 100 }}>
        {/* Logo */}
        <div onClick={() => { setPage("home"); setSearch(""); setSearchInput(""); setActiveCategory("All"); }} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", padding: "4px 6px", border: "2px solid transparent", borderRadius: 2 }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
          <span style={{ fontSize: 22, fontWeight: 900, fontStyle: "italic", letterSpacing: -1, lineHeight: 1 }}>amazon</span>
          <span style={{ fontSize: 9, color: "#FF9900", letterSpacing: 0.5 }}>.in</span>
        </div>
        {/* Deliver to */}
        <div style={{ fontSize: 11, lineHeight: 1.3, marginLeft: 4, display: "flex", flexDirection: "column", cursor: "pointer", padding: "4px 6px", border: "2px solid transparent", borderRadius: 2 }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
          <span style={{ color: "#ccc", fontSize: 10 }}>Deliver to</span>
          <span style={{ fontWeight: 700, fontSize: 12 }}>📍 India</span>
        </div>
        {/* Search Bar */}
        <div style={{ flex: 1, display: "flex", maxWidth: 680, borderRadius: 4, overflow: "hidden" }}>
          <select value={activeCategory} onChange={e => setActiveCategory(e.target.value)}
            style={{ background: "#f3f3f3", border: "none", padding: "0 8px", fontSize: 12, color: "#555", cursor: "pointer", borderRight: "1px solid #ccc" }}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <input
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && doSearch()}
            placeholder="Search Amazon.in"
            style={{ flex: 1, border: "none", padding: "0 12px", fontSize: 14, outline: "none", height: 40 }}
          />
          <button onClick={doSearch} style={{ background: "#FF9900", border: "none", padding: "0 16px", fontSize: 20, cursor: "pointer", color: "#131921" }}>🔍</button>
        </div>
        {/* Nav links */}
        <div style={{ display: "flex", gap: 2, marginLeft: "auto" }}>
          {[
            { label: "Hello, Sign in", sub: "Account & Lists", icon: null },
          ].map(n => (
            <div key={n.label} style={{ padding: "4px 8px", border: "2px solid transparent", borderRadius: 2, cursor: "pointer", lineHeight: 1.3 }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
              <div style={{ fontSize: 10, color: "#ccc" }}>{n.label}</div>
              <div style={{ fontWeight: 700, fontSize: 12 }}>{n.sub}</div>
            </div>
          ))}
          <div style={{ padding: "4px 8px", border: "2px solid transparent", borderRadius: 2, cursor: "pointer", lineHeight: 1.3 }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
            <div style={{ fontSize: 10, color: "#ccc" }}>Returns</div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>& Orders</div>
          </div>
          <div onClick={() => setPage("cart")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", border: "2px solid transparent", borderRadius: 2, cursor: "pointer", position: "relative" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
            <span style={{ fontSize: 26 }}>🛒</span>
            {totalItems > 0 && <span style={{ position: "absolute", top: 2, right: 22, background: "#FF9900", color: "#131921", fontWeight: 900, fontSize: 12, borderRadius: "50%", minWidth: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>{totalItems}</span>}
            <span style={{ fontWeight: 700, fontSize: 12 }}>Cart</span>
          </div>
        </div>
      </nav>

      {/* Sub-nav */}
      <div style={{ background: "#232F3E", color: "#fff", padding: "0 16px", display: "flex", gap: 2, overflowX: "auto" }}>
        {["Today's Deals", "Buy Again", "Customer Service", "Prime", "Electronics", "Fashion", "Home & Kitchen", "Books", "Sports"].map(item => (
          <button key={item} onClick={() => { if(CATEGORIES.includes(item)) { setActiveCategory(item); setPage("home"); }}} style={{ background: "none", border: "2px solid transparent", color: "#fff", padding: "8px 10px", fontSize: 13, cursor: "pointer", borderRadius: 2, whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
            {item}
          </button>
        ))}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "#23232e", color: "#fff", padding: "12px 20px", borderRadius: 8, fontSize: 13, zIndex: 999, maxWidth: 360, textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
          🛒 {notification}
        </div>
      )}

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={addToCart} />}

      {/* PAGES */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px" }}>

        {/* HOME PAGE */}
        {page === "home" && (
          <div>
            {/* Full Hero Image Banner Integration */}
            {!search && activeCategory === "All" && (
              <div style={{ position: "relative", width: "100%", height: 260, borderRadius: 10, overflow: "hidden", marginBottom: 20, background: "#fff" }}>
                <img 
                  src={megaSaleImg} 
                  alt="Mega Sale Banner" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
                {/* Content Overlay directly on top of the banner asset */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 70%)", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff" }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", opacity: 0.9, marginBottom: 6, fontWeight: 700, color: "#FF9900" }}>Great Indian Festival</div>
                  <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900, lineHeight: 1.1 }}>Mega Sale 🎉</h2>
                  <p style={{ margin: "10px 0 0", fontSize: 16, opacity: 0.95, maxWidth: 400 }}>Up to 80% off on Electronics, Fashion & More</p>
                  <button onClick={() => setActiveCategory("Electronics")} style={{ marginTop: 18, width: "fit-content", background: "#FFD814", color: "#131921", border: "none", borderRadius: 20, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>
                    Shop Now →
                  </button>
                </div>
              </div>
            )}

            {/* Deals Section */}
            {!search && activeCategory === "All" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 20 }}>
                {DEALS.map(d => (
                  <div key={d.label} onClick={() => setActiveCategory(d.label.split(" ")[0])} style={{ background: d.bg, border: `1px solid ${d.color}22`, borderRadius: 8, padding: 16, cursor: "pointer", transition: "transform 0.15s", display: "flex", flexDirection: "column", justifyContent: "space-between", height: 140 }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                    <div style={{ height: 60, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, overflow: "hidden" }}>
                      <img src={d.image} alt={d.label} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: d.color }}>{d.label}</div>
                      <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{d.discount}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Category Filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              {search && <span style={{ fontSize: 14, color: "#565959" }}>Results for "<strong>{search}</strong>"</span>}
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setActiveCategory(c)} style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === c ? "#FF9900" : "#ccc"}`, background: activeCategory === c ? "#FFF3CD" : "#fff", color: activeCategory === c ? "#C45500" : "#555", fontSize: 13, cursor: "pointer", fontWeight: activeCategory === c ? 700 : 400, transition: "all 0.15s" }}>
                  {c}
                </button>
              ))}
              {search && <button onClick={() => { setSearch(""); setSearchInput(""); }} style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #CC0C39", background: "#FFF0F0", color: "#CC0C39", fontSize: 13, cursor: "pointer" }}>✕ Clear Search</button>}
            </div>

            {/* Product Count */}
            <div style={{ fontSize: 13, color: "#565959", marginBottom: 12 }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} {activeCategory !== "All" ? `in ${activeCategory}` : ""}
            </div>

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60, color: "#565959" }}>
                <div style={{ fontSize: 60, marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>No results found</div>
                <div>Try different keywords or browse categories</div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
                {filtered.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setSelectedProduct} />)}
              </div>
            )}
          </div>
        )}

        {/* CART PAGE */}
        {page === "cart" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16, alignItems: "start" }}>
            <div>
              {orderPlaced ? (
                <div style={{ background: "#fff", borderRadius: 8, padding: 40, textAlign: "center" }}>
                  <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
                  <h2 style={{ color: "#007600", marginBottom: 8 }}>Order Placed Successfully!</h2>
                  <p style={{ color: "#565959", marginBottom: 20 }}>Your order has been confirmed. Estimated delivery: Tomorrow by 6 PM.</p>
                  <button onClick={() => { setOrderPlaced(false); setPage("home"); }} style={{ background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "10px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div style={{ background: "#fff", borderRadius: 8, padding: 16 }}>
                  <h2 style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 400, borderBottom: "1px solid #e8e8e8", paddingBottom: 12 }}>
                    Shopping Cart
                    {cart.length > 0 && <span style={{ float: "right", fontSize: 14, color: "#007185", fontWeight: 400 }}>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>}
                  </h2>
                  {cart.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px 0", color: "#565959" }}>
                      <div style={{ fontSize: 60, marginBottom: 12 }}>🛒</div>
                      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Your cart is empty</div>
                      <button onClick={() => setPage("home")} style={{ background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 8 }}>
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    cart.map(item => <CartItem key={item.id} item={item} onRemove={removeFromCart} onQtyChange={updateQty} />)
                  )}
                  {cart.length > 0 && (
                    <div style={{ textAlign: "right", paddingTop: 12, fontSize: 18 }}>
                      Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""}): <strong>₹{subtotal.toLocaleString()}</strong>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Order Summary */}
            {!orderPlaced && cart.length > 0 && (
              <div style={{ background: "#fff", borderRadius: 8, padding: 16, position: "sticky", top: 80 }}>
                <div style={{ fontSize: 13, color: "#007600", marginBottom: 12 }}>✓ Your order is eligible for FREE Delivery</div>
                <div style={{ fontSize: 16, marginBottom: 4 }}>
                  Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""}): <strong>₹{subtotal.toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#565959", marginBottom: 4 }}>
                  <span>Delivery</span><span style={{ color: "#007600" }}>FREE</span>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", margin: "10px 0" }} />
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
                  Order Total: ₹{subtotal.toLocaleString()}
                </div>
                <button onClick={placeOrder} style={{ width: "100%", background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: "pointer", color: "#0F1111", marginBottom: 8 }}>
                  Proceed to Buy
                </button>
                <div style={{ fontSize: 11, color: "#565959", textAlign: "center", marginTop: 8 }}>
                  🔒 Secure transaction · 30-day returns
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ background: "#131921", color: "#ccc", padding: "30px 16px 16px", marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, paddingBottom: 20, borderBottom: "1px solid #3a4553" }}>
          {[
            { title: "Get to Know Us", links: ["About Us", "Careers", "Press Releases", "Amazon Cares"] },
            { title: "Connect with Us", links: ["Facebook", "Twitter", "Instagram"] },
            { title: "Make Money with Us", links: ["Sell on Amazon", "Become Affiliate", "Advertise"] },
            { title: "Let Us Help You", links: ["Your Account", "Returns", "Help"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 10 }}>{col.title}</div>
              {col.links.map(l => <div key={l} style={{ fontSize: 12, marginBottom: 6, cursor: "pointer", color: "#aaa" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}>{l}</div>)}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <div style={{ fontSize: 22, fontWeight: 900, fontStyle: "italic", color: "#fff", letterSpacing: -1 }}>amazon<span style={{ color: "#FF9900" }}>.in</span></div>
          <div style={{ fontSize: 11, color: "#666", marginTop: 6 }}>© 2024 Amazon.in — Clone Project for BTech CSE · No API keys used</div>
        </div>
      </footer>
    </div>
  );
}