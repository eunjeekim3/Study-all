// 레벨 1
// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
    // 잃어버린 학생수. lost배열에는 있지만 reserve배열에는 없는 학생의 배열
    let lost_student = lost.filter(v => !reserve.includes(v)).sort(); 
    // 빌려주는 학생 수
    let reserve_student = reserve.filter(v => !lost.includes(v)).sort();
  
    for (let i = 0; i < reserve_student.length; i++) {
      if (lost_student.includes(reserve_student[i] - 1)) {
        lost_student = lost_student.filter(v => v !== reserve_student[i] - 1);
      } else if (lost_student.includes(reserve_student[i] + 1)) {
        lost_student = lost_student.filter(v => v !== reserve_student[i] + 1);
      }
    }
  
    return n - lost_student.length;
  }