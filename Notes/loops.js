const arr = ['a', 'b', 'c', 'd'];

console.log(arr[2]);

// for (let variableName = startingValue; condition to continue; what to do after each occurrence) {}
// start at 0, each time you do the code in between {} increase the counter by 1. stop when the counter is no longer less than the array length
for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}


const a = () => {
    console.log("A");
}

const b = (func) => {
    func();
}

const myObj = {
    key: 'value',
    funcToCall: b,
};

myObj.funcToCall(a)