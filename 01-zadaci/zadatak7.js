var fun = (X) => {
    var result = 1
    if (X >= 0 && X <= 1000) {
      for (var i = 1; i <= X; i++) {
        if (i % 7 === 0) result *= i
      }
      return result
    } else return -1
  }
  
  console.log(fun(23));