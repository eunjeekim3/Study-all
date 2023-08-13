// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181912

/*
배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 
잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (let i=0; i<intStrs.length; i++) {
        let number = intStrs[i].slice(s, s + l); // 각 intStrs 요소의 부분 문자열을 추출
        let num = Number(number)
        if(num > k) answer.push(num)       
    }  
    return answer;
}

/*
다른 풀이
const solution = (strs, k, s, l) => strs.reduce(
    (acc, cur) => (
        Number(cur.substring(s, s + l)) > k
        ? [...acc, Number(cur.substring(s, s + l))]
        : acc
    ),
    [],
)
*/