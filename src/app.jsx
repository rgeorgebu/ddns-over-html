import Input from './components/input';
import Button from './components/button';
import { useState, useCallback, useEffect } from 'react';
import styles from './app.module.css';
import { ciphertext, salt, iv } from './content.json';
import decrypt from './decrypt';

export default function App() {
	const [password, setPassword] = useState('');
	const passwordChanged = useCallback(
		(event) => {
			const newPassword = event.target.value;
			setPassword(newPassword);
		},
		[setPassword]
	);

	const [ip, setIp] = useState(null);
	const decryptAttempted = useCallback(() => {
		decrypt(password, { ciphertext, salt, iv }).then((ip) => setIp(ip));
		setPassword('');
	}, [password, setIp, setPassword]);

	return (
		<div className={styles.app}>
			<h1>DDNS Over HTML</h1>
			<h2>Ciphertext</h2>
			<p>{ciphertext}</p>
			<h2>Salt</h2>
			<p>{salt}</p>
			<h2>IV</h2>
			<p>{iv}</p>
			<div className={styles.form}>
				<Input
					type="password"
					className=""
					label="Password"
					value={password}
					onChange={passwordChanged}
				/>
				<Button className="" onClick={decryptAttempted}>
					Decrypt
				</Button>
			</div>
			<h2>IP</h2>
			<p>{ip || 'N/A'}</p>
		</div>
	);
}
