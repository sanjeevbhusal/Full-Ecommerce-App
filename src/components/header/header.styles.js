import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
   width: 100%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)``;

export const OptionsContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 30px;
   margin-right: 20px;
`;

export const Option = styled(Link)`
   text-decoration: none;
   color: black;
   cursor: pointer;
`;
