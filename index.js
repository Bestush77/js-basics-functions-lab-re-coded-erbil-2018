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
  if(pa2>pa1)
  {
    return (pa2 - pa1) *264 ;
  }
  else 
  {
    return (pa1-pa2)*264;
  }   
}

function calculatesFarePrice(pa1, pa2)
{
  if(pa1<pa2)
  {
  return 0; 
  }
  else if ((distanceTravelledInFeet(pa1,pa2))<=2000&& (distanceTravelledInFeet(pa1,pa2))>= 400 )
  {
    return  distanceTravelledInFeet(pa1,pa2) *2;
    
  }
}