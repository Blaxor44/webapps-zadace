var obrni= (arr) => {
    var arr2 = []
    while (arr.length > 0) arr2.push(arr.pop())
    return arr2
  }
  
  console.log(obrni([3, 4, 5, 6]))