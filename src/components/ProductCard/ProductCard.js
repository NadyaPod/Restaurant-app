import styles from "./ProductCard.module.scss";

function ProductCard({id, url, dishName, description, price, weight, handleClick}) {
  return (
    <div className={styles.card}>
      <img className={styles["card__image"]} src={url} width="501" height="503" alt="Фотография блюда"/>
      <div className={styles["card__info-wrap"]}>
        <h2 className={styles["card__title"]}>{dishName}</h2>
        <p className={styles["card__description"]}>{description}</p>
        <div className={styles["card__footer"]}>
          <p className={styles["card__details"]}>
            <span className={styles["card__price"]}>{price} ₽</span>&nbsp;/&nbsp;
            <span className={styles["card__weight"]}>{weight}</span>
          </p>
          <button className={styles["btn-add"]} onClick={() => {handleClick(id)}}>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;