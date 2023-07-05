// 입력 #1 apple pen
// 출력 #1 applepen
// 입력 #2 Hello World!
// 출력 #3 HelloWorld!

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    
    // 문자열을 공백을 기준으로 나눈 후 join메소드로 다시 이어붙이기.
    // 그냥 출력하면 println처럼되니 이어붙여주기
    const result1 = str1.split(" ").join("");
    process.stdout.write(result1);
    
    const result2 = str2.split(" ").join("");
     process.stdout.write(result2);
});