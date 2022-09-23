import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeProduct, incProductAmount, decProductAmount } from "../../store/basketSlice";
import styles from "./Basket.module.scss";
import BtnBack from "../../components/BtnBack/BtnBack";
import BtnLogout from "../../components/BtnLogout/BtnLogout";
import Title from "../../components/Title/Title";
import Card from "../../components/BasketCard/BasketCard";
import Footer from "../../components/BasketFooter/BasketFooter";
import Modal from "../../components/Modal/Modal";
import { products } from "../../menuList";

function Basket() {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();
  const decProductHandler = (productId) => dispatch(decProductAmount(productId));
  const incProductHandler = (productId) => dispatch(incProductAmount(productId));
  const removeProductHandler = (productId) => dispatch(removeProduct(productId));
  const totalPrice = useSelector(state => state.basket.totalPrice);

  const navigate = useNavigate();
  const goMenu = () => navigate("/menu");

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles["header"]}>
        <div className={styles["header-wrapper"]}>
          <BtnBack handleClick={goMenu}/>
          <Title
            text={"Корзина с выбранными товарами"} 
          />
          <BtnLogout/>
        </div>
      </div>
      <main className={styles.main}>
        <ul className={styles["basket-list"]}>
          {
            (() => { 
              let cards = [];
              for(const [id, amount] of Object.entries(basket)) {
                cards.push(
                  <li key={id}>
                    <Card
                      id={id}
                      url={products.getProductById(id).img}
                      dishName={products.getProductById(id).name}
                      price={products.getProductById(id).price * amount}
                      amount={amount}
                      handleClickDec={decProductHandler}
                      handleClickInc={incProductHandler}
                      handleClickRemove={removeProductHandler}
                    />
                  </li>
                )
              }
              return cards;
            })()
          }
        </ul> 
      </main>
      <footer className={styles.footer}>
        <Footer 
          total={totalPrice}
          handleClick={() => setModalActive(true)}
        />
      </footer>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text={totalPrice > 0 ? "Вы совершили покупку! Курьер уже в пути 🐢" : "Сейчас в корзине пусто. Положите товары в корзину 👀"}
      />    
    </div>
  );
}

export default Basket;
