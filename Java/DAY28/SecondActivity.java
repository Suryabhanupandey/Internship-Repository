package com.app;
import java.util.*;

public class SecondActivity

{
	public static void main(String args[])
		{
			Collection c =new HashSet();
			c.add("Frist");
			c.add("Second");
			c.add("Third");
			c.add("Fourth");

		System.out.println("Element is Collection :: "+c);
	
		c.clear();
		System.out.println("Element is Collection :: "+c);

		System.out.println("is third available is collection :: "+c.contains("Fifth"));
System.out.println("Is current  collection is empty :: "+c.isEmpty());


		
		}


}