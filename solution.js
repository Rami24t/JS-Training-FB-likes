function likes(names) {
  return names ? (names.length==1 ? names[0]+ " likes this" : (names.length ==2 ? names.join(' and ') + 
  ' like this' : (names.length==3? names[0] + ', ' + names[1] + ' and '+names[2] +' like this' : names.length>3 ? names[0]+', '+
   names[1]+' and '+(names.length-2)+ ' others like this': "no one likes this"))): "no one likes this"
}

Improved/refractored solution: 

function likes(names = []) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

// Examples/Tests
// likes([]), 
// returns: 'no one likes this'
// likes(['Peter']), 
// returns: 'Peter likes this'
// likes(['Jacob', 'Alex']), 
// returns: 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']), 
// returns: 'Max, John and Mark like this'
// likes(['Alex', 'Jacob', 'Mark', 'Max']), 
// returns: 'Alex, Jacob and 2 others like this'
// likes(['Alex', 'Jacob', 'Mark', 'Max','Kristie','Christie','Lewak','Brita','Erico', 'Dani']), 
// returns: 'Alex, Jacob and 8 others like this'
