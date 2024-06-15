// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

class Solution {
  public int solution(String[] babbling) {
      String[] str = {"aya", "ye", "woo", "ma"};
      int answer = 0;
      
      for(int i=0; i<babbling.length; i++){
          for(int j=0; j<str.length; j++){
              babbling[i] = babbling[i].replace(str[j], " ");
          }
          
          if(babbling[i].trim().length() == 0){
              answer++;
          }
      }
      return answer;
  }
}