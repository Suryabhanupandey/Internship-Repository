package com.app;

import java.util.*;

public class SecondActivity {
    public static void main(String args[]) {

        int numerator = 10;

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the Denominator :: ");
        try {
        	int denominator = scan.nextInt();
                int result = numerator / denominator;
                System.out.println("The Result of Division is :: " + result);
        } 
        catch (ArithmeticException e) {
            System.out.println("Division by Zero is not allowed");
        } 
	catch(InputMismatchException e)
	 	{	
	
			System.out.println("Involid Input Occurred");
	
		}
	catch(Exception e)
		{
			System.out.println("fatal exception is coming .... devloper concer required");

		}

    }
}
