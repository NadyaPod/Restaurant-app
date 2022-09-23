import styles from "./CardMenu.module.scss";

function Card({id, url, dishName, description, price, weight, handleClick}) {
  return (
    <div className={styles.card}>
      <img className={styles["card__image"]} src={url} width="270" height="270" alt="Фотография блюда"/>
    
        <h2 className={styles["card__title"]}>{dishName}</h2>
        <p className={styles["card__description"]}>{description}</p>
        <div className={styles["card__footer-wrap"]}>
          <p className={styles["card__info"]}>
            <span className={styles["card__price"]}>{price} ₽</span>&nbsp;/&nbsp;
            <span className={styles["card__weight"]}>{weight}</span>
          </p>
          <button className={styles["btn-add"]} onClick={
            (e) => {
              e.preventDefault();
              handleClick(id);
            }
          }>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5" stroke="white"/>
              <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
    </div>
  );
}

export default Card;