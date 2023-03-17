import * as C from "./styles";

type Props = {
  title: string;
  price: string;
  bonus: string;
  selected: boolean;
  img: string;
  alt: string;
  onClick: () => void;
};

const Card = ({ title, price, bonus, selected, img, onClick, alt }: Props) => {
  return (
    <>
      <C.Card selected={selected} onClick={onClick}>
        <C.cardItens>
          <img src={img} alt={alt} />
          <C.cartItemTexts>
            <C.cartItemTitle>{title}</C.cartItemTitle>
            <C.cartItemText>{price}</C.cartItemText>
            <C.cartItemTextY>{bonus}</C.cartItemTextY>
          </C.cartItemTexts>
        </C.cardItens>
      </C.Card>
    </>
  );
};

export default Card;
