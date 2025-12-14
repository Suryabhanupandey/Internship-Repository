class Room{

		int length=10;
		static int breadth =20;

}

public class SecondActivity{

	public static void main(String args[])
		{

			Room obj = new Room();
			System.out.println("Length = "+obj.length);
			System.out.println("breadth = "+Room.breadth);
			System.out.println("Through Object name :: "+obj.breadth);
	

	
		}





}