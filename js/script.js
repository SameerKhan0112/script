
// I will make an array with a list of different movies
var superheroArray = ['Martian','Flash','Batman','Cyborg'];

// This Variable will find the first item in my Syperhero Array
var firstHero = superheroArray [0];

// I will use if else conditional to see if the first
// item in my superheroArray is Batman.
// We will also check whether the first superhero is Aquaman.
if (firstHero == 'Batman'){
  console.log('The first Superhero is Batman.');
}
else if (superheroArray[2] == 'Batman')
{
  console.log('The third Superhero is Aquaman.');
}
else {
  console.log('The first Superhero is not Batman.');
  console.log('Actually, the first Superhero is '+firstHero);
}
