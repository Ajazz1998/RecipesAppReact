/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnText, handleClick }) => (
  <button className="btn" onClick={handleClick} css={styles}>
    {btnText}
  </button>
);

const styles = css`
  border: 1px solid #fff;
  outline: none;
  width: 90px;
  padding: 9px 0;
  color: #fff;
  background: #353b80;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  margin-left:5px;
`;

export default Button;
