// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181903

/*
두 정수 q, r과 문자열 code가 주어질 때, 
code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 
앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(q, r, code) {
    let arr = code.split("");
    let str = "";
    for(let i =0; i<arr.length; i++){
        if(i%q === r){
            str += arr[i];
        }
    }
    return str;
}

/*
다른 풀이
function solution(q, r, code) {
    // code를 배열로 변환해서 reduce로 처리.
    return [...code].reduce((acc, cur, idx) => {   
        // idx를 q로 나눈 나머지가 r과 같다면 acc에 현재문자를 더함
        // 그렇지않다면 누적된 결과값을 그대로 반환     
        return idx%q === r ? acc+cur : acc
    }, "")
}

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}
*/