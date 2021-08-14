import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(({ data }) => this.setState({ students:data }))
    .catch(err => console.log(err));
  }

  render() {
    const { students } = this.state;
    let displayClass = students.map(student => {
      return <h3 key={student.id}>{`${student.first_name} ${student.last_name}`}</h3>
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {displayClass}
      </div>
    )
  }
}