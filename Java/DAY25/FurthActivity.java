package com.app;


public class FActivity
{

	public static void main(String args[])
		{
		Runnable task = new Runnable()
			{

	public void run()
		{
			for(int i=1;i<=10;i++)
				{
				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}
		}
}

;

 			Thread t1 = new Thread(task);
			t1.setName("Surya");

			Thread t2 = new Thread(task);
			t2.setName("Bhanu");

			t1.start();
t2.start();

		}

}