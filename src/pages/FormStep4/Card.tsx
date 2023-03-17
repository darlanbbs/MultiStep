import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import * as D from '../GlobalItens/StyleGlobalForm'

type Props = {
  title: string;
  type: string;
  price: string;
  change: string;
};

const Card = ({ title, type, price, change }: Props) => {
  const navigate = useNavigate()
  const { formData, state } = useForm();

  const price1 = state.type === "Yearly" ? "$10/Yr" : "$01/Mo";
  const price2 = state.type === "Yearly" ? "$20/Yr" : "$02/Mo";

  
  const [result, setResult] = useState<any>(0);
  useEffect(() => {
    function getPriceValue(priceString: any) {
      let priceWithoutDollar = priceString.replace("$", "");

      let priceWithoutSlash = priceWithoutDollar.replace("/", "");

      let priceWithoutUnit = priceWithoutSlash
        .replace("mo", "")
        .replace("yr", "");

      let priceValue = parseFloat(priceWithoutUnit);

      return priceValue;
    }

    const newPrice = getPriceValue(price);
    const newPrice1 = getPriceValue(price1);
    const newPrice2 = getPriceValue(price2);



    
    let newResult = newPrice;
    if (formData.data.option1) {
      newResult += newPrice1;
    }
    if (formData.data.option2) {
      newResult += newPrice2;
    }
    if (formData.data.option3) {
      newResult += newPrice2;
    }
    setResult(newResult);


  }, [formData]);


  return (
    <>
    <C.result>

      <C.finalArea>
        <C.finalAreaItens>
          <C.firstItem>
            {title}({type})<br></br>
            <Link to={change}>change</Link>
          </C.firstItem>
          <C.firstItem>{price}</C.firstItem>
        </C.finalAreaItens>
        <C.hr></C.hr>
        {formData.data.option1 && (
          <C.finalAreaItens>
            <C.Itens>Online service</C.Itens>
            <C.serviceResult>{price1}</C.serviceResult>
          </C.finalAreaItens>
        )}
        {formData.data.option2 && (
          <C.finalAreaItens>
            <C.Itens>Larger storage</C.Itens>
            <C.serviceResult>{price2}</C.serviceResult>
          </C.finalAreaItens>
        )}
        {formData.data.option3 && (
          <C.finalAreaItens>
            <C.Itens>Customizable Profile</C.Itens>
            <C.serviceResult>{price2}</C.serviceResult>
          </C.finalAreaItens>
        )}
      </C.finalArea>
      <C.resultArea>
        <C.finalAreaItens>
          <C.Itens>total per({type})</C.Itens>
          <C.firstItem>+${result}/{type}</C.firstItem>
        </C.finalAreaItens>
      </C.resultArea>
      <D.NextPreviousButton>
          <D.previousButton onClick={() => navigate('/services')}>
            Previous
          </D.previousButton>
          <D.nextButton type="submit" onClick={() => navigate('/finish')}>Next</D.nextButton>
        </D.NextPreviousButton>
        </C.result>
    </>
  );
};

export default Card;
