import React from "react";
import SHOP_DATA from "../../collections";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
      let {collections} = this.state;
    return <div>
        {collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>;
  }
}

export default ShopPage;
