function perkalian (a,b) {
    return a * b;
}

console.log(perkalian(3,5));

let kali = (a, b) => a*b;
console.log(kali(4,2));

let zodiak = (tanggal, bulan) => {
    let hasil = "tanggal atau bulan yang dimasukkan salah";
    if (tanggal > 0 && tanggal <32 && bulan > 0 && bulan < 13) {
        if (bulan == 1) {
            hasil = "Capricorn";
            if (tanggal > 19 && tanggal < 32) {
                hasil = "Aquarius";
            }
        }

        if (bulan == 2) {
            hasil = "Aquarius";
            if (tanggal > 18 && tanggal < 30) {
                hasil ="Pisces";
            }
            hasil = "tanggal tidak ada";
        }

        if (bulan == 3) {
            hasil = "Pisces";
            if (tanggal > 20 && tanggal < 32) {
                hasil = "Aries";
            }
        }

        if (bulan == 4) {
            hasil = "Aries";
            if (tanggal > 20 && tanggal < 32) {
                hasil ="Taurus";
            }
        }

        if (bulan == 5) {
            hasil = "Taurus";
            if (tanggal > 21 && tanggal < 32) {
                hasil ="Gemini";
            }
        }

        if (bulan == 6) {
            hasil = "Gemini";
            if (tanggal > 23 && tanggal < 32) {
                hasil ="Cancer";
            }
        }

        if (bulan == 7) {
            hasil = "Cancer";
            if (tanggal > 23 && tanggal < 32) {
                hasil ="Leo";
            }
        }

        if (bulan == 8) {
            hasil = "Leo";
            if (tanggal > 23 && tanggal < 32) {
                hasil ="Virgo";
            }
        }

        if (bulan == 9) {
            hasil = "Virgo";
            if (tanggal > 22 && tanggal < 32) {
                hasil ="Libra";
            }
        }

        if (bulan == 10) {
            hasil = "Libra";
            if (tanggal > 22 && tanggal < 32) {
                hasil ="Scorpio";
            }
        }

        if (bulan == 11) {
            hasil = "Scorpio";
            if (tanggal > 22 && tanggal < 32) {
                hasil ="Sagitarius";
            }
        }

        if (bulan == 12) {
            hasil = "Sagitarius";
            if (tanggal > 21 && tanggal < 32) {
                hasil ="Capricorn";
            }
        }
    }
    return hasil;
}
console.log(zodiak(1, 4))

let lulus = (nilai) => {
    let hasil = "nilai yang dimasukkan tidak valid";
    if (nilai > 0 && nilai < 101) {
        if (nilai > 75) {
            hasil = "Lulus";
        }else{
            hasil = "Nilai dibawah KKM";
        }
    }
    return hasil;
}
console.log(lulus(123));

let convert = () => {
    let angka = document.getElementById("num").value;
    let terbilang = (angka) => {

        var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
        if(angka < 12){
            return bilne[angka];
        }else if(angka < 20){
            return terbilang(angka-10)+" belas";
        }else if(angka < 100){
            return terbilang(Math.floor(angka/10))+" puluh "+terbilang(angka%10);
        }else if(angka < 200){
            return "seratus "+terbilang(angka-100);
        }else if(angka < 1000){
            return terbilang(Math.floor(angka/100))+" ratus "+terbilang(angka%100);
        }else if(angka < 2000){
            return "seribu "+terbilang(angka-1000);
        }else if(angka < 1000000){
            return terbilang(Math.floor(angka/1000))+" ribu "+terbilang(angka%1000);
        }else if(angka < 1000000000){
            return terbilang(Math.floor(angka/1000000))+" juta "+terbilang(angka%1000000);
        }else if(angka < 1000000000000){
            return terbilang(Math.floor(angka/1000000000))+" milyar "+terbilang(angka%1000000000);
        }else if(angka < 1000000000000000){
            return terbilang(Math.floor(angka/1000000000000))+" trilyun "+terbilang(angka%1000000000000);
        }    
    }

    document.querySelector('#belajar').innerHTML = terbilang(angka);
    
}

let prima = () => {
    let num = document.getElementById("number").value;
    let bagi = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? bagi++ : null;
    }
    bagi == 1 ? document.querySelector('#belajar').innerHTML = "Prima" : document.querySelector('#belajar').innerHTML = "Bukan Prima";
}