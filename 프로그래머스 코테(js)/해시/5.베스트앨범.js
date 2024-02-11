// 레벨 3
// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

/*
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 
return 하도록 solution 함수를 완성하세요.
*/

// 풀이
function solution(genres, plays) {
    
    let answer = [];
  
    // 1번 과정
    let playCntByGenre={}
    for(let i=0;i<genres.length;i++){
        playCntByGenre[genres[i]]=playCntByGenre[genres[i]] ? playCntByGenre[genres[i]]+plays[i] : plays[i]
    }
  
    // 재생횟수로 내림차순 정렬하기 위해, [키,밸류]로
    let keyValueArr=Object.entries(playCntByGenre)
    keyValueArr.sort((a,b)=>b[1]-a[1]);
    // 정렬함수의 compareFunc 작성시, return 값이 양수면 앞뒤순서가 바뀜

    // 2번 과정
    let allInfoObj=genres.map((g,i)=>({
        genre:g,
        index:i,
        playCnt:plays[i]
    })) 
    
    // 3번 과정
    keyValueArr.forEach((k,i)=>{
        let current=[];
        for(let j=0;j<allInfoObj.length;j++){
            if(k[0]===allInfoObj[j].genre){
                current.push(allInfoObj[j]);
            }
        }
        current.sort((a,b)=>b.playCnt-a.playCnt);
        current.forEach((c,i)=>{
            if(i<2){
             // index가 2보다 작을때까지만 answer.push 수행
            answer.push(c.index)
            }        
        })
    })
    
    return answer;
}