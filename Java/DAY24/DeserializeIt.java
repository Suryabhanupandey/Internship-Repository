package Com.app;

import java.io.*;



public class DeserializeIt
{
	
	public static void main(String args[]) throws Exception
		
		{

 	FileInputStream fis =new FileInputStream("Test.ser");
	ObjectInputStream ois = new ObjectInputStream(fis);

	Object o = ois.readObject();

	Room room = (Room)o;

	System.out.println("Length : "+room.length);
	
	System.out.println("Breadth : "+room.breadth);

		}


}