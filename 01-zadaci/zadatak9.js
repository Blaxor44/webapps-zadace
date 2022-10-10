var provjeri = (o1, o2) => {
    var isti_kljuc = true
  
    if (Object.keys(o1).length !== Object.keys(o2).length) return false
  
    for (let i = 0; i < Object.keys(o1).length; i++) {
      if (Object.keys(o1)[i] !== Object.keys(o2)[i]) {
        isti_kljuc = false
      }
    }
    return isti_kljuc
  }
  
  o1= {
    a: 1,
    b: 2, 
    c: 3
  }
  
  o2 = {
    a: 321,
    b: 3,
    c: 1
  }
  
  console.log(provjeri(o1,o2))
  