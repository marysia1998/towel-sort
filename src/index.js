
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return []
  }
  let result = []
  for(let i= 0; i <matrix.length; i++) {
    if(i%2 == 0) {
      for(let y =0; y <matrix[i].length; y++) {
        result.push(matrix[i][y])
    }  
    } else {
       for(let y =matrix[i].length-1; y >=0; y--) {
        result.push(matrix[i][y]) 
    }
  } 
}
  return result;
}
