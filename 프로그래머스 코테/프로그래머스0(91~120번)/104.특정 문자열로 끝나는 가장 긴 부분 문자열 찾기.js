// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181872

/*
문자열 myString과 pat가 주어집니다. 
myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
*/

function solution(myString, pat) {
    const searchIndex = myString.lastIndexOf(pat) // 가장 마지막 index를 찾음
    return myString.slice(0, searchIndex+pat.length) // 0부터 searchIndex + pat.length - 1까지
}


/*
다른 풀이
function solution(myString, pat) {
    const result = []
    myString.split("").forEach((a, i) => {
        const curStr = myString.slice(0, i+1)
        if(curStr.endsWith(pat)) {
            result.push(curStr)
        }
    })
    
    return result.sort((a, b) => b.length - a.length)[0]
}
*/