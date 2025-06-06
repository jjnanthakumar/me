import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={"/assests/images/azure_engineer_nobg.png"}
        alt=""
        //style={{ backgroundColor: "cyan" }}
      />
    );
  }
}
