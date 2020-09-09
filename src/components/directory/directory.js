import React from "react";
import MenuItem from "../menuItem/menuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import selectSections from "../../redux/directory/directorySelectors";
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
