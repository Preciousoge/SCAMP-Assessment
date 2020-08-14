var fibsequence = [0];
var previousNumber = 1;
var presentNumber = 0;
var sum = 0;
 
function fibonacciGenerator (n) {
  
    while (fibsequence.length < n) {
     sum = previousNumber + presentNumber;
     previousNumber = presentNumber;
     presentNumber = sum;
     fibsequence.push(sum);
     
    }
    return (fibsequence);
}
