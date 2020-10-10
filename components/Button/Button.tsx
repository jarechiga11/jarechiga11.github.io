import * as React from "react";
import styles from './Button.module.scss';

type Props = {
  text: string;
};

export default ({ text }: Props) => <button type="button" className={styles.default}>{text}</button>;
