import { LCDClient, MnemonicKey, MsgExecuteContract, Coins, Fee } from "@terra-money/feather.js";

//Siapkan LCD tertaut
const luna = {
  'phoenix-1': {
    chainID: 'phoenix-1',
    lcd: 'https://terra-lcd.publicnode.com', //Tautan LCD Perhatikan bahwa ini adalah LCD, bukan RPC
    gasAdjustment: 1.01,   //gas Setting Multiplier, atur 1,02 menggunakan standar gas yang paling rendah yaitu sekitar 4 poin per gas, jika gagal maka naikkan saja.
    gasPrices: { uluna: 0.015 },
    prefix: 'terra',
  }
};

const lcd = new LCDClient(luna); // Buat instance LCDClient dengan konfigurasi baru

// Impor kata anotasi 24 karakter
const mnemonic = new MnemonicKey({
    mnemonic: "anotasi Anda"
});

const mintAddr = mnemonic.accAddress("terra");
const wallet = lcd.wallet(mnemonic);
const contractAddr = "terra1k7qcmehexltntug3ypp4q2h6egc0gunwm6d55qtrpcc7cculeuhqfteu8q";

// Buat fungsi asinkron untuk melakukan operasi kontrak
const executeContract = async () => {
    try {
        // Bangun informasi MINT
        const msgExecute = new MsgExecuteContract(
            mintAddr,
            contractAddr,
            {
                "mint": {
                    "to": mintAddr, // Gunakan mintAddr sebagai alamat penerima
                    "id": 1,  //ID Rune
                    "amount": 1000  //Jumlah 1000 buah
                }
            }
        );
        // Isi karakter memo
        const tx = await wallet.createAndSignTx({
            msgs: [msgExecute],
            chainID: "phoenix-1",
            memo: "{\"p\":\"Luru-20\",\"op\":\"mint\",\"tick\":\"LURU\",\"amt\":\"1000\"}",
         
        });

        const result = await lcd.tx.broadcastSync(tx, "phoenix-1");
        console.log("Mint Transaction Hash:", result.txhash);
    } catch (e) {
        console.error("Error:", e);
    }
};

// Atur interval dan jalankan fungsi eksekusiKontrak setiap 2 detik, 2000 milidetik, dan setiap 2 detik sekali. Jaringan luna memerlukan konfirmasi transaksi sebelumnya sebelum menjalankan transaksi berikutnya. Jika Anda membutuhkan lebih banyak, Anda dapat membuka lebih banyak skrip.

setInterval(executeContract, 2000);
