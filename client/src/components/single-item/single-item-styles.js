import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CardContainer = styled.div`
   width: 22%;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;
   margin-bottom: 20px;

   &:hover {
      .image {
         opacity: 0.8;
      }
      button {
         opacity: 0.85;
         display: block;
      }
   }
`;

export const CardImageContainer = styled.div`
   width: 100%;
   height: 95%;
   background: ${({ imageUrl }) => `url(${imageUrl})`};
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;
`;

export const CardInfoContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;

export const CardNameContainer = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;

export const CardPriceContainer = styled.span`
   width: 10%;
`;

export const StyledCustomButton = styled(CustomButton)`
   width: 80%;
   position: absolute;
   bottom: 20%;
   display: none;
`;
