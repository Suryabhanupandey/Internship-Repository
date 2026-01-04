package com.app;

abstract class Room
		{

			public abstract int calculateArea(int length, int breadth);
			public abstract int calculateVolume(int length, int breadth,int heigth);
		}
class Test extends Room
	{
		public int calculateArea(int lenght, int breadth)
				{

					return length *breadth;


				}
		public int calculateVolume(int lenght, int breadth,int heigth)
				{

					return length *breadth *heigth;


				}
	}



public class FirstActivity
		{

		public static void main(String args[])
			{
				Room obj = new Test();
				System.out.println("Area :: "+obj.calculateArea(10,20));
				System.out.println("Area :: "+obj.calculateVolume(10,20,30));



			}

		}