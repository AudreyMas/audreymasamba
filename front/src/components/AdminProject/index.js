// import React, { Component } from 'react'
// import AddProject from './AddProject/index'
// import DeleteProject from './DeleteProject/index'

// class AdminProject extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       projects: [],
//     }
//   }
//   componentDidMount() {
//     this.getProjects();
//   }

//   getProjects () {
//     fetch('http://localhost:5000/projects', {
//     },)
//       .then(response => response.json())
//       .then(res =>
//         this.setState({
//           projects: res.data
//         })
//         )
//       .catch(err => console.error(err))
//   }

//   render() {
//     const {projects} = this.state;
//     let nameProject = projects.map((item, index) => (
//      <li key={index}>{item.name}</li>
//     ))

//     return (
//       <div className={'container'}>
//         <h1>Manage my projects</h1>
        
//         <ul className={'projects-list'}>
//           {nameProject}
//         </ul>
//         <AddProject />
//         <DeleteProject />
//       </div>
//     )
//   }
// }
// export default AdminProject;


import React, { Component } from 'react'
import AddProject from './AddProject/index'

class AdminProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [ ],
      id:''
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

  getId = () =>{
     let MYJSON = JSON.stringify(this.state.projects);
      return  alert('button clicked' + MYJSON) +console.log('id clikced = ' + MYJSON)
  }
  // handleDelete (indexof){
  //   console.log(indexof)
  // }


  deleteProject = (indexof) => {
    // event.preventDefault();

    // const { project } = this.state
    const config = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    };
    fetch(`http://localhost:5000/projects/delete/${indexof}`, config)
      .then(response => response.JSON.stringify())
      .then(response => {
        if (response.data.status == 200) {
          return alert('id is deleted !! ')
        } else {
          alert('delete error');
        }
      })

      .catch(function (error) {
        console.log(error);
      });
    console.log('delete  ' + indexof)
    // this.props.history.push('/');
  }










  render() {
    const {projects} = this.state;
    let nameProject = projects.map((item, index) => ( 
     <li key={index}>{item.name}  {item.id} <a href='' onClick={this.deleteProject(this,index)}>[X]</a></li>
    ))

    return (
      
      <div className={'container'}> {console.log(this.state.id)}
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