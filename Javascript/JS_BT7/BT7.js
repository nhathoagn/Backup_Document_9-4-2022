const  controller = (req) =>{
    const start = Date.now();
    const array = Array.from(Array(1000).keys())
    loop_array(array)
        .then( () => {
            // console.time("time")
            // console.log(req)
            // console.timeEnd("time")
            console.log(req + String(new Date().getTime() - start));
        })

}
async function loop_array(array) {
    let i=0;

    while (i<array.length){
       await array[i]
        i++
    }

}
controller("1 ")
controller("2 ")
controller("3 ")
controller("4 ")
controller("5 ")