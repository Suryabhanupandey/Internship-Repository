package com.app;

class Room
{
	int lenght;
	public Room(int l)
	{
		length = l;
	}

	public String toString()
		{

		return"( Object of Room with length= "+length+")";
		}

}

public class FirstActivity
{
	public static void main(String args[])
		{

			Room obj = new Room(10);
			System.out.println(obj);
		}

}