// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181922

/*
규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}

/*
다른 풀이
function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const copyArr = [...acc]
        const [to, from, val] = cur
        return copyArr.map((el, elIdx) => {
            if(elIdx >= to && elIdx <= from) {
                if(elIdx%val === 0) return el+1
            }
            return el
        })
    }, arr)
}
*/
