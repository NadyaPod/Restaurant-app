import { useSelector, useDispatch } from "react-redux";
import { updateLogin, updatePassw, signIn, resetLoginStatus, resetState, showSignIn } from "../../store/signInSlice";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Input from "../Input/Input";
import styles from "./SignIn.module.scss";

function SignIn() {
  const dispatch = useDispatch();

  const login = useSelector(state => state.signInForm.login);
  const passw = useSelector(state => state.signInForm.passw);
  const isLoginEmpty = useSelector(state => state.signInForm.isLoginEmpty);
  const isPasswEmpty = useSelector(state => state.signInForm.isPasswEmpty);

  const auth = useSelector(state => state.signInForm.auth);
  const notYetLogin = useSelector(state => state.signInForm.notYetLogin);

  const [notActiveLoginInput, setLoginInput] = useState(true);
  const [notActivePasswInput, setPasswInput] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return auth
    ? <Navigate to="/menu"/>
    : (
    <div className={styles.modal}>
      <form className={styles["modal__form"]} onSubmit={handleSubmit}>
        <div className={styles["modal__header"]}>
          <h1 className={styles["modal__title"]}>Вход</h1>
          <button className={styles["modal__link"]} onClick={() => {
            dispatch(resetLoginStatus({}));
            dispatch(resetState({}));
            dispatch(showSignIn(false));
          } 
        }>Зарегистрироваться</button>
        </div>
        <div className={styles["input-wrap"]}>
          <Input 
            type="test"
            placeholder="Логин"
            value={login}
            handleChange={(e) => {
              dispatch(updateLogin(e.target.value));
              setLoginInput(false);
            }  
          }
          />
          {(!notYetLogin || !notActiveLoginInput) &&isLoginEmpty &&
          <span className={styles.error}>Логин не должен быть пустым</span>
          }
        </div>
        <div className={styles["input-wrap"]}>
          <Input
            type="password"
            placeholder="Пароль"
            value={passw}
            handleChange={(e) => {
              dispatch(updatePassw(e.target.value));
              setPasswInput(false);
            } 
          }    
          />
          {(!notYetLogin || !notActivePasswInput) && isPasswEmpty &&
          <span className={styles.error}>Пароль не должен быть пустым</span>
          }
        </div>
        <label className={styles["modal__label"]}>
          <input className={`${styles["visually-hidden"]} ${styles["checkbox"]}`} type="checkbox"/>
          <span className={styles["custom__checkbox"]}></span>
          Я согласен получать обновления на почту
        </label>
        <div className={styles["input-wrap"]}>
        {!notYetLogin && !auth &&
          <p className={`${styles.error} ${styles["error_aligned"]}`}>Логин или пароль неверен</p>
          }
        </div>
        <button className={styles["modal__button"]} type="submit" onClick={() => dispatch(signIn({}))}>Войти</button>
      </form>
    </div>
  );
}

export default SignIn;