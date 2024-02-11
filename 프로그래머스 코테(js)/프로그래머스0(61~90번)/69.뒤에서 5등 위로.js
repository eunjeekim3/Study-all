// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181852

/*
정수로 이루어진 리스트 num_list가 주어집니다.
num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    return num_list.sort((a,b) => a-b).slice(5)
}

/*
통과못한 코드
function solution(num_list) {
    var answer = [];
    
    let sortedNumbers = num_list.sort((a, b) => a - b); // 오름차순 정렬
    answer = sortedNumbers.slice(5, 10); // 가장 작은 5개 선택

    return answer;
}
*/