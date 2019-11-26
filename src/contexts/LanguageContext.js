import React from "react";

// Context object name needs to be with capital first character
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { langauge: "english" };

  onLanguageChange = langauge => {
    this.setState({ langauge });
  };

  // Render function it's wraping nested children components in order to give them access
  // to the values (state & callback)
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
