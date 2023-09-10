// 레벨 1
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

/*
[1,1,3,3,0,1,1]	[1,3,0,1]
[4,4,4,3,3]	[4,3]
*/

function solution(arr){
    var answer = [];

    for (var i=0; i<arr.length; i++) {
        // 현재요소 arr[i]와 그 다음요소 arr[i + 1]를 비교하고 두 요소가 다르면 중복되지 않으므로 실행
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}