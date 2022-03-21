import styled from "styled-components";

export const CartDropdownContainer = styled.div`
   position: absolute;
   height: 340px;
   width: 270px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 1px solid black;
   background-color: white;
   top: 90px;
   right: 50px;
   z-index: 10;
`;

export const CartItemsContainer = styled.div`
   height: 240px;
   display: flex;
   flex-direction: column;
   overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
   font-size: 20px;
   margin: 100px auto;
`;
