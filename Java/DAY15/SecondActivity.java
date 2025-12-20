class Room

{
	int length;
	int breadth;


 	Room(int l)
		{
 			length = 1;
			breadth = 1;
 
		}	
           Room(int l ,int b)

			{
				length = l;
				breadth =b;

			}
		int calculateArea()
			{
				return length*breadth;

			}

}






public class SecondActivity{
		public static void main(String args[])
			{
 				Room obj = new Room(10,20);
				System.out.println("Area = "+obj.calculateArea());

			}



}