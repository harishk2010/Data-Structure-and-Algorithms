function fibonacci(n){
    const fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

function factorial(n){
    let fact=1
    for(let i=1;i<=n;i++){
        fact=i*fact
    }
    return fact
}

console.log(fibonacci(1))  //O(n)
console.log(factorial(5))   //O(n)