// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181930

/*
1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다.
세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b, c) {
    var answer = [a,b,c];
    
    for (i=0; i<answer.length; i++) {
        if (a !== b && b !== c && a !== c) {
            answer = a + b + c;
        } else if (a === b && b === c) {
            answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
        } else if (a === b || a === c || b === c) {
            answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
        }
    }
    
    return answer;
}

/*
다른 사람의 풀이
function solution(a, b, c) {
    if(a === b && b === c && a === c) return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3)
    if(a === b || b === c || a=== c) return (a + b + c) * (a**2 + b**2 + c**2)
    return a+b+c
}
*/


