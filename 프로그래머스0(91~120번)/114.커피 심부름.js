// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181837

/*
각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요. 
*/

function solution(order) {
    var answer = 0;
    
    for (let i=0; i<order.length; i++) {
        if (order[i].includes('americano')) {
            answer += 4500; // 조건이 참일 때만 4500을 더함
        } else if (order[i].includes('cafelatte')) {
            answer += 5000;           
        } else {
            answer += 4500;
        }
    }
    
    return answer;
}

/*
다른 풀이
function solution(order) {
    const obj = {
      americano: 4500,
      cafelatte: 5000,
      anything: 4500
    }

    return order.reduce((acc, cur)=> {
      cur = cur.replace('ice', '')
      cur = cur.replace('hot', '')
      return acc + obj[cur]
    }, 0)
}
*/