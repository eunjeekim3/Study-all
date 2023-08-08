// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181844

/*
정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 
삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr, delete_list) {
    var answer = [];
    
    for (let i=0; i<arr.length; i++) {
        if (!delete_list.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

/*
다른 사람의 풀이
const solution = (arr, dels) => arr.filter((el) => !dels.includes(el))
*/