function populateDays() {
    var dayDropdown = document.getElementById('day');
    var monthDropdown = document.getElementById('month');
    var yearDropdown = document.getElementById('year');

    var selectedMonth = monthDropdown.value;
    var selectedYear = yearDropdown.value;


    dayDropdown.innerHTML = '';


    var lastDay = new Date(selectedYear, selectedMonth, 0).getDate();


    for (var i = 1; i <= lastDay; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        dayDropdown.add(option);
    }
}


function populateMonths() {
    var monthDropdown = document.getElementById('month');
    var months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];


    monthDropdown.innerHTML = '';

    for (var i = 0; i < months.length; i++) {
        var option = document.createElement('option');
        option.value = i + 1;
        option.text = months[i];
        monthDropdown.add(option);
    }

    monthDropdown.addEventListener('change', populateDays);
}
function populateYears() {
    var yearDropdown = document.getElementById('year');
    var currentYear = new Date().getFullYear();

    yearDropdown.innerHTML = '';

    for (var i = 1950; i <= currentYear; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearDropdown.add(option);
    }

    yearDropdown.addEventListener('change', populateDays);
}

populateDays();
populateMonths();
populateYears();

function getZodiacSign(day, month) {
    var zodiacSigns = [
        { sign: 'Capricorn', start: '01-01', end: '01-19' },
        { sign: 'Aquarius', start: '01-20', end: '02-18' },
        { sign: 'Pisces', start: '02-19', end: '03-20' },
        { sign: 'Aries', start: '03-21', end: '04-19' },
        { sign: 'Taurus', start: '04-20', end: '05-20' },
        { sign: 'Gemini', start: '05-21', end: '06-20' },
        { sign: 'Cancer', start: '06-21', end: '07-22' },
        { sign: 'Leo', start: '07-23', end: '08-22' },
        { sign: 'Virgo', start: '08-23', end: '09-22' },
        { sign: 'Libra ', start: '09-23', end: '10-22' },
        { sign: 'Scorpio', start: '10-23', end: '11-21' },
        { sign: 'Sagittarius ', start: '11-22', end: '12-21' },
        { sign: 'Capricorn', start: '12-22', end: '12-31' }
    ];

    var birthDate = new Date(`2000-${month}-${day}`);
    var formattedDate = `${(birthDate.getMonth() + 1).toString().padStart(2, '0')}-${birthDate.getDate().toString().padStart(2, '0')}`;

    for (var i = 0; i < zodiacSigns.length; i++) {
        var signRange = zodiacSigns[i];
        var startDate = new Date(`2000-${signRange.start}`);
        var endDate = new Date(`2000-${signRange.end}`);

        if (birthDate >= startDate && birthDate <= endDate) {
            return signRange.sign;
        }
    }

    return 'Unknown';
}

function displayZodiacSign() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var zodiacSign = getZodiacSign(day, month);

    var resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your Zodiac Sign is: ${zodiacSign}`;
}


document.getElementById('birthdateForm').addEventListener('submit', function (event) {
    event.preventDefault();


    displayZodiacSign();
});
