// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

/*
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

//다른 풀이 보고 해석중
// 레벨 1은 아리스토테네스의 체라는 것을 필수로 알아야했는데
// 이번 문제는 DFS를 사용하여 순열을 구하면 됨
function solution(numbers) {
    return [...new Set(getPer(numbers))].filter(v => isPrime(v)).length;
}

const getPer = (str) => {
    const answer = [];
    const n = str.length;
    let ch = Array.from({ length: n }, () => 0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(curStr + str[i]);
                ch[i] = 0;
            }
        }
    }
    dfs('');
    answer.shift();
    return answer;
}

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
