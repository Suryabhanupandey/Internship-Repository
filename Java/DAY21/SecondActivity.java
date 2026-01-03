package com.app;

import java.io.*;
 

public class SecondActivity
{
    public static void main(String[] args)
    {
        try
        {
            InputStream ins = new FileInputStream("Source.txt");
            byte[] buffer = new byte[30];

		int noc = ins.read(buffer);
		System.out.println("no of Charcter r"+noc)

		for(byte b:buffer)
			{
				System.out.print((char)b);

			}
	}
catch(IOException e)
		{

			System.out.println("Error"+e.getMessege);
		}







            while ((ascii = ins.read()) != -1)
            {
                System.out.print((char) ascii);
            }

            ins.close();
        }
        catch (IOException e)
        {
            System.out.println("Reason of error : " + e.getMessage());
        }
    }
}
