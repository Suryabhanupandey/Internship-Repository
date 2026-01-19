package com.app;
import java.util.*;

public class FirstActivity {

    public static void main(String[] args)throws Exception
	 { 
        List list = new ArrayList();
        list.add("First");
        list.add("Second");
        list.add("Third");
        list.add("Fourth");
        list.add("Fifth");


 
        ListIterator litr = list.listIterator();

	System.out.println("----Forword ----- Travering--");

 
        while (litr.hasNext()) {
		System.out.println(litr.next());
		Thread.sleep(1000);
        }
	System.out.println("----Backword ----- Trave 	ring--");

 
        while (litr.hasPrevious()) {
		System.out.println(litr.previous());
		Thread.sleep(1000);
        }

    }
}
