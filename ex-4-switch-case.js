var day = 30, month = 1 , year =1900; 
var printMonth;
switch(day >=1 && day <=31){
  case true: day;
  break;
  default: break;
}
switch(month) {
  case 1: printMonth =' Januari ' ; break; 
  case 2: printMonth =' Februari ' ; break;
  case 3: printMonth =' Maret ' ; break;  
  case 4: printMonth =' April ' ; break;  
  case 5: printMonth =' Mei' ; break; 
  case 6: printMonth =' Juni ' ; break; 
  case 7: printMonth =' Juli ' ; break;
  case 8: printMonth =' Agustus ' ; break;
  case 9: printMonth =' September ' ; break; 
  case 10: printMonth =' Oktober ' ; break;  
  case 11: printMonth =' November ' ; break; 
  case 12: printMonth =' Desember ' ; break; 
  default: break;
}
switch(year >=1900 && year <=2200){
  case true: year; break; default: break;
}

switch((day >=1 && day <=31) && (month > 0 && month <=12) && (year >=1900 && year <=2200)){
  case true:
      console.log(day + printMonth + year);
      break;
  default:
    console.log("Tidak sesuai kondisi")
    break;
}