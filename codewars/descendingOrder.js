let str = "8873421"
let arrStr = [];

for(let i = 0; i < str.length; i++){
    arrStr.push(str[i]);
}

arrStr.sort();
console.log(arrStr.sort(-1))