#include <stdio.h>
#include <stdlib.h>


void findDifference(int arr[], int size, int num) {
    int flag = 0;

    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (abs(arr[i] - arr[j]) == num) {
                printf("(%d, %d)\n", arr[i], arr[j]);
                flag = 1;
            }
        }
    }

    if (flag == 0) {
        printf("No pairs found\n"); 
    }
}

int main() {
    int arr[] = {2, 4, 5, 7, 34, 65, 43, 6};  
    int size = sizeof(arr) / sizeof(arr[0]); 
    int num;

    printf("Enter the difference: ");
    scanf("%d", &num);

    findDifference(arr, size, num);

    return 0;
}
