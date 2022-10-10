var pretvori=(X)=> {
        var sati = Math.floor(X / 60);  
        var minute = X % 60;
        console.log(`${X}-> Ovo je`, sati, "sat/i i", minute, "minuta/e");         
}

pretvori(125);