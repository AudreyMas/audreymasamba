import React, { Component } from 'react'
import './styles.scss'

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

  getProjects() {
    fetch('http://localhost:5000/projects', {
    })
      .then(response => response.json())
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.error(err))
  }


  render() {
    const { projects } = this.state;
    let listProjects = projects.map((item, index) => (
      <li key={index}>
        <div className={"title"}>
          <h1>{item.name}</h1>
        </div>
        <div className={'description'}>{item.description}</div>
        <div className={'img'}>
          <img src={item.image_1} alt='imageProject' />
        </div>
      </li>
    ))

    return (
      <div className={'project-list'}>
        <ul>
          {listProjects}
        </ul>
      </div>
    )
  }

}
export default ProjectList;