package com.app;

import java.util.*;

public class FirstActivity {
    public static void main(String args[]) {

        int numerator = 10;

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the Denominator :: ");
        	int denominator = scan.nextInt();

        try {
                int result = numerator / denominator;
                System.out.println("The Result of Division is :: " + result);
        } 
        catch (ArithmeticException e) {
            System.out.println("Division by Zero is not allowed");
        } 
	
	finally
		{
			System.out.println("------Finally Block Executed!---------");

		}

    }
}
