import React from 'react';

import Table from 'react-bootstrap/Table'

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfPlayers: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/getStatSheet')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
      listOfPlayers: json
    })})
  }

  render() {
    return(
      <div className="Stats">
          <Table striped bordered hover>
            <thead>
              <tr style={{color: "#CC0000"}}>
                <th>Namn</th>
                <th>Mål</th>
                <th>Assist</th>
                <th>Poäng</th>
                <th>Utvisning</th>
                <th>MVP</th>
                <th>Matchnärvaro</th>
              </tr>
            </thead>
            <tbody>
              {
              this.state.listOfPlayers.map(x => 
                <tr>
                  <td>{x.namn}</td>
                  <td>{x.mål}</td>
                  <td>{x.assist}</td>
                  <td>{x.poäng}</td>
                  <td>{x.utvisning}</td>
                  <td>{x.mvp}</td>
                  <td>{x.matchnärvaro}</td>
                </tr>
                )}
            </tbody>
          </Table>
      </div>
    )
  }

}