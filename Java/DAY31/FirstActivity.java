package com.app;
import java.util.*;


class Room implements Comparable<Room>
{

	int length;
	Room(int l)
	{
		length = l;
	}
public String toString()
	{
	return "(Object of Room with length"+length+")";

	}	

public int compareTo(Room o)
{
return this.length - o.length;

}


}


public class FirstActivity
{
	public static void main(String args[])
	{
 		Room  obj  =new Room(50);
 		Room  obj1  =new Room(40);
 		Room  obj2 =new Room(30);
 		Room  obj3 =new Room(20);
  
		SortedSet<Room>sset = new TreeSet<Room>();

		sset.add(obj);
		sset.add(obj1);
		sset.add(obj2);
		sset.add(obj3);

	System.out.println("Elelment in Sorted set"+sset);

		Iterator itr = sset.iterator();
		while(itr.hasNext())
		{
			System.out.println(itr.next());
		}


	}
}