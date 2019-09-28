//1. Menyusun Barisan Bintang
var rows1 = 5
for ( var rows1 =0 ; rows1 < 5; rows1++){
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows1 = 5;
for (var i = 0; i < rows1; i++){     // i bernilai true sampai proses penambahan 1 kurang dari rows1 (batasan menjalankan program dibawahnya)
    var kotak = "";                  // kotak masih kosong (akan tetap kosong karena berada dalam scope local)
    for(var j = 0; j < rows1; j++){  // bernilai true sampai penambahan 1 kurang dari rows1
        kotak += '*';                // kotak = "" + * = * berulang kotak = "*" + * = ** prosesnya akan berhenti sampai j kurang dari 5
    }
    console.log(kotak);              //cetak kotak = *****

}
        

var rows1 = 5;
var kotak = "";                         //kotak masih kosong
for (var i = 0; i < rows1; i++){        // i bernilai true sampai isi proses penambahan 1 kurang dari rows1
    kotak += '*'                        //kotak kosong ditambahkan satu '*' bintang
    console.log(kotak);                 // cetak kotak = * berulang sampai i kurang dari 5
}
