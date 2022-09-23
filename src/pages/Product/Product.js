import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Product.module.scss";
import { products, textContent } from "../../menuList"
import { addProduct } from "../../store/basketSlice";
import BtnBack from "../../components/BtnBack/BtnBack";
import BtnLogout from "../../components/BtnLogout/BtnLogout";
import BasketWidget from "../../components/BasketWidget/BasketWidget";
import ProductCard from "../../components/ProductCard/ProductCard";

function Product() {
  const {id} = useParams();
  const item = products.getProductById(id);

  const totalPrice = useSelector(state => state.basket.totalPrice);
  const totalAmount = useSelector(state => state.basket.totalAmount);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={styles.container}>
      <div className={styles["header-wrapper"]}>
        <BtnBack handleClick={goBack}/>
        <div className={styles["widget-wrap"]}>
          <BasketWidget
            sum={totalPrice}
            amount={totalAmount}
            />
          <BtnLogout/>
          </div>
      </div>
      {(() => {
        const {id, name, price, weight} = item;
        return (
        <ProductCard
          id={id} 
          url={`/img/dish-L.png`}
          dishName={name}
          description={textContent}
          price={price}
          weight={weight}
          handleClick={(productId) => dispatch(addProduct(productId))}
        />
        )
        })()
      }
    </div>
  );
}

export default Product;