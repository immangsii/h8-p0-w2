function konversiMenit(menit) {
    var jj = Math.floor(menit/60)
    var mm = menit%60

    return jj + ':' + mm
} 
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


//   var h = Math.floor(menit / 60);
//   var mm = (menit % 60).toString().length === 1 ? '0' + Math.floor(menit % 60) : Math.floor(menit % 60);

//   return h + ':' + mm;
// }