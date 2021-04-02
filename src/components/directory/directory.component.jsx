import React, { Component } from "react";
import { sections } from "../../data";
import { MenuItem } from "../menu-item/menu-item.component";
import './directory.styles.scss'
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title,imageUrl,id,size }) => (
          <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
