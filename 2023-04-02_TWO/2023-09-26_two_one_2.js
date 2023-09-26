count = process.argv[2];

console.log ("Вот массив из ", count, " простых чисел") 
console.log(isSimplenum(count));    

function isSimplenum(n)
  {
  arrSimplenum=[];  
  let currentNumber = 2;
  while (n != 0)
    {
    if (isPrime(currentNumber))
     {
      arrSimplenum.push(currentNumber);
      n--;
     }
    currentNumber++;    
    }
  return arrSimplenum;  
  }
function isPrime(n) 
  {
  for (let i = 2; i <= n/2; i++)
    {
      if (n % i == 0)
       {
        return false;
       }
    }
    return true;
  }
 