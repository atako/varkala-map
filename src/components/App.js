import React from "react";
import Interface from '../containers/interface'
import Map from '../containers/map'

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state

    if (loading) { 
      return null
    }
    
    return <div>
        <Interface />
      </div>
  }
}
    
export default App