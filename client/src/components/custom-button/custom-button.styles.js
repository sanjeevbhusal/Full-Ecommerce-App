import styled, { css } from "styled-components";

const normalButtonStyles = css`
   background-color: black;
   color: white;
   border: none;

   &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
   }
`;

const invertedButtonStyles = css`
   background-color: white;
   color: black;
   border: 1px solid black;

   &:hover {
      background-color: black;
      color: white;
   }
`;

const googleSignInStyles = css`
   background-color: #4285f4;
   color: white;

   &:hover {
      background-color: #357ae8;
   }
`;

const getButtonStyles = (props) => {
   if (props.isGoogleButton) {
      return googleSignInStyles;
   }

   if (props.inverted) {
      return invertedButtonStyles;
   }

   return normalButtonStyles;
};

export const CustomButtonContainer = styled.button`
   min-width: 165px;
   height: 50px;
   padding: 0 10px;
   letter-spacing: 0.5px;
   text-transform: uppercase;
   cursor: pointer;
   ${getButtonStyles};
`;
