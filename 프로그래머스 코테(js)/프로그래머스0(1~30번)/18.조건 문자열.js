/*
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m
*/

function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if (ineq === '>' && eq === '='){
        answer = n >= m ? 1 : 0;
    } else if (ineq === '<' && eq === '='){
        answer = n <= m ? 1 : 0;
    } else if (ineq === '>' && eq === '!'){
        answer = n > m ? 1 : 0;
    } else if (ineq === '<' && eq === '!'){
        answer = n < m ? 1 : 0;
    } 
    
    return answer;
}