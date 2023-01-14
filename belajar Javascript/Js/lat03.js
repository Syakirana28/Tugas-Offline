let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>soto</h1>" + "<p>deskripsi soto</p>" + "<img src='Bakso.jpg' width='300px'>";
isi.innerHTML += "<h1>Rawon</h1>";
isi.innerHTML += "<p>Isi rawon</p>";
isi.innerHTML += "<img src='Bakso.jpg' width='300px'>";

// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>" 
//                     + "<thead><tr><th>Nomor</th></tr></thead>"
//                     + "<tbody>"
//                     + "<tr><td>1</td></tr>"
//                     + "<tr><td>2</td></tr>"
//                     + "<tr><td>3</td></tr>"
//                     + "<tr><td>4</td></tr>"
//                     + "<tr><td>5</td></tr>"
//                     + "</tbody>"
//                     + "</table> <br>";

for (let i = 0; i < 10; i++) {
    //console.log(i);
    document.querySelector("#paragraf").innerHTML += "<h1>" + i + "</h1><br>";
}

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table><thead><tr><th>Nomor</th></tr></thead><tbody>" 
// tabel.innerHTML = "<tr><td>1</td></tr>"
// tabel.innerHTML += "<tr><td>2</td></tr>"
// tabel.innerHTML += "<tr><td>3</td></tr>"

for (let i = 0; i < 9; i++) {
    tabel.innerHTML += "<tr><td>" + i + "</td></tr>";
    
}
tabel.innerHTML += "</tbody></table>";