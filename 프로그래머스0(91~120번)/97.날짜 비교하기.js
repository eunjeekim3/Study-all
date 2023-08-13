// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181838

/*
date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(date1, date2) {
    // 월은 실제 값보다 1 빼주어야함
    let newDate1 = new Date(date1[0], date1[1]-1, date1[2]);
    let newDate2 = new Date(date2[0], date2[1]-1, date2[2]);
    
    return newDate1 < newDate2 ? 1 : 0 ;
}

/*
다른 풀이
const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0
*/