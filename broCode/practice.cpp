#include <stdio.h>

int main() {
    int num, i, j,k,n,l;

    // Input the number
    printf("Enter the Number: ");
    scanf("%d", &num);
    
    if(num%2==0 || num==1 || num<0)
    return 0;


    n = num;
    num = (num/2) + 1;
    
    
    
    for (i = 0; i < num; i++) {
       
        for (j = 0; j < num - i - 1; j++) {
            printf(" ");
        }
       
        for (j = 0; j < i + 1; j++) {
            printf("*");
        }
        
        
        if(n==3)
        {
            
            for(l=0;l<(num/2+1) + (num+1);l++)
            {
            if(i==n/2)
            printf("e");
            else
            printf(" ");
            
            if(l+1== (num/2+1)+(num+1))
            printf("*");
            }
            
        }
        else{
            
        for(k=0;k<(num/2+1)+(num+2);k++)
        {
            
            
            if(i==n/2)
            printf("e");
            else
            printf(" ");
            
            if(k+1 == (num/2+1)+(num+2))
            printf("*");
        }
        
        }
        
        printf("\n");
    }
   
    for (i = 1; i < num; i++) {
        
        for (j = 0; j < i; j++) {
            printf(" ");
        }
        
        for (j = 0; j < num - i; j++) {
            printf("*");
        }
        
        
        if(n==3)
        {
            for(k=0;k<(num/2+1)+(num+2);k++)
        {
            
            
            if(k+1 == (num/2+1)+(num+2))
            printf("*");
            else
            printf(" ");
        }
        }
        else{
            
        for(k=0;k<(num/2+1)+(num+2);k++)
        {
            
            if(k+1 == (num/2+1)+(num+2))
            printf(" *");
            else
            printf(" ");
        }
        }
        
        printf("\n");
    }

    return 0;
}
