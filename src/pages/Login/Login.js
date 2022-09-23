import styles from "./Login.module.scss"
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { useSelector } from "react-redux";

function Login() {
  const showSignIn = useSelector(state => state.signInForm.showSignIn)
  
  return (
    <div className={styles.container}>
      { showSignIn ? <SignIn/> : <SignUp/>}
    </div>
  );
}

export default Login;
