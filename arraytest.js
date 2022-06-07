// Can store several types of data:

//let array = ['string', [array1], [array2], [array3], [array4]];
//console.log(array[3]);


//For each
//array.forEach(function(item, index){console.log(item, index)});

//Add item at the final index of the array:
//array.push('novo-item');
//console.log(array);

//Remove item in the final index of the array
//array.pop();
//console.log(array);

//Remove item at the beggining at the array:
//array.shift(); 
//console.log(array);

//array.unshift('new item at the beggining');
//console.log(array);

//array.indexOf();
//console.log(array.indexOf());

//Remove or replace an item for the index
//array.splice(0, 3);
//console.log(array);

//array.slice();
//console.log.(array);

//Add only the 3 first elements at index [0, 1, 2]:
//let novoarray = array.slice(0, 3);
//console.log(novoarray);

let object = {String: 'String', number: 1, boolean: true, array: ["array"], objecIntern: {objecIntern: 'objecIntern'}};

console.log(object.objecIntern);
var string = object.string;
console.log(string);
var arrayIntern = object.array;
console.log(arrayIntern);