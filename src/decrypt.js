export default async function decrypt(secret, { ciphertext, salt, iv }) {
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();

	// secret to pbkdf2 key
	console.log('Generating pbkdf2 key...');
	const pbkdf2 = await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{
			name: 'PBKDF2',
		},
		false,
		['deriveBits', 'deriveKey']
	);
	console.log('Generated pbkdf2 key...');

	// pbkdf2 key to encryption key
	console.log('Generating encryption key...');
	const aes = await crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt: Uint8Array.from(atob(salt), (c) => c.charCodeAt(0)),
			iterations: 100000,
			hash: 'SHA-256',
		},
		pbkdf2,
		{ name: 'AES-CBC', length: 256 },
		true,
		['decrypt']
	);
	console.log('Generated AES-CBC key');

	// plain to ciphertext
	console.log('Decrypting IP...');
	const ipAddress = await crypto.subtle.decrypt(
		{
			name: 'AES-CBC',
			iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)),
		},
		aes,
		Uint8Array.from(atob(ciphertext), (c) => c.charCodeAt(0))
	);
	console.log('IP decrypted');

	return decoder.decode(ipAddress);
}
