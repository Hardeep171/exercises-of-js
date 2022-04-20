var num = Number(prompt("Enter number of users with balences:"))
    let a = []
    for(let i=0;i<num;i++){
        var j = i+1
        let balance = Number(prompt("Enter balance for user " + j +":"))
        a.push(balance)
    }
    console.log("Total customers With left Balances:")
    console.log(a)
    for(let i=0;i<a.length;i++){
        if(a[i]>200000){
            a[i] += a[i]*0.1;
            a[i] -= a[i]*0.002;
        }
        else if(a[i]>100000){
            a[i] += a[i] * 0.05
            a[i] -= a[i] * 0.0005
        }
        else if(a[i]<=100000){
            a[i] += a[i] * 0.03
        }
    }
    console.log("customers Balances with intrest:")
    console.log(a)