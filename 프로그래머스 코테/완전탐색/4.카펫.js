// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

/*
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 
순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(brown, red) {
    var answer = [];
    var width = 0;
    var height = 1;

    while(true){
        //가로는 빨간 격자의 가로값+2
        width = red/height + 2;
        var edge = (width*2) + (height*2)
        if(edge == brown) {
            //모서리 갯수랑 갈색격자 수가 같으면 종료
            break;
        } else {
            height++;              
        }
    }
    answer = [width, height+2]            
    return answer;
}


/*
다른 풀이
function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    
    //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
    for(let height=3; height<=brown; height++){
        //임의의 높이로 나눌때 나머지가 없을경우만
        if(sum % height === 0){
            //가로길이
            let weight = sum / height;
            
            //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
            //결과가 yellow와 같다면 해당 높이와 길이 리턴
            if( (height-2) * (weight-2) === yellow){
                return [weight, height];
            }
        }
    }
    return answer;
}
*/