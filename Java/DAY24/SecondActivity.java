package Com.app;

import java.util.Scanner;

public class SecondActivity {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.print("Enter 3 characters: ");
		String input = scan.nextLine();

		generatePermutations(input);
	}

	static void generatePermutations(String str) {
		int n = str.length();

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				for (int k = 0; k < n; k++) {

					if (i != j && j != k && i != k) {
						System.out.println("" + str.charAt(i)
								+ str.charAt(j)
								+ str.charAt(k));
					}
				}
			}
		}
	}
}
