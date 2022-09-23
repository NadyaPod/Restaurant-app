import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateLogin, updatePassw, InputState, resetState, setRegisteredStatus} from "../../store/signUpSlice.js";
import { showSignIn } from "../../store/signInSlice.js";
import { register } from "../../utils";
import styles from "./SignUp.module.scss";
import Input from "../Input/Input.js";


function SignUp() {
  const dispatch = useDispatch();

  const login = useSelector(state => state.signUpForm.login);
  const passw = useSelector(state => state.signUpForm.passw);
  const loginState = useSelector(state => state.signUpForm.loginState);
  const passwState = useSelector(state => state.signUpForm.passwState);

  const notYetRegistered = useSelector(state => state.signUpForm.notYetRegistered);

  const [notActiveLoginInput, setLoginInput] = useState(true);
  const [notActivePasswInput, setPasswInput] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const signUp = () => {
    dispatch(setRegisteredStatus(false));

    if (loginState === InputState.Valid && passwState === InputState.Valid) {
      register(login, passw);
      dispatch(resetState({}));
      dispatch(showSignIn(true));
    }
  }

  return (
    <div className={styles.modal}>
      <form className={styles["modal__form"]} onSubmit={handleSubmit}>
        <div className={styles["modal__header"]}>
          <h1 className={styles["modal__title"]}>Регистрация</h1>
          <button to="/" className={styles["modal__link"]} onClick={() => {
            dispatch(setRegisteredStatus(true));
            dispatch(resetState({}));
            dispatch(showSignIn(true));
            }
          }>Авторизоваться</button>
        </div>
        <div className={styles["input-wrap"]}>
          <Input 
            type="text" 
            placeholder="Логин" 
            value={login} 
            handleChange={(e) => {
            dispatch(updateLogin(e.target.value));
            setLoginInput(false);
          }}/>

          {(() => {
              if ((!notYetRegistered || !notActiveLoginInput) && loginState === InputState.Empty) {
                return <span className={styles.error}>Поле не должно быть пустым</span>
              } else if (loginState === InputState.Invalid) {
                return <span className={styles.error}>Логин должен содержать не менее 4-х символов</span>
              }
            })()   
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
            }}/>
          {(() => {
              if ((!notYetRegistered || !notActivePasswInput) && passwState === InputState.Empty) {
                return <span className={styles.error}>Поле не должно быть пустым</span>
              } else if (passwState === InputState.Invalid) {
                return <span className={styles.error}>Пароль должен содержать не менее 4-х символов</span>
              }
            })()   
          }
        </div>
        <label className={styles["modal__label"]}>
          <input className={`${styles["visually-hidden"]} ${styles["checkbox"]}`} type="checkbox"/>
          <span className={styles["custom__checkbox"]}></span>
          Я согласен получать обновления на почту
        </label>
        <button className={styles["modal__button"]} type="button" onClick={signUp}>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default SignUp;