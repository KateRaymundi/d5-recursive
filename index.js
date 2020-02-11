
function sumItems(array) {
  const sumItems = function (arr){
    sum = 0
    for(e of arr){
      if(Array.isArray(e)){
        sum += sumItems(e)
      }  
      else {
        sum += e
      }
    }
    return sum
  }
}

module.exports = sumItems;