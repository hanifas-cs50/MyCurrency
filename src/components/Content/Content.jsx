import FormInput from "./FormInput/FormInput";
import Result from "./Result/Result";

const Content = ({data}) => {
  return (
    <div className="container content">
      <FormInput data={data}/>
      <Result />
    </div>
  )
};

export default Content;