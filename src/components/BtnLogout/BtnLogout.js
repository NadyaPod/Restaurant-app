import styles from "./BtnLogout.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/signInSlice";
import { basketClean } from "../../store/basketSlice";


function BtnLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    dispatch(signOut({}));
    dispatch(basketClean({}));
    navigate("/");
  } 
  return (
    <button className={styles["btn-logout"]} onClick={goHome}>Выйти</button>
  );
}

export default BtnLogout;