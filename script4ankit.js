function calculateAge() {
    var birthdate = new Date('2004-09-14');
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
        var daysInLastMonth = (today - lastMonth) / (1000 * 60 * 60 * 24);
        days = daysInLastMonth;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}


window.onload = function () {
    var ageElement = document.getElementById('age');
    if (ageElement) {
        var age = calculateAge();
        ageElement.textContent = age.years + ' years, ' + age.months + ' months, ' + age.days + ' days';
    }
}


function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var question = document.querySelector('.faq-question[onclick="toggleAnswer(\'' + answerId + '\')"]');
    
    if (answer && question) {
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        question.parentNode.classList.toggle('open', answer.style.display === 'block');
    }
}
