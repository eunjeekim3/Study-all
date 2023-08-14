// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181860

/*
flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 
arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr, flag) {
    let X = [];
    flag.forEach((el, index) => {
        if(el) {
            for(let i = 0; i < arr[index] * 2; i++) {
               X.push(arr[index])
            }
        } else if (!el){
            for(let i = 0; i < arr[index]; i++){
                X.pop()    
            }
        }
    })

    return X
}

