var recenica=(str)=> {
    var rijeci = str.toLowerCase().split(' ');
    for (var i = 1; i < rijeci.length; i++) 
        rijeci[i] = rijeci[i].charAt(0).toUpperCase() + rijeci[i].substring(1);     
    return rijeci.join(''); 
 }
 
 console.log(recenica("web apps vjezbe"));