arrSimplenum=[];
count = process.argv[2];
let currentNumber = 2;
console.log ("Вот массив из ", count, " простых чисел") 
while (count != 0)
    {
      if (isPrime(currentNumber))
        {
          arrSimplenum.push(currentNumber);
          count--;
        }
    currentNumber++;    
    }
    console.log(arrSimplenum);    

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

 