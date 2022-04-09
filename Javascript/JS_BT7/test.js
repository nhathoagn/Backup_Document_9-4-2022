Array.prototype.forEachFake = async (item) => {
    for (let i = 0; i < item.length; i++) {
        await item[i];
    }
};
const controller = (mess) => {
    const start = Date.now();
    const array = Array.from(Array(1000000).keys());
    array
        .forEachFake((item) => {
            console.log(item);
        })
        .then(() => console.log(mess + String(new Date().getTime() - start)));
};

controller("1 ");
controller("2 ");
controller("3 ");