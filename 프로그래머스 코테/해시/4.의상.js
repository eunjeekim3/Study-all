// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

/*
코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 
서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
*/

function solution(clothes) {
    const clothesMap = {};
    let answer = 1;

    clothes.forEach(arr => {    
        const [type, name] = arr;
        if(clothesMap.hasOwnProperty(name)) {	
            clothesMap[name]++;   
        }
        else {
            clothesMap[name] = 1;  
        }
    })

    for(const key in clothesMap) {
        answer *= (clothesMap[key] + 1);	
    }
    return answer - 1;
}

/*
다른 풀이
function solution(clothes) {
    let answer = 1
    let map = new Map()
    for(let i of clothes){
        map.has(i[1]) ? map.set(i[1], map.get(i[1])+1) : map.set(i[1],2)
    }
    for(let i of map){
        answer *=i[1]
    }
    return  answer-1
}
*/