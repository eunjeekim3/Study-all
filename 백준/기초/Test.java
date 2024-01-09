
// public class Test {
// public static void main(String[] args) {
// int dan = 2; // 단 수

// while (dan <= 9) {
// System.out.println(dan + "단");

// int multiplier = 1; // 곱해지는 숫자 1로 초기화
// while (multiplier <= 9) {
// int result = dan * multiplier;
// System.out.println(dan + " * " + multiplier + " = " + result);
// multiplier++;
// }

// System.out.println();
// dan += 2;
// }
// }
// }

// public class Test {
// public static void main(String[] args) {
// int lotto[] = new int[6]; // 크기가 6인 정수 배열

// System.out.print("로또번호 : ");

// for (int i = 0; i < lotto.length; i++) {
// int num = (int) (Math.random() * 45) + 1; // 1이상 46미만
// lotto[i] = num; // 난수를 배열에 할당
// for (int j = 0; j < i; j++) { // 현재 번호가 이전번호랑 중복되는지 확인
// if (lotto[i] == lotto[j]) {
// i--; // 중복을 피하기위해 현재 인덱스에서 --
// break;
// }
// }
// System.out.print(lotto[i] + " ");
// }
// }
// }
