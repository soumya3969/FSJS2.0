#include<stdio.h>
int main()
{
    int A[10][10],B[10][10],C[10][10],i,j,k,n;
    printf("Enter the Value Of N(N<=10): ");
    scanf("%d",&n);
    printf("Enter the Value Of matrix A:-");
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&A[i][j]);
        }
    }
    printf("Enter the Value Of matrix A:-");
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&B[i][j]);
        }
    }
    for(i=0;i<n;i++)
    {
        for ( j = 0; j < n; j++)
        {
            C[i][j]=0;
            for ( k = 0; k < n; k++)
            {
                C[i][j]+=A[i][k]*B[k][j];
            }
            
        }
        
    }
    printf("Product of two matrix are:-");
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("%d\t",C[i][j]);
        }
        printf("\n");
    }
    return 0;
}