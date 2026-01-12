package com.app;

import java.util.*;

class Task implements Runnable
{
	public void run()
		{
			for(int i=1;i<=5;i++)
				{
					if(i%4 ==0)
					{
				System.out.println(Thread.currentThread().getName()+"is Going to Yield");						
			Thread.yield();
					}

				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}
		}

}




public class ThirdActivity

{
	public static void main(String args[])
		{

	Task task = new Task();
	Thread t1 = new Thread(task);
	t1.setName("Surya");
	Thread t2 = new Thread(task);
	t2.setName("Bhanu");

	t1.start();

	t2.start();

	}
}