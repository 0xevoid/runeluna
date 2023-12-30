## runeluna
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20.10.0
git clone https://github.com/0xevoid/runeluna.git
cd runeluna
npm install
```

***Buka ***mint.js*** dan modifikasi dengan frase mnemonik Anda sendiri. Jika node rusak, gantilah sendiri. Anda dapat mengubah konfigurasi lcd: 'https://terra-lcd.publicnode.com' , ubah node di sini. Anda dapat mengatur sendiri waktu pelaksanaannya.***

### NOTE
const mnemonic = new MnemonicKey({ mnemonic: "your mnemonic phrase" });

***Ganti "frasa mnemonik Anda" di mnemonik dengan frasa mnemonik 24 kata Anda.***

Run the script
```
node mint.js
```

When you see Mint Transaction Hash: it means success.

You can go to the website to check your balance.
