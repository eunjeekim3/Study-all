// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181927

/*
정수 리스트 num_list가 주어질 때, 
마지막 원소가 그전 원소보다 크면 마지막 원소에서 
그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 
마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    var answer = [...num_list];
    
    const a = answer[num_list.length-1];
    const b = answer[num_list.length-2];
    
    if (a>b) {
        answer.push(a-b);
    } else if (a<=b) {
        answer.push(a*2);
    } else false
    
    return answer;
}

/*
내가 푼 해답... 답은 맞았으나 검사에서 탈락
function solution(num_list) {
    var answer = [];
    
    const last = num_list[num_list.length - 1];
    const last2 = num_list[num_list.length - 2];
    
    if (last2 > last) {
        answer.push(last * 2);
    } else {
        answer.push(last - 1);
    }
    
    answer.unshift(...num_list); 
    // 기존 num_list의 요소를 새로운 배열의 앞에 추가
    // unshift() : 배열의 맨 앞에 요소를 추가하는 내장 메소드
    // ...를 추가함으로써 배열을 스프레드하여 개별 요소로 분리
    
    return answer;
}
*/