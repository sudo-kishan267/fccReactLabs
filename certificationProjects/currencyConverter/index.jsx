const { useState, useMemo, useRef, useEffect} = React;

export function CurrencyConverter() {
  //  As on 10/02/2026
  const inrBaseCurrencyMap = {
    INR: 1,

    USD: 0.012, // US Dollar
    EUR: 0.0111, // Euro
    GBP: 0.0096, // British Pound
    JPY: 1.73, // Japanese Yen
    AUD: 0.0189, // Australian Dollar
    CAD: 0.0181, // Canadian Dollar
    CHF: 0.0103, // Swiss Franc
    CNY: 0.086, // Chinese Yuan
    HKD: 0.094, // Hong Kong Dollar
    NZD: 0.0218, // New Zealand Dollar
  };

  const [input, setInput] = useState("");
  const [fromCurr, setFromCurr] = useState("INR");
  const [toCurr, setToCurr] = useState("USD");
  const [converted, setConverted] = useState("0.00");

  // Memoized FROM currency → INR

  const amountInINR = useMemo(() => {
    if (!input || input <= 0) return 0;
    return input / inrBaseCurrencyMap[fromCurr];
  }, [input, fromCurr]);

  useEffect(() => {
    if (!input || input <= 0) {
      setConverted("0.00");
      return;
    }
    const result = amountInINR * inrBaseCurrencyMap[toCurr];

    setConverted(result.toFixed(2));
  }, [input, fromCurr]);

  return (
    <div className="main">
      <div className="container">
        <h1>Globle Currency Converter</h1>

        <label htmlFor="number"></label>
        <input
          id="number"
          className="number-input"
          type="number"
          required
          min="0"
          placeholder="Enter Amount....!!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <label htmlFor="fromCurrency"></label>
        <select
          id="fromCurrency"
          value={fromCurr}
          className="select-from"
          name="fromCurrency"
          onChange={(e) => setFromCurr(e.target.value)}
        >
          <option value="INR">INR – Indian Rupee</option>
          <option value="USD">USD – US Dollar</option>
          <option value="EUR">EUR – Euro</option>
          <option value="GBP">GBP – British Pound</option>
          <option value="JPY">JPY – Japanese Yen</option>
          <option value="AUD">AUD – Australian Dollar</option>
          <option value="CAD">CAD – Canadian Dollar</option>
          <option value="CHF">CHF – Swiss Franc</option>
          <option value="CNY">CNY – Chinese Yuan</option>
          <option value="HKD">HKD – Hong Kong Dollar</option>
          <option value="NZD">NZD – New Zealand Dollar</option>
        </select>

        <label htmlFor="fromCurrency">↓</label>
        <select
          id="fromCurrency"
          value={toCurr}
          className="select-to"
          name="fromCurrency"
          onChange={(e) => setToCurr(e.target.value)}
        >
          <option value="USD">USD – US Dollar</option>
          <option value="EUR">EUR – Euro</option>
          <option value="GBP">GBP – British Pound</option>
          <option value="JPY">JPY – Japanese Yen</option>
          <option value="AUD">AUD – Australian Dollar</option>
          <option value="CAD">CAD – Canadian Dollar</option>
          <option value="CHF">CHF – Swiss Franc</option>
          <option value="CNY">CNY – Chinese Yuan</option>
          <option value="HKD">HKD – Hong Kong Dollar</option>
          <option value="NZD">NZD – New Zealand Dollar</option>
          <option value="INR">INR – Indian Rupee</option>
        </select>

        {converted && (
          <div className="result">
            <p className="conversion-result">
              {converted} <span>{toCurr}</span>
            </p>
          </div>
        )}
      </div>
      <div className="copyright">
        Developed by
        <br /> KGM💖
      </div>
    </div>
  );
}
