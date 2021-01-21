function kilometerToMeter(numOfKilometer)
{
    if(numOfKilometer < 0)
    {
        console.log("Enter valid number and Try again.");
    }
    var result = numOfKilometer * 1000;
    return result;
}
var result1 = kilometerToMeter(10);
console.log(result1);


function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop)
{
    if(numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0)
    {
        console.log("Enter a valid number and try again.");
    }
    else
    {
        var totalbudget = (numOfWatch * 50 + numOfPhone * 100 + numOfLaptop * 500);
    }
    return totalbudget;
    
}
var result2 = budgetCalculator(2, 1, 3);
console.log(result2);


function hotelCost(numOfDays)
{
    if(numOfDays < 0)
    {
        console.log("Number of days can not be negative.");
    }
    else if(numOfDays >= 0 && numOfDays <= 10)
    {
        var totalCost = numOfDays * 100;
    }
    else if(numOfDays >= 11 && numOfDays <= 20)
    {
        var days = numOfDays - 10; // days = for remaining days after 10days
        var totalCost = (days * 80) + (10 * 100);
    }
    else if(numOfDays >= 21)
    {
        var days = numOfDays - 20;
        var totalCost = (days * 50) + (10 * 100) + (10 * 80);
    }
    return totalCost;
}

var result3 = hotelCost(21);
console.log(result3);

function megaFriend(name1, name2, name3)
{
    var length1 = name1.length;
    var length2 = name2.length;
    var length3 = name3.length;
    if(length1 >= length2 && length1 >= length3)
    {
        return name1;
    }
    else if(length2 >= length1 && length2 >= length3)
    {
        return name2;
    }
    else if(length3 >= length1 && length3 >= length2)
    {
        return name3;
    }
}
var friendsName = ["Avijitdas","Arijitdas","Archanadas"];
var result4 = megaFriend(friendsName[0], friendsName[1], friendsName[2]);
console.log(result4);
