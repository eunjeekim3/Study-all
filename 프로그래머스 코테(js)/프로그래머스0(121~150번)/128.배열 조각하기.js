// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181893

/*
작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr, query) {
    
    for(let i = 0 ; i < query.length ; i ++) {
        const cur = query[i]
        
        if(i%2 === 0) {
            arr.splice(cur+1, arr.length -(cur+1))
        } else {
             arr.splice(0, cur)
        }
    }
    
    return arr
}

/*
다른 풀이
function solution(arr, query) {
    query.forEach((q, i) => {
        if(i%2) { // 홀수
            arr = arr.slice(q);
        } else { // 짝수
            if(q > arr.length - 1) arr = arr.slice(0, q);
            else arr = arr.slice(0, q + 1);
        }
    })

    return arr.length ? arr : [-1];
}
*/