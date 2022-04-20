let data1 = document.getElementById('bank-balance-11')
let data2 = document.getElementById('bank-balance-22')
let data3 = document.getElementById('bank-balance-33')

const bb1 = document.getElementById('bank-balance-1')
const bb2 = document.getElementById('bank-balance-2')
const bb3 = document.getElementById('bank-balance-3')


function calculate() {
   let a = [bb1.value,bb2.value,bb3.value]
   console.log(a)
   calculateIntrest(a)
   data1.innerText = a[0]
   data2.innerText = a[1]
   data3.innerText = a[2]
   var one = document.getElementsByClassName('cls')
   one.classList.add('cls1')
   console.log(a)
}

function calculateIntrest(a){

    for(let i=0;i<a.length;i++){
        if(a[i]>200000){
            a[i] = Number(a[i]) + a[i]*0.1
            a[i] = Number(a[i]) - a[i]*0.002
        }
        else if(a[i]>100000){
            a[i] = Number(a[i]) + a[i]*0.05
            a[i] = Number(a[i]) - a[i]*0.0005
        }
        else if(a[i]<=100000){
            a[i] = Number(a[i]) + a[i]*0.03
        }
    }
}