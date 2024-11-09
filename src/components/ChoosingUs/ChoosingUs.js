import React, { useState } from 'react';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './ChoosingUs.module.css';

// Importing product images from the src/products folder
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

// Example product data with local images
const products = [
  { id: 1, name: "Cassava", price: "$10 per kg", rating: 4.8, imageUrl: cassavaImage },
  { id: 2, name: "Fresh Potatoes", price: "$8 per kg", rating: 4.5, imageUrl: potatoesImage },
  { id: 3, name: "Green Beans", price: "$12 per kg", rating: 4.6, imageUrl: beansImage },
  { id: 4, name: "Tomatoes", price: "$6 per kg", rating: 4.7, imageUrl: tomatoesImage },
  { id: 5, name: "Onions", price: "$4 per kg", rating: 4.2, imageUrl: onionsImage },
  { id: 6, name: "Carrots", price: "$5 per kg", rating: 4.3, imageUrl: carrotsImage },
  { id: 7, name: "Sweet Corn", price: "$7 per kg", rating: 4.4, imageUrl: cornImage },
  { id: 8, name: "Cabbage", price: "$3 per kg", rating: 4.1, imageUrl: cabbageImage },
  { id: 9, name: "Spinach", price: "$2 per kg", rating: 4.3, imageUrl: spinachImage },
  { id: 10, name: "Pumpkin", price: "$9 per kg", rating: 4.9, imageUrl: pumpkinImage },
];

const ChoosingUs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of products to show per page

  // Calculate the products to show on the current page
  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our E-Commerce Store</p>
      <p className={styles.sub_text}>Browse our fresh farm products, Farm Inputs for your agricultural needs.</p>

      <div className={`row ${styles.sub}`}>
        {currentProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className={styles.productCard}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <div className={styles.productDetails}>
                <p className={styles.productName}>{product.name}</p>
                <div className={styles.productRating}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      color={index < product.rating ? "#FFD700" : "#ccc"}
                      size={18}
                    />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className={styles.productPrice}>{product.price}</p>
                <a
                  href={`https://smartmavunoshop.vercel.app/`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.purchaseButton}
                >
                  Purchase
                </a>
              </div>
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
        <button
          onClick={nextPage}
          className={styles.pageButton}
          disabled={currentPage === Math.ceil(products.length / itemsPerPage) - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ChoosingUs;
