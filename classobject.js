//mendefinisikan sebuah kelas
class Mobil{
    //construct inisialisasi properti
    constructor(merek, model, tahun){
        this.merek = merek;
        this.model = model;
        this.tahun =  tahun;
    }
    
    tampilkanmobil(){
        console.log(`Model Ini adalah ${this.merek} ${this.model} ${this.tahun} `);
    }
}

    //
    let mobil1 = new Mobil ("toyota", "Avanza", 2014);
    let mobil2 = new Mobil ("toyota", "Celica", 1997);
    //
    mobil1.tampilkanmobil();
    mobil2.tampilkanmobil();