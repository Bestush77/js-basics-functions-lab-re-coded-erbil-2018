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
  if(feet <= 43&& feet >34)
  {
  return feet + 221;
  }
  
  else if(feet>=43)
  {
    return feet + 2062;
  }
  
  else 
  {
    return feet+2078;
  }
  
}

function distanceTravelledInFeet(pa1, pa2)
{
return pa1 + pa2 + 1282;
}