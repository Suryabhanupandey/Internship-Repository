package com.app;


public class FourthActivity
{

	public static void main(String args[])
		{
		Thread t = new Thread(new Runnable()
			{

	public void run()
		{
			for(int i=1;i<=10;i++)
				{
				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}
		}
}

);
			t.start();

   Runnable task =() ->
 {

			for(int i=1;i<=10;i++)
				{
				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}



};

Thread t2 = new Thread(task);
t2.start();






 	 

		}

}