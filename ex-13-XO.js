function xo(str) {
var o = 'o'
var x = 'x'
for(var i=0;i<str.length;i++){ 
    if (str[i] === 'x'){    
        x++                   
    } else {
        o++
    }
}
return x === o
}

  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true






  