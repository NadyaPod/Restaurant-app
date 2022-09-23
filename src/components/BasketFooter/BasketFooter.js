import styles from "./BasketFooter.module.scss"

function Footer({total, handleClick}) {
  return (
    <div className={styles["footer__content"]}>
      <p className={styles["footer__info"]}>
        <span className={styles["footer__text"]}>Заказ на сумму:</span>
        <span className={styles["footer__price"]}>{total} ₽</span>
      </p>
      <button className={styles["btn-order"]} onClick={handleClick}>Оформить заказ</button>
    </div> 
  );
}

export default Footer;