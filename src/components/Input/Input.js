import styles from "./Input.module.scss";

function Input ({type, placeholder, value, handleChange}) {
  return (
    <input className={`${styles["input"]}`} type={type} placeholder={placeholder} value={value} onChange={handleChange}/>
  );
}

export default Input;
