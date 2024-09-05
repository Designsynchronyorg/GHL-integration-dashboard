import { useEffect, useState } from 'react';

const useAnimatedNumber = (
    animatedValue: number,
    setAnimatedValue: React.Dispatch<React.SetStateAction<number>>,
    targetValue: number,
    duration = 2000, // Duration in ms
    intervalTime = 30, // Interval time for updates
    delay = 5 // Optional delay before starting the animation
) => {
    const [opacity, setOpacity] = useState(1); // State for managing opacity

    useEffect(() => {
        const startAnimation = () => {
            const steps = Math.floor(duration / intervalTime); // Total steps for the animation
            const increment = (targetValue - animatedValue) / steps; // Increment per step
            const opacityIncrement = 1 / (steps / 2); // Fade in/out over half the duration

            let currentStep = 0;
            let increasing = true;

            const interval = setInterval(() => {
                setAnimatedValue((prevValue) => {
                    currentStep++;
                    const nextValue = parseFloat((prevValue + increment).toFixed(3));

                    // Update opacity for fade-in and fade-out effect
                    setOpacity((prevOpacity) => {
                        if (increasing) {
                            if (prevOpacity >= 1) increasing = false;
                            return Math.min(prevOpacity + opacityIncrement, 1);
                        } else {
                            return Math.max(prevOpacity - opacityIncrement, 0);
                        }
                    });

                    // Stop the animation when the target value is reached or all steps are done
                    if (
                        currentStep >= steps ||
                        (increment > 0 && nextValue >= targetValue) ||
                        (increment < 0 && nextValue <= targetValue)
                    ) {
                        clearInterval(interval);
                        setOpacity(1); // Ensure opacity is fully visible at the end
                        return parseFloat(targetValue.toFixed(3)); // Ensure final value matches the target
                    }

                    return nextValue;
                });
            }, intervalTime);
        };

        // Start the animation after a delay
        const timeout = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [targetValue, animatedValue, duration, intervalTime, delay, setAnimatedValue]);

    return opacity;
};

export default useAnimatedNumber;
