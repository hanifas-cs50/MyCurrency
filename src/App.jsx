import dummyData from "./assets/test.json"
import { useState, useEffect } from "react";
import Content from './components/Content/Content';
import Header from './components/Header/Header';

const initialcurrency = [
  {
    id: 147,
    name: "US Dollar",
    short_code: "USD",
    symbol: "$",
  },
  {
    id: 64,
    name: "Indian Rupee",
    short_code: "INR",
    symbol: "₹",
  },
];

const API_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:5000";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(true);
  const [result, setResult] = useState({});

  const [amount, setAmount] = useState("100");
  const [selectInput1, setSelectInput1] = useState(initialcurrency.at(0));
  const [selectInput2, setSelectInput2] = useState(initialcurrency.at(1));

  const handleSwap = () => {
    let oldSelect = selectInput1;
    setSelectInput1(selectInput2);
    setSelectInput2(oldSelect);
    if (!amount) {
      setResult({});
    }
  }

  // fetch currencies
  useEffect(() => {
    async function getCurrencies() {
      try {
        const res = await fetch(`${API_URL}/currencies`);

        if (!res.ok) {
          throw new Error("Error Fetching Data ⛔");
        }
        const currencies = await res.json();
        if (currencies.meta.code === 503) {
          setStatus(false)
          throw new Error("Service Unavailable");
        }
        setData(currencies.response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    setError("");
    getCurrencies();
  }, []);


  const handleConversion = async () => {
    try {
      setLoading(true);
      const base = selectInput1.short_code.toUpperCase();
      const foreign = selectInput2.short_code.toUpperCase();
      const res = await fetch(
        `${API_URL}/convert?base=${base}&foreign=${foreign}&amount=${amount}`
      );
      if (!res.ok) {
        throw new Error("Conversion Failed ⛔");
      }
      const conversion = await res.json();
      setResult(conversion);
      setLoading(false);
    } catch (error) {
      console.log("Conversion Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='app'>
      <Header 
        status={status}
      />
      <Content
        data={dummyData}
        loading={loading}
        error={error}
        amount={amount}
        setAmount={setAmount}
        selectInput1={selectInput1}
        setSelectInput1={setSelectInput1}
        selectInput2={selectInput2}
        setSelectInput2={setSelectInput2}
        handleSwap={handleSwap}
        handleConversion={handleConversion}
        result={result}
      />
    </div>
  )
}

export default App
