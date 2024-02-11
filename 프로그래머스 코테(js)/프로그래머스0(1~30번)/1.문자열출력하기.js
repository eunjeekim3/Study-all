// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181952?language=java

const readline = require('readline');
// readline모듈은 자스 내장 모듈로, readable 스트림에서 한 줄씩 입출력을 처리하도록 도와줌
// require("모듈 이름")을 선언하고, 변수를 선언해서 저장
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    // 변수를 이용해 readline 인터페이스 객체를 만들어줌
    // createInterface메소드로 객체를 만들고 rl변수에 저장
}).on('line',console.log)
// on메소드를 이용하여 이벤트가 발생할 때 실행할 동작을 지정함

/*
let str = "HelloWord!";
console.log(str);
이렇게하면 똑같은 결과가 나오지만 프로그래머스에서는 정답처리되지않음...
*/

