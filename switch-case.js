var day = 30, month = 2, year =1900; 

switch(day >=1 && day <=31){
  case true: day; break;
  default: day = 'Masukkan tanggal (1- 31) sebelum '; break;
}
switch(month) {
  case 1: month =' Januari ' ; break; 
  case 2: month =' Februari ' ; break;
  case 3: month =' Maret ' ; break;  
  case 4: month =' April ' ; break;  
  case 5: month =' Mei' ; break; 
  case 6: month =' Juni ' ; break; 
  case 7: month =' Juli ' ; break;
  case 8: month =' Agustus ' ; break;
  case 9: month =' September ' ; break; 
  case 10: month =' Oktober ' ; break;  
  case 11: month =' November ' ; break; 
  case 12: month =' Desember ' ; break; 
  default: month = ' Masukkan bulan Januari sampai Desember '; break;
}
switch(year >=1900 && year <=2200){
  case true: year; break; default: year = 'Masukkan tahun 1900 sampai 2200'; break;
}
console.log(day + month + year);

switch((day >=1 && day <=31) && (year >=1900 && year <=2200)){
  case true:
      console.log(day + month + year);
      break;
  default:
    console.log("Tidak sesuai kondisi")
    break;
}