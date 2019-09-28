//1. Melakukan Looping Menggunakan While
var text = 'LOOPING PERTAMA'
console.log (text)

var angka = 2;
while(angka <=20) { 
  console.log(angka + ' - I love coding');
  angka+=2;
}

var text = 'LOOPING KEDUA'
console.log (text)

var angka = 20;
while(angka >= 2) {
  console.log(angka + ' - I will become fullstack developer');
  angka-=2;
}

//2. Melakukan Looping Menggunakan For
var text = 'LOOPING PERTAMA'
console.log(text)
for(var angka = 1; angka <= 20; angka++) {
    console.log(angka + ' - I love coding')
  }

var text = 'LOOPING KEDUA'
console.log(text)
for(var angka = 20; angka > 0; angka--) {
    console.log(angka + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
for(var angka = 1; angka <= 100; angka++) {
    if (angka %2==0)
    console.log('GANJIL');
    else
    console.log('GENAP');
}

for(var angka = 1; angka <= 100; angka+=2) {
    if (angka %3==0)
    console.log('3 KELIPATAN 3');
    else
    console.log(' "" '); 
}

for(var angka = 1; angka <= 100; angka+=5) {
    if (angka %6==0)
    console.log('6 KELIPATAN 6');
    else
    console.log(' "" ');
}

for(var angka = 1; angka <= 100; angka+=9) {
    if (angka %10==0)
    console.log('10 KELIPATAN 10');
    else
    console.log(' "" ');
}









