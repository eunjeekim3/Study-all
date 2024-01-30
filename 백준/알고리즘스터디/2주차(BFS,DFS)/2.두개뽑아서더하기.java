// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 기초 DFS BFS문제 (프로그래머스)

// 풀이
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] numbers) {

        ArrayList<Integer> list = new ArrayList<Integer>(); // 중복 없이 저장할 리스트 선언

        for (int i = 0; i < numbers.length; i++) { // 배열 길이만큼 반복
            for (int j = i + 1; j < numbers.length; j++) {
                int a = numbers[i] + numbers[j]; // 두 원소를 더한 값을 저장
                if (list.indexOf(a) < 0) { // 중복 여부 확인. 찾을 수 있다면 -1반환할것임
                    list.add(a);
                }
            }
        }

        int[] answer = new int[list.size()]; // 중복되지 않은 합을 정수 배열로 변환하고 정렬
        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer); // 오름차순 정렬

        return answer;

    }
}

/*
 * hash 풀이
 * class Solution {
 * public int[] solution(int[] numbers) {
 * Set<Integer> set = new HashSet<>();
 * 
 * for(int i=0; i<numbers.length; i++) {
 * for(int j=i+1; j<numbers.length; j++) {
 * set.add(numbers[i] + numbers[j]);
 * }
 * }
 * 
 * return set.stream().sorted().mapToInt(Integer::intValue).toArray();
 * }
 * }
 */