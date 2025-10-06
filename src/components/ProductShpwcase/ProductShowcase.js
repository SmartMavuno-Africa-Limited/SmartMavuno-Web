import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft, FaFilter, FaSort } from 'react-icons/fa';
import styles from './Productshowcase.module.css';

import cassavaImage from '../../assets/products/Cassava.jpeg';
import beansImage from '../../assets/products/beans.jpeg';
import tomatoesImage from '../../assets/products/tomatoes.jpeg';
import onionsImage from '../../assets/products/onions.jpeg';
import carrotsImage from'../../assets/products/carrots.jpeg';
import cabbageImage from '../../assets/products/cabbage.jpeg';
import spinachImage from '../../assets/products/spinach.jpeg';
import pumpkinImage from '../../assets/products/pumpkin.jpeg';

// Base products with USD prices (we'll convert to KSH)
const baseProducts = [
  { id: 1, name: "Cassava", price: 10, unit: "kg", rating: 4.8, imageUrl: cassavaImage, category: "vegetables" },
  { id: 2, name: "Green Beans", price: 12, unit: "kg", rating: 4.6, imageUrl: beansImage, category: "vegetables" },
  { id: 3, name: "Tomatoes", price: 6, unit: "kg", rating: 4.7, imageUrl: tomatoesImage, category: "vegetables" },
  { id: 4, name: "Onions", price: 4, unit: "kg", rating: 4.2, imageUrl: onionsImage, category: "vegetables" },
  { id: 5, name: "Carrots", price: 5, unit: "kg", rating: 4.3, imageUrl: carrotsImage, category: "vegetables" },
  { id: 6, name: "Cabbage", price: 3, unit: "kg", rating: 4.1, imageUrl: cabbageImage, category: "vegetables" },
  { id: 7, name: "Spinach", price: 2, unit: "bunch", rating: 4.3, imageUrl: spinachImage, category: "greens" },
  { id: 8, name: "Pumpkin", price: 9, unit: "kg", rating: 4.9, imageUrl: pumpkinImage, category: "vegetables" },
];

const ChoosingUs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [exchangeRate, setExchangeRate] = useState(160); // Default rate (1 USD = 160 KSH)
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 3;

  // Fetch real-time exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        // Using a free currency API (you might need to get a free API key)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const kshRate = data.rates.KES || 160; // Fallback to 160 if KES not available
        
        setExchangeRate(kshRate);
        
        // Convert products to KSH
        const convertedProducts = baseProducts.map(product => ({
          ...product,
          priceKSH: Math.round(product.price * kshRate),
          originalPrice: product.price // Keep original for reference
        }));
        
        setProducts(convertedProducts);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // Fallback: convert using default rate
        const convertedProducts = baseProducts.map(product => ({
          ...product,
          priceKSH: Math.round(product.price * 160),
          originalPrice: product.price
        }));
        setProducts(convertedProducts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();

    // Optional: Refresh exchange rate every 5 minutes
    const interval = setInterval(fetchExchangeRate, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Filter and sort products
  let filteredProducts = selectedCategory === 'all' 
    ? [...products] 
    : products.filter(product => product.category === selectedCategory);

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.priceKSH - b.priceKSH);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.priceKSH - a.priceKSH);
  } else if (sortOption === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Calculate the products to show on the current page
  const currentProducts = filteredProducts.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(0);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setShowFilters(false);
  };

  // Format KSH price with commas
  const formatKSH = (price) => {
    return `KSh ${price.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <p>Loading current market prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Farm Fresh Marketplace</h2>
        <p className={styles.sub_text}>
          Browse our fresh farm products with real-time Kenyan Shilling pricing.
          {exchangeRate && (
            <span className={styles.exchangeRate}>
              Current rate: 1 USD = {exchangeRate.toFixed(2)} KSH
            </span>
          )}
        </p>
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.filterToggle}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        <div className={styles.sortContainer}>
          <FaSort className={styles.sortIcon} />
          <select 
            value={sortOption} 
            onChange={handleSortChange}
            className={styles.sortSelect}
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className={styles.filterPanel}>
          <h3>Categories</h3>
          <div className={styles.categoryFilters}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.productsGrid}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <div className={styles.overlay}>
                  <span className={styles.categoryTag}>{product.category}</span>
                </div>
              </div>
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.productRating}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      color={index < Math.floor(product.rating) ? "#FFD700" : "#ccc"}
                      size={16}
                    />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className={styles.productPrice}>
                  {formatKSH(product.priceKSH)}/{product.unit}
                </p>
                <p className={styles.usdPrice}>
                  (${product.originalPrice} USD)
                </p>
                <a
                  href="https://marketplace.smartmavuno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.purchaseButton}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noProducts}>
            <p>No products found in this category.</p>
          </div>
        )}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className={styles.pagination}>
          <button
            onClick={prevPage}
            className={styles.pageButton}
            disabled={currentPage === 0}
          >
            <FaArrowLeft />
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            className={styles.pageButton}
            disabled={currentPage === totalPages - 1}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChoosingUs;