/*
훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

 */

 import java.io.BufferedReader;
 import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
 import java.io.IOException;
 
 public class Main {
 
     public static void main(String[] args) throws IOException {
        Integer[] a = new Integer[]{1, 2, 3}; // int[] 대신 Integer[] 사용
        Arrays.sort(a, (s1, s2) -> (s2.toString() + s1.toString()).compareTo(s1.toString() + s2.toString())); // 비교자 수정

        
        System.out.println(Arrays.toString(a));

     }
 }
 
 