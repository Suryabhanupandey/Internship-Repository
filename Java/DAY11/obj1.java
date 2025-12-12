class Room {
		int length ;
		int breadth ;

	Room(int l,int b)
		{
			length = l;
			breadth = b;
		}
	int calculateArea(){
				return length*breadth;
	
			}

}

public class obj1{

		public static void main(String args[])
			{
				Room obj = new Room(10,20);
				System.out.println("Length = " +obj.length);
				System.out.println("Breadth = " +obj.breadth);
				System.out.println("Area = " +obj.calculateArea());
				
			} 


}