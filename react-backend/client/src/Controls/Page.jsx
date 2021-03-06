import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';

class ControlsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tab: 0}

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabNum) {
    this.props.onTabChange(tabNum);
  }

  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <h1> Breaker Controls </h1>
        <img src={require('./grid.bmp')} style={{width: 800}}/>
        <Footer />
      </div>
    );
  }
}

export default ControlsPage;
