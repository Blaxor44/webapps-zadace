var brojevi=(arr)=>{
    var arr2=[]
    for(var x of arr){
        if(x%3==0){
            arr2.push(x)
        }
    }
    console.log(`${arr} -> Brojevi djeljivi s 3: ${arr2}`)
}

brojevi([100, 50, 30, 60, 300, 1999]);