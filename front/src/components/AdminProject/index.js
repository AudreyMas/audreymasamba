import React, { Component } from 'react'
import AddProject from './AddProject/index'

class AdminProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }
  componentDidMount() {
    this.getProjects();
  }

  getProjects () {
    fetch('http://localhost:5000/projects', {
    },)
      .then(response => response.json())
      .then(res =>
        this.setState({
          projects: res.data
        })
        )
      .catch(err => console.error(err))
  }

  render() {
    const {projects} = this.state;
    let nameProject = projects.map((item, index) => (
     <li key={index}>{item.name}</li>
    ))

    return (
      <div className={'container'}>
        <h1>Manage my projects</h1>
        
        <ul className={'projects-list'}>
          {nameProject}
        </ul>
        <AddProject />
      </div>
    )
  }
}
export default AdminProject;