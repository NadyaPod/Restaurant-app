import { Link } from "react-router-dom";
import styles from "./BasketCard.module.scss"

function Card({id, url, dishName, amount, price, handleClickDec, handleClickInc, handleClickRemove}) {

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`} className={styles["card__image-link"]}>
        <img className={styles["card__image"]} src={url} width="122" height="122" alt="Фотография блюда"/>
      </Link>
      <h2 className={styles["card__title"]}>{dishName}</h2>
      <div className={styles["card__amount-wrap"]}>
        <button className={styles["card__amount-button"]} onClick={() => handleClickDec(id)}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3569 14.8214L9.28551 14.8213" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <p className={styles["card__amount"]}>{amount}</p>
        <button className={styles["card__amount-button"]} onClick={() => handleClickInc(id)}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 9.28564V20.3571" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.3569 14.8214L9.28551 14.8213" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <p className={styles["card__price"]}>{price} ₽</p>
      <button className={styles["btn-remove"]} onClick={() => handleClickRemove(id)}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14.5" stroke="#D58C51"/>
          <path d="M15.7041 15.0789L21.1218 20.4966C21.2723 20.6471 21.2723 20.891 21.1218 21.0415C21.0467 21.1168 20.948 21.1543 20.8495 21.1543C20.7508 21.1543 20.6523 21.1168 20.5771 21.0415L15.1187 15.583L9.6602 21.0415C9.58485 21.1168 9.48635 21.1543 9.38786 21.1543C9.28937 21.1543 9.19068 21.1168 9.11552 21.0415C8.96501 20.891 8.96501 20.6471 9.11552 20.4966L14.5331 15.0789L9.11189 9.65731C8.96137 9.50679 8.96137 9.26295 9.11189 9.11244C9.2624 8.96211 9.50624 8.96211 9.65657 9.11244L15.1185 14.5747L20.581 9.11263C20.7315 8.96231 20.9751 8.96231 21.1256 9.11263C21.2762 9.26314 21.2762 9.50699 21.1256 9.6575L15.7041 15.0789Z" fill="#D58C51"/>
          <defs>
            <clipPath id="clip0_3_669">
              <rect width="12.24" height="12.24" fill="white" transform="matrix(-1 0 0 1 21.2402 9)"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default Card;