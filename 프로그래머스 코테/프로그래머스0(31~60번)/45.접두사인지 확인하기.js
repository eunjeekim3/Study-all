// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

/*
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 
아니면 0을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, is_prefix) {
    const result = [];
    // ...my_mystring을 각 문자로 분해
    // 각 단계마다 현재까지의 접두사들을 배열 acc에 저장
    // cur은 현재문자, idx는 현재 문자의 인덱스
    const prefixies = [...my_string].reduce((acc, cur, idx) => {
        // 접두사 저장. 현재 인덱스까지의 문자열을 추출해서 저장
        const sliceWord = my_string.slice(0, idx + 1);
        return [...acc, sliceWord];
    }, []);

    // 앞서 얻은 결과에 is_prefix가 포함되어있는지 여부에 따라 결과 반환
    return prefixies.includes(is_prefix) ? 1 : 0;
}