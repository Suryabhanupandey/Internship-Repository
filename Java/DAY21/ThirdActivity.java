package com.app;

import java.io.*;

public class ThirdActivity
{
    public static void main(String[] args)
    {
        try
        {
            InputStream ins = new FileInputStream("Source.txt");
            byte[] buffer = new byte[10];

            int noc = ins.read(buffer);
            System.out.println("No of Characters read: " + noc);

            for(int i = 0; i < noc; i++)
            {
                System.out.println(i + " --------> " + (char)buffer[i]);
            }

            ins.close();
        }
        catch(IOException e)
        {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
