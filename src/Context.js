import React, { Component } from "react";

// Create new context
export const MyContext = React.createContext();

// Then create a Provider Component
export class MyProvider extends Component {

  state = {
    language: 'en'
  }

  changeLanguage = (e) => {
    this.setState({
      language: e.target.dataset.language
    })
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}