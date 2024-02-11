// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181897

/*
올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, slicer, num_list) {
    const [a, b, c] = [slicer[0], slicer[1], slicer[2]]
    const ans = []
    if (n === 1) return num_list.slice(0, b+1)
    if (n === 2) return num_list.slice(a)
    if (n === 3) return num_list.slice(a, b+1)
    if (n === 4){
        for (let i=a; i<=b; i+= c){
            ans.push(num_list[i])
        }
        return ans
    }
}

/*
다른 풀이
function solution(n, slicer, num_list) {
    let [a, b, c] = [...slicer];

    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}
*/