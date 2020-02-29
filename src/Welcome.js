import React from 'react';

function WelcomeContent(props) {
  // If authenticated, greet the user
    return (
      <div>
        {/* <h10>Hi {props.user.displayName}! Welcome Back Class Space!</h10>
        <p>Use the navigation bar on the side to access the tools</p> */}
      </div>
    );
  }

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          authButtonMethod={this.props.authButtonMethod}
          style={{ textAlign: 'centre' }}
          />
      </div>
    );
  }
}