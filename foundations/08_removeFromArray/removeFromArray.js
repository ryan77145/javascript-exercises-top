const removeFromArray = function(arr, ...index) {
    let newArray = [];
    arr.forEach((item) => {
        if (!index.includes(item)) {
            newArray.push(item);
        }
}); 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
