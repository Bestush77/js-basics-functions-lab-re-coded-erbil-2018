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
  if(feet <= 43)
  {
  return feet + 221;
  }
  
  else if(feet>=43)
  {
    return feet + 2062;
  }
}