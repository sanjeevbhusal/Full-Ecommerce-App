import styled from "styled-components";

export const CheckOutPage = styled.div`
   width: 60%;
   min-height: 90vh;
   display: flex;
   flex-direction: column;
   margin: 50px auto 0;

   button {
      margin-left: auto;
      margin-top: 50px;
   }
`;

export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 40px;
   margin-bottom: 30px;
   border-bottom: 1px solid grey;
   gap: 20px;
   font-size: 20px;
`;

export const HeaderItems = styled.span`
   width: 20%;
   display: flex;
   justify-content: center;

   &:first-child {
      justify-content: start;
      margin-left: 20px;
   }
`;

export const Price = styled.div`
   display: flex;
   justify-content: end;
   font-size: 40px;
`;

export const Warning = styled.div`
   margin-top: 40px;
   color: red;
   font-size: 24px;
   text-align: center;
`;
