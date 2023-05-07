import styles from './index.module.scss';
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => (
  <React.Fragment>
    <button {...props} onClick={onClick} className={styles.button}>
      {children}
      <span></span>
    </button>
  </React.Fragment>
);

export default Button;
