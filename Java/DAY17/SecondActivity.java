package com.app;

import java.util.*;

public class SecondActivity {
    public static void main(String args[]) {

        int numerator = 10;

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the Denominator :: ");
        	int denominator = scan.nextInt();

        try {
                int result = numerator / denominator;
                System.out.println("The Result of Division is :: " + result);
        } 
        
	
	finally
		{
			System.out.println("------Finally Block Executed!---------");

		}

    }
}
