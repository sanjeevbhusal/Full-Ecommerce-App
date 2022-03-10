import { useNavigate } from "react-router-dom";

import {
   MenuItemContainer,
   BackgroundImage,
   Title,
   Info,
   Content,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
   console.log(size);
   const navigate = useNavigate();
   return (
      <MenuItemContainer size={size} onClick={() => navigate(`/${linkUrl}`)}>
         <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
         <Content className="content">
            <Title>{title.toUpperCase()}</Title>
            <Info>Click Here</Info>
         </Content>
      </MenuItemContainer>
   );
};

export default MenuItem;
