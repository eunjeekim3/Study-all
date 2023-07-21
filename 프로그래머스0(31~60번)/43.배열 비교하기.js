// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

/*
두 정수 배열 arr1과 arr2가 주어질 때, 
위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, 
arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        if(arr1.reduce((a,b)=>a+b)>arr2.reduce((a,b)=>a+b)){
            return 1
        }else if(arr1.reduce((a,b)=>a+b)===arr2.reduce((a,b)=>a+b)){
            return 0
        }else return -1
    }else if(arr1.length > arr2.length){
        return 1
    }else if(arr1.length < arr2.length){
        return -1
    }
}
