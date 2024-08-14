import SelectInput from "../SelectInput/SelectInput";
import "./forminput.css"

const FormInput = () => {
  return (
    <form action="" className="">
      <div className="input-group">
        <label>Amount</label>
        <input type="number" name="amount" id="amount" />
      </div>
      <SelectInput />
      <SelectInput />
    </form>
  )
};

export default FormInput;