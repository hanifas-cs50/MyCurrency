import SelectInput from "./SelectInput";

const FormInput = ({
  data,
  amount,
  setAmount,
  selectInput1,
  setSelectInput1,
  selectInput2,
  setSelectInput2,
  handleSwap,
  handleConversion
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleConversion();
  }

  const handleAmount = (input) => {
    if ((input === "" || /^[0-9.]*$/.test(input.toString())) && input.length <= 20) {
      setAmount(input);
    }
    return;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <label>Amount</label>
        <input type="number" name="amount" id="amount" value={amount} onChange={(e) => handleAmount(e.target.value)} />
      </div>
      <SelectInput data={data} initialData={selectInput1} setSelect={setSelectInput1} purpose={"Base Currency"} />

      <div className="swap">
        <span className="line"></span>
        <button onClick={() => handleSwap()} className="swap-button" type="button">
          Swap
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 swap-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>

      <SelectInput data={data} initialData={selectInput2} setSelect={setSelectInput2} purpose={"Foreign Currency"} />
      <button className="convert-button" type="submit">
        Convert
        <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>
      </button>
    </form>
  )
};

export default FormInput;