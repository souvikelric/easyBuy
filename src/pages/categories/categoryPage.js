import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/collection-item";

import "./categoryPage.scss";

const CategoryPage = ({ collection, match }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="category-page">
      {/* <h1>{collection.title.toUpperCase()}</h1> */}
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const helper = {
  hats: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  mens: 4,
};

const mapStateToProps = (state, ownProps) => ({
  collection:
    state.shop.collections[helper[ownProps.match.params.collectionId]],
});

export default connect(mapStateToProps)(CategoryPage);
