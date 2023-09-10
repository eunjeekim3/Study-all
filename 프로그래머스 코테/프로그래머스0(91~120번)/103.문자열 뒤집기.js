// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181905

/*
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

let string1=my_string.slice(s,e+1)

    let reverseString=string1.split('').reverse().join('')
    let arr=my_string.split(string1)
    let answer=''
    if(arr.length>3){

        for(i=0; i<arr.length-1; i++){
            answer=answer+arr[i]+reverseString
        }
        answer=answer+arr[arr.length-1]
    }else{
        answer=arr[0]+reverseString+arr[1]
    }
    return answer

/*
다른 풀이
const slicedString = my_string.slice(s, e+1)
    const reverseStr = [...slicedString].reverse().join("")
    const splitMyString = [...my_string]
    splitMyString.splice(s, e-s+1, reverseStr)
    return splitMyString.join("")
*/