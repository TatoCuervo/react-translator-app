import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select Language
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag ar"
          onClick={() => this.context.onLanguageChange("argentina")}
        />
      </div>
    );
  }
}
export default LanguageSelector;
