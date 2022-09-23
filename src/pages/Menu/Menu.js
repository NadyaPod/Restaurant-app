import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/basketSlice";
import Card from "../../components/MenuCard/CardMenu";
import { products } from "../../menuList"
import styles from "./Menu.module.scss";
import BasketWidget from "../../components/BasketWidget/BasketWidget";
import Title from "../../components/Title/Title";
import BtnLogout from "../../components/BtnLogout/BtnLogout";
import { Link } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(state => state.basket.totalPrice);
  const totalAmount = useSelector(state => state.basket.totalAmount);
   
  return (
    <div className={styles.container}>
      <div className={styles["header-wrapper"]}>
        <Title
          text={"Наша продукция"} 
        />
        <div className={styles["widget-wrap"]}>
          <BasketWidget
            sum={totalPrice}
            amount={totalAmount}
            />
          <BtnLogout/>
        </div>
      </div>
      <ul className={styles["card-list"]}>
        {products.getProducts().map((item) => {
          const {id, name, description, price, weight, img} = item;
          return (
            <li className={styles["card-list__item"]} key={id}>
              <Link to={`/product/${id}`}>
                <Card
                  id={id} 
                  url={img}
                  dishName={name}
                  description={description}
                  price={price}
                  weight={weight}
                  handleClick={(productId) => dispatch(addProduct(productId))}
                />
              </Link>
            </li>
          )
          })}
      </ul>
    </div>
  );
}

export default Menu;