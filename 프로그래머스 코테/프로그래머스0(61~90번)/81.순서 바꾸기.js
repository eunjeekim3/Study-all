// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181891

/*
n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 
리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
    // splice는 배열에서 요소를 추가하거나 삭제함
    // 0은 start, n은 개수만큼의 요소를 삭제하고, 그 요소로 이루어진 배열을 반환
    num_list.push(...num_list.splice(0, n));
    return num_list;
}

/*
다른 풀이
function solution(num_list, n) {
    const num_list2 = num_list.splice(n)
    return [...num_list2, ...num_list]
}
*/