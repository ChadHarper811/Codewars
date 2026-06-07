// **Instructions**
// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

// starting code
// function getMax1()
// {
//   var max = 
//   {
//    name: 'Max Headroom'
//   }
//   return max;
// }

// function getMax2()
// {
//   return
//   {
//     name: 'Max Headroom'
//   }
// }

// solution code
function getMax1()
{
  let max = { name: 'Max Headroom' }
  return max;
}

function getMax2()
{
  return { name: 'Max Headroom'}
}


module.exports = { getMax1, getMax2};