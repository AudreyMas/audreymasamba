import React, { Component } from 'react'

class ProjectList extends Component {
  
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
    let listProjects = projects.map((item, index) => (
     <li key={index}>{item.name}</li>
    ))

    return (
      <div>
        test
        <ul>
          {listProjects}
        </ul>
      </div>
    )
  }

}
export default ProjectList;