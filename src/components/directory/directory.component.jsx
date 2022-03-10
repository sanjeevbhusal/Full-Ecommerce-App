import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => {
   return (
      <DirectoryContainer>
         {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
            <MenuItem
               key={id}
               title={title}
               imageUrl={imageUrl}
               size={size}
               linkUrl={linkUrl}
            />
         ))}
      </DirectoryContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
