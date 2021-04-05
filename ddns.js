const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

function get(url) {
	return new Promise((resolve, reject) => {
		https
			.get(url, (res) => {
				let body = '';
				res.on('data', (data) => (body += data));
				res.on('end', () => resolve(body));
			})
			.on('error', (err) => {
				reject(err);
			});
	});
}

async function main() {
	console.log('Starting ddns lookup...');

	// fetch to plain
	console.log('Fetching IP Address...');
	const ipAddress = await get('https://myexternalip.com/raw');
	console.log(`IP Address is ${ipAddress}`);

	const encoder = new TextEncoder();

	// secret to pbkdf2 key
	console.log('Generating pbkdf2 key...');
	const pbkdf2 = await crypto.webcrypto.subtle.importKey(
		'raw',
		encoder.encode('secret'),
		{
			name: 'PBKDF2',
		},
		false,
		['deriveBits', 'deriveKey']
	);
	console.log('Generated pbkdf2 key...');

	// salt
	console.log('Generating salt...');
	const salt = crypto.webcrypto.getRandomValues(new Uint8Array(16));
	console.log(`Salt is ${salt}`);

	// pbkdf2 key to encryption key
	console.log('Generating encryption key...');
	const aes = await crypto.webcrypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt,
			iterations: 100000,
			hash: 'SHA-256',
		},
		pbkdf2,
		{ name: 'AES-CBC', length: 256 },
		true,
		['encrypt']
	);
	console.log('Generated AES-CBC key');

	// iv
	console.log('Initializing AES vector...');
	const iv = crypto.webcrypto.getRandomValues(new Uint8Array(16));
	console.log(`IV is ${iv}`);

	// plain to ciphertext
	console.log('Encrypting IP...');
	const ciphertext = await crypto.webcrypto.subtle.encrypt(
		{ name: 'AES-CBC', iv },
		aes,
		ipAddress
	);
	console.log('IP encrypted');

	// save cipher, salt, iv
	const content = {
		ciphertext: Buffer.from(ciphertext).toString('base64'),
		salt: Buffer.from(salt).toString('base64'),
		iv: Buffer.from(iv).toString('base64'),
	};
	console.log('Writing file...');
	fs.writeFileSync('src/content.json', JSON.stringify(content));
	console.log('File written');
}

main();
