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
  return (
    <div className='app'>
      <Header />
      <Content />
    </div>
  )
}

export default App
