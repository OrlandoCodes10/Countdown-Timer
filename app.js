const newYear = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    console.log(newYearsDate - currentDate);
}

// initial call
countdown();

setInterval(countdown, 1000);