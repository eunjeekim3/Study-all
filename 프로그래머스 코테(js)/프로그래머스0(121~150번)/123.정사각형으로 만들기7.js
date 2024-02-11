// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181830

/*
이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < arr[i].length) {
            arr.push(new Array(arr[i].length).fill(0));
        } else if (arr.length > arr[i].length) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr.length !== arr[i].length) {
                arr[i].push(0);    
                }
            }
        }
    }

    return arr;
}

/*
다른 풀이
function solution(arr) {
    const ROWS = arr.length;
    const COLS = arr[0].length;
    const DIFF = Math.abs(ROWS - COLS);

    if(ROWS > COLS) {
        for(let i=0; i<ROWS; i++) {
            for(let j=0; j<DIFF; j++) {
                arr[i].push(0);
            }
        }
    } else if(ROWS < COLS) {
        for(let i=0; i<DIFF; i++) {
            const row = new Array(COLS).fill(0);
            arr.push(row);
        }
    }

    return arr;
}
*/