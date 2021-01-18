import React, { Component } from 'react';

class Dropdown extends React.Component {
constructor(props){
 super();

 this.state = {
       displayMenu: false,
       selectfunc: props.select,
       options: props.options,
       placeholder: props.title
       
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"150px"}} >
         <div className="button" onClick={this.showDropdownMenu}>{this.state.placeholder}</div>

          { this.state.displayMenu ? (
          <ul>
          {this.state.options.map((option) => 
          <li><a href="#" onClick={() => {this.state.selectfunc({option}); this.setState({placeholder: option})}}>{option}</a></li> )}
            
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;