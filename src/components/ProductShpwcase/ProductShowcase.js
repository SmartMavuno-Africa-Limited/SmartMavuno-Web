import React, { useState } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft, FaFilter, FaSort } from 'react-icons/fa';
import styles from './Productshowcase.module.css';

// Importing product images
import cassavaImage from '../../assets/products/Cassava.jpeg';
import potatoesImage from '../../assets/products/sweetpotatoes.jpeg';
import beansImage from '../../assets/products/beans.jpeg';
import tomatoesImage from '../../assets/products/tomatoes.jpeg';
import onionsImage from '../../assets/products/onions.jpeg';
import carrotsImage from'../../assets/products/carrots.jpeg';
import cornImage from '../../assets/products/corns.jpeg';
import cabbageImage from '../../assets/products/cabbage.jpeg';
import spinachImage from '../../assets/products/spinach.jpeg';
import pumpkinImage from '../../assets/products/pumpkin.jpeg';

// Product data
const products = [
  { id: 1, name: "Cassava", price: 10, unit: "kg", rating: 4.8, imageUrl: cassavaImage, category: "vegetables" },
  { id: 2, name: "Fresh Potatoes", price: 8, unit: "kg", rating: 4.5, imageUrl: potatoesImage, category: "vegetables" },
  { id: 3, name: "Green Beans", price: 12, unit: "kg", rating: 4.6, imageUrl: beansImage, category: "vegetables" },
  { id: 4, name: "Tomatoes", price: 6, unit: "kg", rating: 4.7, imageUrl: tomatoesImage, category: "vegetables" },
  { id: 5, name: "Onions", price: 4, unit: "kg", rating: 4.2, imageUrl: onionsImage, category: "vegetables" },
  { id: 6, name: "Carrots", price: 5, unit: "kg", rating: 4.3, imageUrl: carrotsImage, category: "vegetables" },
  { id: 7, name: "Sweet Corn", price: 7, unit: "kg", rating: 4.4, imageUrl: cornImage, category: "grains" },
  { id: 8, name: "Cabbage", price: 3, unit: "kg", rating: 4.1, imageUrl: cabbageImage, category: "vegetables" },
  { id: 9, name: "Spinach", price: 2, unit: "bunch", rating: 4.3, imageUrl: spinachImage, category: "greens" },
  { id: 10, name: "Pumpkin", price: 9, unit: "kg", rating: 4.9, imageUrl: pumpkinImage, category: "vegetables" },
];

const ChoosingUs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 3;

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Filter and sort products
  let filteredProducts = selectedCategory === 'all' 
    ? [...products] 
    : products.filter(product => product.category === selectedCategory);

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Farm Fresh Marketplace</h2>
        <p className={styles.sub_text}>
          Browse our fresh farm products and agricultural inputs for all your needs.
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
                <p className={styles.productPrice}>${product.price}/{product.unit}</p>
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