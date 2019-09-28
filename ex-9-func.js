function bikinKata(kata1, kata2){
    var kata = kata1 + kata2;
    return kata
}

console.log(bikinKata("Halo ", "Function!")) // Menampilkan "Halo Function!" di console


function calculateMultiply(num1, num2){
    var hasilPerkalian = num1 * num2;
    return hasilPerkalian
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


function processSentence(name,age,addres,hobby){
    var fullSentence = 'Nama saya ' + name + ',' + ' umur saya '+ age + ' tahun, alamat saya di '+addres;
    return fullSentence 
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"