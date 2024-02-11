// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181881

/*
x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr) {
    let result = arr;
    let count = 0;

    while(true){
        arr = arr.map(num => {
            if(num >= 50 && !(num % 2)) return num / 2;
            if(num < 50 && num % 2) return num * 2 + 1;
            return num;
        });

        count += 1;

        if(String(result) === String(arr)) return count - 1;
        result = arr;
    };
};

/*
다른 풀이
function solution(arr) {
    let idx = 0
    let prevArr = arr
    while(true) {
        // 현재 배열을 조건에 맞게 변환
        const changeCurArr = prevArr.map(a => {
            if(a >= 50 && a%2 === 0) return a/2
            if(a < 50 && a%2 === 1) return a*2+1
            return a
        })
        // 이전의 모든 배열과 현재 모든 배열의 요소 비교
        const isAllSame = prevArr.every((a, i) => a === changeCurArr[i])
        if(isAllSame) break
        idx+=1
        
        // 현재 배열을 이전 배열 변수에 저장함
        prevArr = changeCurArr
    }
    
    return idx
}
*/