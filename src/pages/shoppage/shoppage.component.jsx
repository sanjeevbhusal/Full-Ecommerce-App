import { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import ShopPageData from "./shoppage.data";

import "./shoppage.styles.scss";

class ShopPage extends Component {
   constructor() {
      super();
      this.state = {
         collections: ShopPageData,
      };
   }

   render() {
      const { collections } = this.state;
      return (
         <div className="shop-page">
            <h1>Collection</h1>
            {collections.map(({ id, ...otherCollectionProps }) => (
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
         </div>
      );
   }
}

export default ShopPage;
