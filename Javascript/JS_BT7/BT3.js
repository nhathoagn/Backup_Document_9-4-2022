const beginTime = Date.now();

function doA() {
    console.log("begin doA");
    const beginTime = Date.now();
    while (Date.now() - beginTime < 10000) {}
    console.log("finish doA in ", Date.now() - beginTime);
}

function doB() {
    return new Promise((resolve, reject) => {
        console.log("Begin doB");
        const beginTime = Date.now();
        setTimeout(() => {
            console.log("finish doB in ", Date.now() - beginTime);
            resolve("doB");
        }, 1000);

    })
}
const controller = async(name) => {
    console.log("begin controller", name);
    doA();
    await doB();
    console.log("finish controller", name);
};
async function Action() {
    await controller(1);
    // console.log("in", Date.now() - beginTime)
    await controller(2);
    // console.log("in", Date.now() - beginTime)
    await controller(3);
    // console.log("in", Date.now() - beginTime)
}
Action();