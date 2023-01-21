//document.querySelector("#paragraf").innerHTML = "saya belajar javascript";

//document.querySelector("#content").innerHTML = "<h1>Ganti isi</h1>";

let tanggal = 5;
let bulan = 2;
let hasil  = "salah";
    if (tanggal >0 && tanggal < 32 && bulan > 0 && bulan <13) {
        hasil = "Input salah";
        
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
                hasil ="Aries";
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
// document.querySelector("#paragraf").innerHTML = `<h1>${hasil}</h1>`;

//atau bisa menggunakan

document.querySelector("#paragraf").innerHTML = "<h1>" + hasil + "</h1>";