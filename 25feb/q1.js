function countOccurrences(arr,n,x)
    {
        let res = 0;
        for (let i=0; i<n; i++)
        {
            if (x == arr[i])
                res++;
        }
        return res;
    }
     
    arr=[1,1,2,2,4,5,5,6,6,6,6,9,10,11]
    let  n = arr.length;
    let x = 2;
    console.log(countOccurrences(arr, n, x));