import { useState, useEffect } from "react"

const Stopwatch = () => {
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            setTime((prev) => {
                let newTime = { ...prev }
                // checking if we need to increase the seconds
                if (newTime.seconds < 59) newTime.seconds += 1;
                else {
                    newTime.minutes += 1;
                    newTime.seconds = 0
                }

                if (time.minutes === 60) {
                    newTime.minutes = 0;
                    newTime.hours += 1;
                }

                if (newTime.hours === 24) {
                    setIsRunning(false);
                    setTime({
                        seconds: 0,
                        minutes: 0,
                        hours: 0,
                    })
                }

                return newTime;
            })
        }

        let intervalId;
        if (isRunning) {
            intervalId = setInterval(updateTime, 1000);
        }

        return () => clearInterval(intervalId);
    }, [time, isRunning])

    const togglePause = () => {
        setIsRunning(!isRunning);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTime({
            seconds: 0,
            minutes: 0,
            hours: 0,
        })
    }

    return (
        <div className="my-2">
            <h1 className="text-center text-white text-5xl capitalize"> React Stopwatch</h1>
            <div className="grid grid-cols-3 p-8 mx-auto gap-x-5 text-[50px] mt-5">
                <div className="border border-red-600 text-center">
                    <span>{`${time.hours < 10 ? 0 : ""}${time.hours}`}</span>
                </div>
                <div className="border border-red-600 text-center">
                    <span>{`${time.minutes < 10 ? 0 : ""}${time.minutes}`}</span>
                </div>
                <div className="border border-red-600 text-center">
                    <span>{`${time.seconds < 10 ? 0 : ""}${time.seconds}`}</span>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <button className="bg-white p-2 w-[150px]" onClick={togglePause}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button className="bg-white p-2 w-[150px]" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Stopwatch