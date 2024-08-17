import { useEffect } from "react";
import FormInput from "./FormInput/FormInput";
import Result from "./Result/Result";

const Content = ({
  data,
  loading,
  error,
  amount,
  setAmount,
  selectInput1,
  setSelectInput1,
  selectInput2,
  setSelectInput2,
  handleSwap,
  handleConversion,
  result
}) => {
  // perform conversion when base or foreign currency changes
  useEffect(() => {
    if (amount > 0 && result) {
      handleConversion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInput1, selectInput2]);

  return (
    <div className="container content">
      <FormInput
        data={data}
        amount={amount}
        setAmount={setAmount}
        selectInput1={selectInput1}
        setSelectInput1={setSelectInput1}
        selectInput2={selectInput2}
        setSelectInput2={setSelectInput2}
        handleSwap={handleSwap}
        handleConversion={handleConversion}
      />
      <Result
        amount={amount}
        selectInput1={selectInput1}
        selectInput2={selectInput2}
        loading={loading}
        result={result}
      />
    </div>
  )
};

export default Content;