// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181843

/*
문자열 my_string과 target이 매개변수로 주어질 때, 
target이 문자열 my_string의 부분 문자열이라면 1을, 
아니라면 0을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, target) {
    var answer = 0;
    
    if (my_string.includes(target) === true) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}