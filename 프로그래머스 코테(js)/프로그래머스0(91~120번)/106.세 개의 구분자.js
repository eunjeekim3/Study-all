// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181862

/*
문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 
나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(myStr) {
    let answer = [];
    myStr = myStr.replaceAll('a',',').replaceAll('b',',').replaceAll('c',',');
    let strArr = myStr.split(',');
    strArr.forEach(el=> {
        if (el.length!=0) {
            answer.push(el);
        }
    })
    if (answer.length===0) {
        return ["EMPTY"]
    }
    return answer;
}

/*
다른 풀이
function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(a => a)
    return result.length ? result : ["EMPTY"]
}
*/