// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181938?language=java

class Solution {
    public int solution(int a, int b) {
        String example1 = Integer.toString(a) + Integer.toString(b);
        int example2 = 2 * a * b;
        int example3 = Integer.parseInt(example1);

        return (example3 > example2) ? example3 : example2;
    }
}

/*
 * 다른 풀이
 * class Solution {
 * public int solution(int a, int b) {
 * int ab = Integer.parseInt(a + "" + b);
 * if(2 * a * b <= ab) {
 * return ab;
 * } else {
 * return 2 * a * b;
 * }
 * }
 * }
 */