// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181880

/*
정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 
만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    var answer = 0;

    for(let i = 0 ; i < num_list.length ; i++) {
        let num = num_list[i];
        while(num != 1) {
            num = num % 2 == 0 ? num /2 : (num - 1) / 2
            answer++;
        }
    }
    return answer;
}

/*
다른 풀이
function solution(num_list) {
    var answer = 0;
    const fun =(num)=>{
        let c=num;
        if(c===1) return c;
        if(c%2===0) {
            answer++
            c=c/2;
        }
        else if(c%2===1) {
            answer++
            c=(c-1)/2;
        }
        return fun(c)
    }
    for(let c of num_list){
       fun(c)
    }
    return answer;
}
*/