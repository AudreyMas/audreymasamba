import React, { Component } from 'react'

class ProjectList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list: [
  //       {
  //         id: '',
  //         firstname: 'Robin',
  //         lastname: 'Wieruch',
  //         year: 1988,
  //       },

  //     ]
  //   }
  // }
  // render() {
  //   const list = [
  //     {
  //       id: 1,
  //       name: 'Robin',
  //       description: 'Wieruch',
  //       year: 1988,
  //       image1: 'https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f'
  //     },
  //     {
  //       id: 2,
  //       firstname: 'Dave',
  //       lastname: 'Davidds',
  //       year: 1990,
  //       image1: 'https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f'
  //     },
  //   ];
  //   return (
  //     <div className={'container'}>
  //       {list.map(elem => (
  //         <ul>
  //           <br/>
  //           <li key={elem.id}>
  //             <div>{elem.id}</div>
  //             <div>{elem.name}</div>
  //             <div>{elem.description}</div>
  //             <div>{elem.year}</div>
  //             <img src={elem.image1} alt='imageProject' />
  //           </li>
  //           <br/><br/><br/>
  //         </ul>
  //       ))}
  //     </div>
  //   )
  //}
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = _ => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(response =>
        this.setState({
          projects: response.data
        }))
      .catch(err => console.error(err))
  }

  renderProject = ({ id, name }) => (
    <div Key={id}>{name}</div>
  )

  render() {
    const { projects } = this.state;
    // const projectList = this.state.projects.map((index, name) => (
    //   <li key={index}>
    //     {name}
    //   </li>
    // ))

    return (
      <div>
        {projects.map(this.renderProject)}
        {/* <ul>
          {projectList}
        </ul> */}
      </div>
    )
  }

}
export default ProjectList;