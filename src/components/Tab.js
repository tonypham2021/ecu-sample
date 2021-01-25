// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

/**
 * The 'PersonalTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {}
    }
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Detecting the currently set theme
    // microsoftTeams.registerOnThemeChangeHandler(theme => {
    //   if (theme !== this.state.theme) {
    //     this.setState({theme});
    //   }
    // });
    // Next steps: Error handling using the error object
  }

  render() {

      // let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
      // let userName = Object.keys(this.state.context).length > 0 ? this.state.context['userPrincipalName'] : "No results found";
      // console.log(`User: ${userName}`);
      // const currentTheme = this.state.theme;
      // console.log(`The current state is: ${currentTheme}`);
      return (
      <div className="content-wrapper flex-container">
        <Header />
        <Main />
        <Footer />
      </div>
      );
  }
}
export default Tab;