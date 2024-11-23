'use client'

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [tickers, setTickers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tickers.length < 3 && inputValue) {
      setTickers([...tickers, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <main>
        <section className="action-panel">
          <form id="ticker-input-form" onSubmit={handleSubmit}>
            <label htmlFor="ticker-input"> Add up to 3 stock tickers below to get a super accurate stock predictions report👇 </label>
            <div className="form-input-control">
              <input
                type="text"
                id="ticker-input"
                placeholder="MSFT"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="add-ticker-btn">
                <Image src="/images/add.svg" className="add-ticker-svg" alt="add" width={20} height={20} />
              </button>
            </div>
          </form>
          <p className="ticker-choice-display">
            Your tickers: {tickers.join(", ")}
          </p>
          <button className="generate-report-btn" type="button" disabled={tickers.length === 0}>
            Generate Report
          </button>
          <p className="tag-line">Always correct 15% of the time!</p>
        </section>
        <section className="loading-panel">
          <Image src="/images/loader.svg" alt="loading" width={50} height={50} />
          <div id="api-message">Querying Stocks API...</div>
        </section>
        <section className="output-panel">
          <h2>Your Report 😜</h2>
        </section>
      </main>
      <footer>
        &copy; This is not real financial advice!
      </footer>
    </div>
  );
}

