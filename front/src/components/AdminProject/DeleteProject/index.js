import React, { Component } from 'react';

class DeleteProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 0
    }
  }

  deleteProject = (event) => {
    event.preventDefault();

    const { project } = this.state
    const config = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    };
    fetch(`/projects/delete/${project.id}`, config)
      .then(response => response.JSON.stringify())
      .then(response => {
        if (response.data.status == 200) {
          return alert('project is added !! ')
        } else {
          alert('problem with the add');
        }
      })

      .catch(function (error) {
        console.log(error);
      });
    console.log('added  ' + 'name: ' + this.state.id  + '  description: ' + this.state.description + '  image: ' + this.state.image_1)
    // this.props.history.push('/');
  }



  handelSubmit = (event) => {
    let MYJSON = JSON.stringify(this.state, 1, 2, 3);
    return alert('Look your console' + console.log({ MYJSON }))
    { console.log('image:' + this.state.image_1) }
    { console.log('name:' + this.state.name) }
    { console.log('description:' + this.state.description) }
  }


  render() {

    return (
      <div className={'project-add'}>
        <h1>DeleteProject</h1>
        <button type="submit" onClick={this.deleteProject}>DELETE</button>
        <button onClick={this.handelSubmit}>envoyer console</button>
      </div>
    )
  }
}
export default DeleteProject;