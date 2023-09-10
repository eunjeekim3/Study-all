// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

/*
각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 
문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_strings, parts) {
    // reduce로 배열의 요소를 누적하면서 처리
    // acc는 누적값, cur은 현재순회요소, idx는 현재 인덱스
    return my_strings.reduce((acc, cur, idx) => {
        // parts[idx] 배열의 첫번째 요소를 from, 두번째를 to에 할당
        const [from, to] = parts[idx];
        // cur에서 from과 to 사이 문자열을 추출한 결과가 저장됨
        const curSlice = cur.slice(from, to + 1);
        return acc + curSlice;
    }, "");
}

/*
다른 풀이
function solution(my_strings, parts) {
    var answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        answer += my_strings[i].substring(parts[i][0], parts[i][1]+1);
    }
    return answer;
}
*/