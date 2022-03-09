function first(arr,low,high,x,n)
{
    if (high >= low) {
        
        let mid = low + Math.floor((high - low) / 2);

        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
            return mid;
        if (x > arr[mid])
            return first(arr, (mid + 1), high,x, n);
        return first(arr, low, (mid - 1), x, n);
    }
    return -1;
}
 

function sortAccording(A1,A2,m,n)
{
    let temp=[];
    let visited=[];
     
    for (let i = 0; i < m; i++)
    {
        temp[i] = A1[i];
        visited[i] = 0;
    }
     
    
    temp.sort(function(a, b){return a-b});
     
  
    let ind = 0;
   
    for (let i = 0; i < n; i++)
    {
        
        let f = first(temp, 0, m - 1, A2[i], m);
        
        if (f == -1)
        {
            continue;
        }
        for (let j = f; (j < m && temp[j] == A2[i]);j++)
        {
            A1[ind++] = temp[j];
            visited[j] = 1;
        }
    }
   
    for (let i = 0; i < m; i++)
    {
        if (visited[i] == 0)
            A1[ind++] = temp[i];
    }
     
}
 
function printArray(arr,n)
{
    for (let i = 0; i < n; i++)
    {
        console.log(arr[i] + " ");
         
    }
    
}
 
let A1=[2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8 ];
let A2=[2, 1, 8, 3 ];
 
let m = A1.length;
let n = A2.length;
console.log("Sorted array is ");
 
sortAccording(A1, A2, m, n);
printArray(A1, m);
 
