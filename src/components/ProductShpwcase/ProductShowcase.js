import { useState, useEffect } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Productshowcase.module.css';

import cassavaImage from '../../assets/products/Cassava.jpeg';
import beansImage from '../../assets/products/beans.jpeg';
import tomatoesImage from '../../assets/products/tomatoes.jpeg';
import onionsImage from '../../assets/products/onions.jpeg';
import carrotsImage from'../../assets/products/carrots.jpeg';
import cabbageImage from '../../assets/products/spinach.jpeg';
import pumpkinImage from '../../assets/products/pumpkin.jpeg';

const baseProducts = [
  { id: 1, name: "Cassava", price: 10, unit: "kg", rating: 4.8, imageUrl: cassavaImage },
  { id: 2, name: "Green Beans", price: 12, unit: "kg", rating: 4.6, imageUrl: beansImage },
  { id: 3, name: "Tomatoes", price: 6, unit: "kg", rating: 4.7, imageUrl: tomatoesImage },
  { id: 4, name: "Onions", price: 5, unit: "kg", rating: 4.2, imageUrl: onionsImage },
  { id: 5, name: "Carrots", price: 7, unit: "kg", rating: 4.5, imageUrl: carrotsImage },
  { id: 6, name: "Pumpkin", price: 8, unit: "kg", rating: 4.4, imageUrl: pumpkinImage },
  { id: 7, name: "Cabbage", price: 4, unit: "kg", rating: 4.3, imageUrl: cabbageImage },
];

const ProductShowcase = () => {
  const [exchangeRate, setExchangeRate] = useState(160);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const kshRate = data.rates.KES || 160;
        setExchangeRate(kshRate);
        
        const convertedProducts = baseProducts.map(product => ({
          ...product,
          priceKSH: Math.round(product.price * kshRate),
        }));
        
        setProducts(convertedProducts);
      } catch (error) {
        const convertedProducts = baseProducts.map(product => ({
          ...product,
          priceKSH: Math.round(product.price * 160),
        }));
        setProducts(convertedProducts);
      }
    };

    fetchExchangeRate();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const formatKSH = (price) => {
    return `KSh ${price.toLocaleString()}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>SmartMavuno Farm Fresh Shop</h2>
      </div>

      <div className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productRating}>
                <FaStar color="#FFD700" size={14} />
                <span>{product.rating}</span>
              </div>
              <p className={styles.productPrice}>
                {formatKSH(product.priceKSH)}/{product.unit}
              </p>
              <a
                href="https://marketplace.smartmavuno.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.purchaseButton}
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={prevPage}
          className={styles.pageButton}
          disabled={currentPage === 0}
        >
          <FaArrowLeft />
        </button>
        
        <div className={styles.pageDots}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.pageDot} ${currentPage === index ? styles.active : ''}`}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
        
        <button
          onClick={nextPage}
          className={styles.pageButton}
          disabled={currentPage === totalPages - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;