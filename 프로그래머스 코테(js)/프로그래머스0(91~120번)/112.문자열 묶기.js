// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181855

/*
strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(strArr) {
    let answer = 0;
    const lengthMap = {};
    for (let i = 0; i < strArr.length; i++) {
        const length = strArr[i].length;
        if (lengthMap[length]) {
            lengthMap[length]++;
        } else {
            lengthMap[length] = 1;
        }
    }

    for (const key in lengthMap) {
        if (lengthMap[key] > answer) {
            answer = lengthMap[key];
        }
    }
    return answer;
}

/*
다른 풀이
function solution(strArr) {
    const dict={}
    // key: 문자열 길이, value: 문자열 목록
    strArr.forEach(item => {
        const len = item.length
        dict[len] = dict[len] ?? []
        dict[len].push(item)
    })
    // 길이 별 목록 수의 최댓값
    const values = Object.values(dict).map(a => a.length)
    return Math.max(...values)
}
*/