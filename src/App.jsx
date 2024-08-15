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
  const [loading, setLoading] = useState(false);

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

  return (
    <div className='app'>
      <Header />
      <Content data={data} />
    </div>
  )
}

export default App
