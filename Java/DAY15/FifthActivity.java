class Room

{
		int length;
		int breadth;

		Room()
			{

			this(11,12);

			}
		Room(int l,int b){

			length = l;
			breadth = b;

			}
	
		int calculateArea()
			{
				return length*length;

	 		}


}






public class FifthActivity{
		public static void main(String args[])
			{
 				Room obj = new Room();
				System.out.println("Area = "+obj.calculateArea());
 

 

			}



}