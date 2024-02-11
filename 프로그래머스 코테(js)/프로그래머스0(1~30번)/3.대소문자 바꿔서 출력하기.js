// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = [];
    
    for (let i=0; i<str.length; i++){ // 각문자 확인
        if (str[i] === str[i].toUpperCase()){ // 대문자면
            arr.push(str[i].toLowerCase()); // 소문자로
        } else {
            arr.push(str[i].toUpperCase()); // 대문자로
        }
    }
    
    const result = arr.join(""); // join메소드로 배열을 문자열로
    console.log(result);
});

