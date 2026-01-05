package Com.app;

import java.io.*;


public class SerializeIt
{
	public static void main(String args[]) throws Exception
		{
			Room obj = new Room(10,20);

			ObjectOutputStream ous = new ObjectOutputStream(new FileOutputStream("Test.ser"));

			ous.writeObject(obj);
			ous.close();
		
			System.out.println("Object Serialization");

		}

}