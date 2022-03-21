import styled from "styled-components";

export const MenuItemContainer = styled.div`
   min-width: 30%;
   height: ${({ size }) => (size === "large" ? "380px" : "240px")};
   flex: 1 1 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   overflow: hidden;

   &:hover {
      cursor: pointer;

      .content {
         background: rgba(255, 255, 255, 1);
      }
   }
`;

export const BackgroundImage = styled.div`
   background: ${({ imageUrl }) => `url(${imageUrl})`};
   width: 100%;
   height: 100%;
   background-position: center;
   background-size: cover;

   &:hover {
      transform: scale(1.2);
      transition: all 2s;
   }
`;

export const Content = styled.div`
   height: 90px;
   padding: 0 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   background: rgba(255, 255, 255, 0.7);

   position: absolute;
`;

export const Title = styled.h1`
   font-weight: bold;
   margin-bottom: 6px;
   font-size: 22px;
   color: #4a4a4a;
`;

export const Info = styled.span`
   font-weight: lighter;
   font-size: 16px;
`;
