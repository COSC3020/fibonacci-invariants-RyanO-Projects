function fib(n) {
    // create new array of size n+1
    var arr = new Array(n+1);

    // end when iteration == n+1

    fibonacci(0, n, arr);
    return arr;
}

function fibonacci(i, ceiling, arr)
{
    // base cases (i=0) = 0 and (i=1) = 1
    if( i == 0 )
    {
        arr[0] = 0;
        fibonacci(i+1, ceiling, arr);
    }

    else if( i == 1 && i <= ceiling)
    {
        arr[1] = 1;
        fibonacci(i+1, ceiling, arr);
    }

    // No longer base cases, sum prior elements and move to next element.
    else if( i <= ceiling )
    {
        arr[i] = arr[i-1] + arr[i-2];
        fibonacci(i+1, ceiling, arr);
    }

    return;
}