import styles from './input.module.css';
import cx from 'classnames';

export default function Input({ type, label, className, value, onChange }) {
	return label ? (
		<label className={styles.label}>
			{label}
			<input
				type={type}
				className={cx(styles.input, className)}
				value={value}
				onChange={onChange}
			/>
		</label>
	) : (
		<input
			className={cx(styles.input, className)}
			value={value}
			onChange={onChange}
		/>
	);
}
