// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181839

/*
1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다.
두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b) {
    var answer = 0;
    
    if (a % 2 === 1 && b % 2 === 1) {
        answer = Math.pow(a, 2) + Math.pow(b, 2); // a를 2만큼 제곱
    } else if (a % 2 === 1 || b % 2 === 1) {
        answer = 2 * (a+b);
    } else {
        answer = Math.abs(a - b);
        // 절댓값 함수
    }
    
    return answer;
}