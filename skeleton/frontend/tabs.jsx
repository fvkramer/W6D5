import React from 'react';

// const Header = (props) => {
//   const selectedClass =
//     //
//
//   render() {
//     return (
//       <li
//       className={selectStatus}></li>
//     )
//   }
// };

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    // this.makeSelected = this.makeSelected.bind(this);
  }

  makeSelected(e) {
    this.setState({
      selected: e.target.id
    });

    for (let i = 0; i < this.props.tabs.length; i++) {
      if (e.target.id === this.state.selected) {
        e.target.className = "selected";
      } else {
        e.target.classList.remove("selected");
        e.target.className = "hidden";
      }
    }
  }

  render() {
    return(
      <ul className="tabs-ul">
        <h1>{this.state.selected}</h1>
        {this.props.tabs.map((tab, index) => (
          <li>
            <h1 id={index} onClick={(e)=> this.makeSelected(e)}>{tab.title}</h1>
            <article>{tab.content}</article>
          </li>)
          )}
      </ul>

    );
  }
}

export default Tabs;
