import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    console.log("clicked", index);
  }
  render() {
    const { items } = this.props;
    const renderedItems = items.map((item, index) => {
      return (
        <React.Fragment key={item.title}>
          <div
            onClick={this.handleClick.bind(this, index)}
            className="title active"
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
  }
}
export default Accordion;
