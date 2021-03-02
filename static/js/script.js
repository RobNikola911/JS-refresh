// Challenge 1: Your Age in Days

var currentYear = new Date().getFullYear();
var ageInDays = () => {
    var birthYear = prompt('What year were you born?');
    var year = currentYear - birthYear;

    var countLeapYears = (birthYear, currentYear) => {
        var leapYearCount = 0;
        years = birthYear;
        var isLeapYear = (years) => {
            return ((years % 4 == 0) && (years % 100 != 0)) || (years % 400 == 0);
        }

        for (i = birthYear; i <= currentYear; i++) {
            if (isLeapYear(i)) {
                leapYearCount++;
            }
        }
        return leapYearCount;
    }

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + (year * 365 + countLeapYears(birthYear, currentYear)) + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(year * 365 + countLeapYears(birthYear, currentYear));
}

const reset = () => {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

const generateCat = () => {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}