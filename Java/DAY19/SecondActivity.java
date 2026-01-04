package com.app;
abstract class Room
		{

			public abstract int calculateArea(int length, int breadth);
				public void sayHello()
					{
						System.out.println("Hello ..... Room");
					}
 
		}

public class SecondActivity
		{

		public static void main(String args[])
			{
				Room obj = new Room()
		
				 {
				public int calculateArea(int length,int breadth)
					{
	
						return length*breadth;
					}
			
				}
			;
			
			System.out.println("Area = "+obj.calculateArea(10,20));
			obj.sayHello();



			}

		}