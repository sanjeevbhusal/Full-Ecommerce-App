import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const LabelShrink = css`
   top: -14px;
   font-size: 12px;
   color: ${mainColor};
`;

export const Group = styled.div`
   position: relative;
   margin: 35px 0;

   input[type="password"] {
      letter-spacing: 0.3em;
   }
`;

export const Input = styled.input`
   color: ${subColor};
   font-size: 18px;
   padding: 10px 10px 10px 5px;
   display: block;
   width: 100%;
   border: none;
   border-bottom: 1px solid ${subColor};
   letter-spacing: ${({ password }) => (password ? "0.3em" : null)};

   &:focus {
      outline: none;
   }

   &:focus ~ label {
      ${LabelShrink}
   }
`;

export const Label = styled.label`
   color: ${subColor};
   font-size: 16px;
   font-weight: normal;
   position: absolute;
   left: 5px;
   top: 10px;
   transition: 300ms ease all;
   ${({ value }) => (value.length ? LabelShrink : "")}
`;
