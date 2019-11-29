function ThrowOneCoin(){
    return new Promise((resolve, reject)=>{
        let val = Math.random()
        console.log(val)
        if (val > 0.5) resolve()
        else reject()
    })
}
let tirada = ThrowOneCoin()

tirada.then(()=>{
    console.log("Cruz!!")
}).catch(()=>{
    console.log("Cara!!")
})