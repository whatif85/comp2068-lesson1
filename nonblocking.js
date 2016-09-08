// link to the node filesystem library to read the text files
var fs = require('fs');

// load food asynchronously
var food = fs.readFile('food.txt', 'utf-8', function(err, myFood)
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        // display food list when done
        console.log(myFood);
    }
});

// print food heading
console.log('FOOD');

// load drinks
var drinks = fs.readFile('drinks.txt', 'utf-8', function(err, myDrinks)
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log('\nDRINKS');
        console.log(myDrinks);
    }
});