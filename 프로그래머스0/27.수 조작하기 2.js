// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181925

/*
정수 배열 numLog가 주어집니다.
주어진 정수 배열 numLog에 대해 조작을 위해 
입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(numLog) {
    let answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        if (numLog[i] - numLog[i-1] === 1) {
            answer = answer + 'w';
        } else if (numLog[i] - numLog[i-1] === -1) {
            answer = answer + 's';
        } else if (numLog[i] - numLog[i-1] === 10) {
            answer = answer + 'd';
        } else if (numLog[i] - numLog[i-1] === -10) {
            answer = answer + 'a';
        }
    }
    return answer;
}

/*
다른 사람 풀이
function solution(numLog) {
    const controller = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }
    
    return numLog.slice(1).reduce((acc, cur, idx) => acc + controller[`${numLog[idx+1]-numLog[idx]}`], ""); 
    // slice를 통해 배열의 첫 번째 요소를 제외한 나머지 요소들을 새로운 배열로 생성함.
    // 현재 요소와 그 다음 요소의 차이를 계산하기 위해서임
    // ${numLog[idx+1] - numLog[idx]}는 현재 요소와 그 다음 요소의 차이를 나타냄.
    // 이렇게 계산된 조작 값을 acc에 누적함
}
 */