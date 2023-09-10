/*
"abc1abc1abc"	"acbac"
*/

function solution(code) {
    var mode = 0;
    
    // reduce() : 배열의 각 요소를 순회하면서 콜백함수를 실행하여 하나의 값으로 축소하는 기능을 제공
    // array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
    // accumulator : 누적된 값
    // currentValue : 현재 처리중인 요소의 값
    // (currentIndex) : 현재 처리중인 요소의 인덱스
    // (initialValue) : 최초의 accumulator 값으로 사용될 초기값
    return [...code].reduce((acc, cur, idx) => {
        if(mode){ // mode가 1일 경우
            if(cur !== '1' && idx % 2 === 1) return acc + cur
            if(cur === '1') mode = 0
        } else {
            if(cur !== '1' && idx % 2 === 0) return acc + cur
            if(cur === '1') mode = 1
        }
        return acc
    }, "") || "EMPTY"
}

/*
첫번째풀이 에러남...
function solution(code) {
    var ret = '';
    var mode = 0;
    
    if (mode === 0) {
        if (code[idx] != 1 && code[idx] % 2 === 0) {
            ret = ret + code[idx];
        } else if (code[idx] === 1) {
            mode = 1;
        }
    } else if (mode === 1) {
        if (code[idx] != 1 && code[idx] % 2 === 1) {
            ret = ret + code[idx];
        } else if (code[idx] === 1) {
            mode = 0;
        }
    }
    
    return ret;
}
*/