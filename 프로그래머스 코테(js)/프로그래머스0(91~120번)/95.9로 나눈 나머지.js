// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181914

/*
음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
*/

function solution(number) {
    var answer = 0;

    for(let i of number){
        answer += Number(i);
    }

    return answer%9;
}

/*
다른 풀이
function solution(number) {
    return [...number].reduce((acc, cur) => acc+Number(cur), 0)%9
}
*/