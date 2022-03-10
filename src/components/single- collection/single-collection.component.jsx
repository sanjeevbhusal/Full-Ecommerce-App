import SingleItem from "../single-item/single-item.component";

import {
   EntireCollectionPreview,
   Title,
   CollectionPage,
} from "./single-collection.styles";

const SingleCollection = ({ title, items, displayItems }) => {
   console.log(displayItems);
   return (
      <CollectionPage>
         <Title>{title.toUpperCase()}</Title>
         <EntireCollectionPreview>
            {items
               .filter((item, index) => index < displayItems)
               .map((item) => {
                  return <SingleItem key={item.id} item={item} />;
               })}
         </EntireCollectionPreview>
      </CollectionPage>
   );
};

export default SingleCollection;
