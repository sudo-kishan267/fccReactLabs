const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("Click 'Generate OTP' to get a code.");
  const [timeLeft, setTimeLeft] = useState(null);

  const handleClick = () => {
    
    // Secure logic for otp generation
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const newOtp = String(array[0] % 1000000).padStart(6, "0");
    
    setOtp(newOtp);
    setTimeLeft(3);
  };

  // The Timer
  
  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft === 0) return;

    const timerId = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <div>
      <div className="container">
        <h1 id="otp-title">OTP Generator</h1>
        <h2 id="otp-display">{otp}</h2>
        <p id="otp-timer" aria-live="polite">
          {timeLeft === null
            ? ""
            : timeLeft === 0
              ? "OTP expired. Click the button to generate a new OTP."
              : `Expires in: ${timeLeft} seconds`}
        </p>
        <button
          id="generate-otp-button"
          onClick={handleClick}
          disabled={timeLeft > 0}
        >
          Generate OTP
        </button>
      </div>
      <div class="copyright">
        Developed by<br></br> KGM💖
      </div>
    </div>
  );
};
