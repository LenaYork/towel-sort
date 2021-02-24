
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let towel = [];
    if ( !matrix || matrix.length === 0 ) {
        return towel;
    } 
     matrix.forEach( (item, i, arr) => {
        if (i % 2 != 0) {
            item = item.reverse();
            
        }
        return towel = towel.concat(item);
    } );
    return towel;
}
