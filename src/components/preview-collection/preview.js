import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Preview;
