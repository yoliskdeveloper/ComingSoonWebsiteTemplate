// initial countdown variable
const countdown = document.querySelector('.countdown');

// initial launch date in milisecond
const launchDate = new Date('Jan 1, 2020 13:00:00').getTime();

// update time every second function
const intvl = setInterval(() => {
    
    // Get today date and time in milisecond
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    // Time Calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // Conditional if countdown has passed the actual time
    if (distance < 0) {

        // stop the countdown
        clearInterval(intvl);

        // style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched';
    }
    
}, 1000);