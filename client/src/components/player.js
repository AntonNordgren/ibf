import React from 'react';

export default class Team extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      player: {}
    }
  }

  componentDidMount() {

    const { match: { params } } = this.props

    fetch(`http://localhost:3001/api/getPlayerById/${params.id}`)
    .then(res => res.json())
    .then(json => {
      this.setState({player: json})
    })
  }

  render() {
    return (
      <div className="player">
        <h1>{this.state.player.namn}</h1>
        <h1>{this.state.player.position}</h1>
        <h1>{this.state.player.nummer}</h1>
      </div>
    )
  }

}