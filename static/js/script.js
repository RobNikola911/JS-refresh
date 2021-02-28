// Challenge 1: Your Age in Days

var currentYear = new Date().getFullYear();
function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var year = currentYear - birthYear;

    function countLeapYears(birthYear, currentYear) {
        var leapYearCount = 0;
        years = birthYear;
        function isLeapYear(years) {
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

function reset() {
    document.getElementById('ageInDays').remove();
}