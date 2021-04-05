import styles from './button.module.css';
import cx from 'classnames';

export default function Button({ className, children, onClick }) {
	return (
		<button className={cx(styles.button, className)} onClick={onClick}>
			{children}
		</button>
	);
}
