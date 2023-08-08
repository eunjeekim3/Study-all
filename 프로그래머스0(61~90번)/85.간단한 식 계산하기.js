// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

/*
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 
a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 
return 하는 solution 함수를 작성해 주세요.
*/

function solution(binomial) {
    var answer = 0;
    let bSplit = binomial.split(" ");
    
    let a = parseInt(bSplit[0]);
    let b = bSplit[1];
    let c = parseInt(bSplit[2]);
    
    if (b === '+') {
        answer = a + c
    } else if (b === '-') {
        answer = a - c
    } else {
        answer = a * c
    }
    
    return answer;
}

/*
다른 사람의 코드
const solution = (binomial) => {
    const [num1,op,num2] = binomial.split(' ');
    switch(op){
        case '+':
            return Number(num1)+Number(num2);
        case '-':
            return Number(num1)-Number(num2);
        case '*':
            return Number(num1)*Number(num2);
    }
}
*/