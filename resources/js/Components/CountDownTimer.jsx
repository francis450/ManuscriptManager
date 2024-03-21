import React, { useState, useEffect } from 'react';


/**
 * 
 * @param {deadline} date
 * @returns count down from deadline to current time
 */
const CountdownTimer = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(deadline));
        }, 1000);

        return () => clearInterval(timer);
    }, [deadline]);

    function calculateTimeLeft(deadline) {
        const difference = +new Date(deadline) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const isMoreThanSixHoursLeft = () => {
        return timeLeft.days > 0 || timeLeft.hours > 6;
    };

    return (
        <div>
            {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
            {timeLeft.hours > 0 && <span>{timeLeft.hours}h </span>}
            {timeLeft.minutes > 0 && <span>{timeLeft.minutes}m </span>}
            {timeLeft.seconds > 0 && <span>{timeLeft.seconds}s</span>}
            <style jsx>{`
                .green-text {
                    color: green;
                }
                .red-text {
                    color: red;
                }
            `}</style>
            <style jsx>{`
                p {
                    color: ${isMoreThanSixHoursLeft() ? 'green' : 'red'};
                }
            `}</style>
        </div>
    );
};

export default CountdownTimer;
