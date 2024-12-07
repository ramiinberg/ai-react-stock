"use client";

import Image from "next/image";
import { useState } from "react";
import add from "./images/add.svg";
import loader from "./images/loader.svg";
import { DisabledButton } from "@/components/Buttons";

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
      <header className="flex justify-center max-w-md p-4 mx-auto bg-black">
        <h1>Stock Prediction App</h1>
      </header>
      <main className="flex justify-center">
        <section className="flex flex-col justify-around items-center h-[350px] my-6">
          <form
            className="w-[360px] flex flex-col items-center"
            id="ticker-input-form"
            onSubmit={handleSubmit}
          >
            <label
              className="text-center p-[.43em] text-[15px] mb-4 w-4/5"
              htmlFor="ticker-input"
            >
              {" "}
              Add up to 3 stock tickers below to get a super accurate stock
              predictions report👇{" "}
            </label>
            <div className="flex w-70">
              <input
                className="p-[1em] border-2 border-black border-r-0"
                type="text"
                id="ticker-input"
                placeholder="MSFT"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="flex items-center bg-white text-[3em] p-0 px-[0.35em] cursor-pointer border-2 add-ticker-btn"
              >
                <Image
                  src={add}
                  className="w-[14px]"
                  alt="add"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </form>
          <p className="flex items-center h-[3em]">
            Your tickers: {tickers.join(", ")}
          </p>
          <DisabledButton
            className="w-[70%] py-4 px-6 cursor-pointer border-2 border-black bg-[#46ff90] uppercase font-medium tracking-wide text-[105%]"
            disabled={tickers.length === 0}
          >
            Generate Report
          </DisabledButton>
          <p className="text-sm font-bold font-comic">
            Always correct 15% of the time!
          </p>
        </section>
        <section className="hidden flex-col justify-around h-[400px] text-center">
          <Image src={loader} alt="loading" width={50} height={50} />
          <div id="api-message">Querying Stocks API...</div>
        </section>
        <section className="output-panel hidden flex-col justify-start border-2 p-4 px-8 items-center h-[350px] my-6">
          <h2 className="items-center font-normal -mt-[26px] bg-customGray p-0 px-[10px]">
            Your Report 😜
          </h2>
        </section>
      </main>
      <footer className="text-[14px] text-center">
        &copy; This is not real financial advice!
      </footer>
    </div>
  );
}
