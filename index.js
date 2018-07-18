// Code your solution in this file!
function distanceFromHqInBlocks (blocknumber) 
{
  if (blocknumber > 42)
  {
    return blocknumber - 42;
  }
 else {
   return 42- blocknumber;
 }
  
}


function distanceFromHqInFeet (feet) 
{
 return distanceFromHqInBlocks(feet)* 264;
  
}

function distanceTravelledInFeet(pa1, pa2)
{
return (pa2 - pa1) *264 ;
}