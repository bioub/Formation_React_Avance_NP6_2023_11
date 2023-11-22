import { Component } from 'react'

class Clock extends Component {
  state = {
    now: new Date(),
  }

  handleDelete = () => {
    
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      })
    }, 1000);
  }

  render() {
    return <div> {this.state.now.toLocaleTimeString()}</div>
  }
}

export default Clock;