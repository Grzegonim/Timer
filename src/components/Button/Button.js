import styles from './Button.module.scss'
const Button = props => {
  return (
    <button type='text' className={styles.button} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;