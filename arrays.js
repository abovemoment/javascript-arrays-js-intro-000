var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var cities = ["New York", "San Francisco"];

var newCities = ["Philadelphia", ...cities];

function addElementToBeginningOfArray(a, b){
  var c = [b,...a];
  return c;

}

function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b){
  var c = [...a, b];
  return c;
}

function destructivelyAddElementToEndOfArray(a, b){
  a.push(b);
  return a;
}

function accessElementInArray(a, b){
  return a[b];
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  var c = a.slice(1);
  return c;
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a){
  var c = a.slice(0,a.length -1 );
  return c;
}
