import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  makeSelected() {
    this.setState({
      selected: 1
    });
  }

  render() {
    return(
      <ul className="tabs-ul">
        {this.props.tabs.map(tab => (
          <li>
            <h1 onClick={()=> this.makeSelected()}>{tab.title}</h1>
            <article>{tab.content}</article>
          </li>)
          )}
      </ul>

    );
  }
}

export default Tabs;
