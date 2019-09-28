function konversiMenit(menit) {
var jj = menit/60 
if (jj < 1){   
    jj = 0
}
var mm = menit%60
if (mm < 10){
    mm = '0' + mm
}
return Math.floor(jj) +  ':' + mm
} 
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(0)); // 2:00