// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181840

/*
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, 
num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
    var answer = 0;
    
    if (num_list.includes(n)) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}

// 테스트 통과못한 코드
// function solution(num_list, n) {
//     var answer = 0;
    
//     if (n in num_list) {
//         answer = 1;
//     } else {
//         answer = 0;
//     }
    
//     return answer;
// }
