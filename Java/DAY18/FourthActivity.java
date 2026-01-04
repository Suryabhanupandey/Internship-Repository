package com.app;

import java.util.*;

class Room
	{
		boolean isPali(int num)
			{
				int temp =num;
				int reverse =0;
				
			while(temp >0)
				{
					int rem =temp%10;
					reverse = reverse*10+rem;
					temp = temp /10;

				}
			return reverse == num;

			}
		   boolean isPrime(int number) {

       			 if (number <= 1) {
           			 return false;
       				 }	

       			 for (int i = 2; i <= number / 2; i++) {
            			if (number % i == 0) {
             			   return false;
           			 }
       			 }
      			  return true;
 			   }

		

	}


public class FourthActivity

		{

		public static void main(String args[])

		{

			Room obj =new Room();
			Scanner scan = new Scanner(System.in);
			System.out.println("Enter a number");
			int value = scan.nextInt();

			if(obj.isPrime(value))
				{
						System.out.println("This is a prime number :: True");
				}
				else{

					System.out.println("This is not a prime number ");
				    }


		}


		}