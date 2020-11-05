import React from 'react';

import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'

import Player from "./player"

export default class Team extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listOfPlayers: [
        // {name: "Börje", imgPath: börje, nr: 7, position: ''},
        // {name: "Emil", imgPath: emil, nr: 27},
        // {name: "Joel Magnusson", imgPath: joel, nr: 17}
      ]
    }
  }

  componentDidMount() {

    fetch("http://localhost:3001/api/getPlayerSheet")
    .then(res => res.json())
    .then(json => {


      this.setState({listOfPlayers: json})

    })


  }

  render() {

    // let playerlist = this.state.listOfPlayers

    let anchorRef = React.createRef()

    // < Link to = "/" innerRef = { anchorRef } />

    let content
    if(this.state.listOfPlayers !== []) {
      content =
      (
        this.state.listOfPlayers.map(x => (
          <tr key={x.nummer}>
            <Link to={`laget/${x.nummer}`} >
              <td style={{ margin: 0, padding: 0 }}>
                <img src={require(`../static/players/${x.nummer}.png`)} width="50px" />
              </td>
              <td>{x.namn}</td>
              <td>{x.position}</td>
              <td>{x.nummer}</td>
            </Link>
          </tr>
        ))
      )
    }

    return (
      <div className="team">
        <Table hover striped>
          <thead>
            <tr>
              <th>Spelare</th>
              <th>Namn</th>
              <th>Position</th>
              <th>Nummer</th>
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </Table>
      </div>
    )
  }

}