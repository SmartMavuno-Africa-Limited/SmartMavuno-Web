import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
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
  { id: 3, name: "Onins", price: 6, unit: "kg", rating: 4.7, imageUrl: onionsImage },
  { id: 3, name: "Carrot", price: 6, unit: "kg", rating: 4.7, imageUrl: carrotsImage },
  { id: 3, name: "Pumpkin", price: 6, unit: "kg", rating: 4.7, imageUrl: pumpkinImage },
  { id: 3, name: "Cabbage", price: 6, unit: "kg", rating: 4.7, imageUrl: cabbageImage },

];

const ProductShowcase = () => {
  const [exchangeRate, setExchangeRate] = useState(160);
  const [products, setProducts] = useState([]);

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

  const formatKSH = (price) => {
    return `KSh ${price.toLocaleString()}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Fresh Farm Produce</h2>
        <p className={styles.sub_text}>
          Real-time pricing in Kenyan Shillings
          <span className={styles.exchangeRate}>
            Rate: 1 USD = {exchangeRate.toFixed(2)} KSH
          </span>
        </p>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
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
    </div>
  );
};

export default ProductShowcase;