// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181894

/*
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 
배열을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(arr) {
    let index1 = -1;
    let index2 = -1;
    
    for (let i = 0; i < arr.length; i++) { // 2로 시작하는 인덱스
        if (arr[i] === 2) {
            index1 = i;
            break;
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) { // 뒤에서부터 2로 시작하는 인덱스
        if (arr[i] === 2) {
            index2 = i; 
            break;
        }
    }
    
    if (index1 !== -1 && index2 !== -1) {
        return arr.slice(index1, index2 + 1); // index2도 결과에 포함되어야 함
    } else if (index1 === -1 && index2 === -1) {
        return [-1]; // 2가 없는 경우 -1을 배열로 반환
    } else {
        return []; // 둘 중 하나만 -1인 경우 빈 배열 반환
    }
}

/*
다른 풀이
function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}
*/