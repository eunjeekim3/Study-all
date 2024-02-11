// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181904

/*
문자열 my_string과 두 정수 m, c가 주어집니다. 
my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, m, c) {
    let answer = '';
    const rows = []; 
    for (let i = 0; i < my_string.length; i += m) {
        rows.push(my_string.substr(i, m)); // m 글자씩 자른 문자열을 배열에 저장
    }
    if (my_string.length % m !== 0) { // 문자열의 길이가 m으로 나누어 떨어지지 않는 경우
        const lastRow = my_string.substr(rows.length * m); // 마지막 덩어리를 따로 자른 후에 배열에 추가
        rows.push(lastRow);
    }
    for (let i = 0; i < rows.length; i++) {
        answer += rows[i][c - 1]; // c번째 열의 문자를 answer에 추가
    }
    return answer;
}

/*
다른 풀이
function solution(my_string, m, c) {
    let result =''
  
    for(i=c-1; i<my_string.length; i += m){
    result += my_string[i]
    }
    
    return result
}
*/