// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181945

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
    // input = line;
    // input은 문자열 line으로 직접 할당됨. 문자열을 단일 값으로 가지게 됨.
    // 이 때 input을 스프레드 문법 ...input으로 분해하면 문자열 자체가 개별 요소로 처리됨.
    
    // input = [line];
    // input은 문자열 line을 포함하는 배열로 할당됨. line 문자열은 배열의 유일한 요소가 됨.
}).on('close',function(){
    //str = input[0];
    
    [...input].forEach(a => console.log(a))
    // 스프레드문법 ...input을 사용하면 문자열을 개별 문자로 분해해서 새로운 배열을 생성함.
    // forEach()메소드로 배열의 각 요소를 반복
});

