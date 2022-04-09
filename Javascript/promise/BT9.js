var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('0'), 1000);
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('01'), 1000);
});

var p3 = new Promise((resolve, reject) => {
    reject ("reject");
})
let arr_1 = [p1,p2,p3]
let arr_2 = []
for (let i =0; i<arr_1.length;i++){
    arr_2.push(arr_1[i].catch( () =>{
        return "reject";
    }))
}
Promise.all(arr_2)
.then(result =>{
    console.log(result)
})



C2

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('0'), 1000);
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('01'), 1000);
});

var p3 = new Promise((resolve, reject) => {
    try{
        setTimeout(resolve,ms)
    }catch (e){
        return new Promise( (resolve) =>{
            resolve("error")
        })
    }
})
Promise.all([p1,p2,p3]).then( value => {
    console.log(value)
})

