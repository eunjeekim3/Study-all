// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181883

/*
규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, queries) {

    queries.forEach(e2 => {
        const s = e2[0];
        const e = e2[1];
        for(let i = s ; i <= e; i++ ){
            arr[i]++;
        }
    })

    return arr;
}

/*
다른 풀이
function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [from, to] = cur
        for(let i = from ; i <= to ; i ++) {
            acc[i]+=1
        }
        return acc
    }, arr)
}
*/