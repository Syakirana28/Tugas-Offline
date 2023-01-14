zodiak(2, 10);

function zodiak(bulan, tanggal) {
    let hasil = "Tanggal atau bulan yang di input salah";

    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        hasil = "Zodiak tidak tersedia";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tanggal > 19 && tanggal < 32) {
                hasil = "aquarius";
            }
        }

        if (bulan == 2) {
            hasil = "Aquarius";
            if (tanggal > 18 && tanggal < 30) {
                hasil = "Pisces";
            }
            hasil = "Tanggal tidak ada";
        }

        if (bulan == 3) {
            hasil = "Pisces";
            if (tanggal > 20) {
                hasil = "Aries";
            }
        }

        if (bulan == 4) {
            hasil = "Aries";
            if (tanggal > 20) {
                hasil = "Taurus";
            }
        }
    }

    console.log(hasil);
}

lulus(75);
function lulus(nilai) {

    let hasil = "Nilai yang di masukkan salah";
    if (nilai > 0 && nilai <=100) {
        if (nilai >=75) {
            hasil = "LULUS";
        }else{
            hasil = "NILAI DIBAWAH KKM";
        }
    }

    console.log(hasil);
    
}

// atau

function lulus(nilai) {
    let KKM = 75;
    let batasbawah = 0;
    let batasatas = 100;
    let baik = "LULUS";
    let buruk = "TIDAK LULUS";
    let kesalahan = "Nilai yang anda masukkan salah";

    if (nilai >=batasbawah && nilai <=batasatas) {
        if (nilai >= KKM) {
            console.log(baik);
        } else {
            console.log(buruk);
        }
    } else {
        console.log(kesalahan);
    }
}

console.log(lulus(90));


function terbilang(angka) {

    var bilne=["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];

		if(angka < 12){

			return bilne[angka];

		}else if(angka < 20){

			return terbilang(angka-10)+" Belas";

		}else if(angka < 100){

			return terbilang(Math.floor(parseInt(angka)/10))+" Puluh "+terbilang(parseInt(angka)%10);

		}else if(angka < 200){

			return "Seratus "+terbilang(parseInt(angka)-100);

		}else if(angka < 1000){

			return terbilang(Math.floor(parseInt(angka)/100))+" Ratus "+terbilang(parseInt(angka)%100);

		}else if(angka < 2000){

			return "Seribu "+terbilang(parseInt(angka)-1000);

		}else if(angka < 1000000){

			return terbilang(Math.floor(parseInt(angka)/1000))+" Ribu "+terbilang(parseInt(angka)%1000);

		}else if(angka < 1000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000))+" Juta "+terbilang(parseInt(angka)%1000000);

		}else if(angka < 1000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000))+" Milyar "+terbilang(parseInt(angka)%1000000000);

		}else if(angka < 1000000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" Trilyun "+terbilang(parseInt(angka)%1000000000000);

		}

	}
    
console.log(terbilang(1945));


function prima(bilangan) {
    let pembagi = 0;
    for (let i = 1; i < bilangan; i++) {
        if (bilangan % 1 == 0) {
            pembagi++;
        }
    }
        if (pembagi == 2) {
        return "Prima";
    } else {
        return "Bukan Prima";
    }
}

console.log(prima(7));