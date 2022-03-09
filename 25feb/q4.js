function find_index(arr, n, K)
{
     
    
    for(let i = 0; i < n; i++)
    
        if (arr[i] == K)
            return i;
  
        else if (arr[i] > K)
            return i;
  
    return n;
}
 
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let K = 9;
  
console.log(find_index(arr, n, K));