import { Link } from "react-router-dom";
import * as D from "../GlobalItens/StyleGlobalForm";

type Props = {
  back: string;
  next: string;
  path: string;
  onClick?: () => void;
};

const Buttons = ({ back, next, onClick, path }: Props) => {
  return (
    <>
      <D.NextPreviousButton>
        <Link to={path}>
          <D.previousButton>{back}</D.previousButton>
        </Link>
        <D.nextButton type="submit" onClick={onClick}>
          {next}
        </D.nextButton>
      </D.NextPreviousButton>
    </>
  );
};

export default Buttons;
