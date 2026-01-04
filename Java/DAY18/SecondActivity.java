package com.app;


import java.util.*;


public class SecondActivity
	{
	public static void main(String args[])
		{

		Scanner scan = new Scanner(System.in);
                System.out.println("Enter the number :: ");
		int age= scan.nextInt(); 

      	try{
		 if( age<18){
				throw new MyException();
		}
		else
			{
				System.out.println("Age has been Accepted");

			}

		}
		catch(MyException e){
			System.out.println("Exception raised"+e.getMessege());
		
			 
		}
}
	}