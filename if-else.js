/* 1. Jika belum menuliskan nama pada variable nama
    OUTPUT : "Nama harus diisi!"

   2. Jika belum memilih peran (Ksatria, Tabib, Penyihir) pada bagian var peran
    OUTPUT : "Halo (nama kamu), Pilih peranmu untuk memulai game!"

    3. Jika telah menentukan nama dan memilih peran Ksatria pada bagian var nama dan peran
    OUTPUT: "Selamat datang di Dunia Proxytia, (nama kamu)"
            "Halo Ksatria (nama kamu), kamu dapat menyerang dengan senjatamu!"

    4. Jika telah menentukan nama dan memilih peran Tabib pada bagian var nama dan peran
    OUTPUT: "Selamat datang di Dunia Proxytia, (nama kamu)"
            "Halo Tabib (nama kamu), kamu akan membantu temanmu yang terluka."

    5. Jika telah menentukan nama dan memilih peran Penyihir pada bagian var nama dan peran
    OUTPUT: "Selamat datang di Dunia Proxytia, (nama kamu)"
            "Halo Penyihir (nama kamu), ciptakan keajaiban yang membantu kemenanganmu!"
*/

var nama = '';
var peran = '';
var selamat = 'Selamat datang di Dunia Proxytia'

if (nama && peran === 'Ksatria'){
    console.log(selamat + ' ' + nama);
    console.log('Halo ' + peran + ' ' + nama +',' , 'kamu dapat menyerang dengan senjatamu!');
}
else if (nama && peran === 'Tabib'){
    console.log(selamat + ' ' + nama);
    console.log('Halo ' + peran + ' ' + nama +',' , 'kamu akan membantu temanmu yang terluka.');
}
else if (nama && peran === 'Penyihir'){
    console.log(selamat + ' ' + nama);
    console.log('Halo ' + peran + ' ' + nama +',' , 'ciptakan keajaiban yang membantu kemenanganmu!');
}
else if (nama ===''){
  	console.log("Nama harus diisi!")
}
else {
    console.log('Halo ' + nama +',' , 'Pilih peranmu untuk memulai game!')
}