import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Productshowcase.module.css';

import cassavaImage from '../../assets/products/Cassava.jpeg';
import beansImage from '../../assets/products/beans.jpeg';
import tomatoesImage from '../../assets/products/tomatoes.jpeg';

const baseProducts = [
  { id: 1, name: "Cassava", price: 10, unit: "kg", rating: 4.8, imageUrl: cassavaImage, category: "vegetables" },
  { id: 2, name: "Green Beans", price: 12, unit: "kg", rating: 4.6, imageUrl: beansImage, category: "vegetables" },
  { id: 3, name: "Tomatoes", price: 6, unit: "kg", rating: 4.7, imageUrl: tomatoesImage, category: "vegetables" },
];

const ProductShowcase = () => {
  const [exchangeRate, setExchangeRate] = useState(160);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
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
        console.error('Error:', error);
        const convertedProducts = baseProducts.map(product => ({
          ...product,
          priceKSH: Math.round(product.price * 160),
        }));
        setProducts(convertedProducts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const formatKSH = (price) => {
    return `KSh ${price.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <p>Loading market prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Fresh Farm Produce</h2>
        <p className={styles.sub_text}>
          Real-time pricing in Kenyan Shillings
          {exchangeRate && (
            <span className={styles.exchangeRate}>
              Rate: 1 USD = {exchangeRate.toFixed(2)} KSH
            </span>
          )}
        </p>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <span className={styles.categoryTag}>Vegetable</span>
            </div>
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productRating}>
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    color={index < Math.floor(product.rating) ? "#FFD700" : "#ccc"}
                    size={14}
                  />
                ))}
                <span>({product.rating})</span>
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
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;