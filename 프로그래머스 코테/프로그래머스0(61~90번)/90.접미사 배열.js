// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181909

/*
문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 
정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
    const strLen = my_string.length
    return [...my_string].reduce((acc, cur, idx) => {
        const sliceWord = my_string.slice(idx, strLen); // 접미사 저장
        return [...acc, sliceWord];
    }, []).sort();
}