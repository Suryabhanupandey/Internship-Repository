package com.app;

 class Room
	{
		public Room() throws Exception
			{

				System.out.println("Object of ROom has been Creates");

			}

	}



public class FirstActivity
	{
	public static void main(String args[])
		{

      	try{
		Room obj = new Room();

		}
		catch(Exception e){

		
			System.out.println("Object....CReated");
		}
}
	}