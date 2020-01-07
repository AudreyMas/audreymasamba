import React from 'react'
import ProjectList from './ProjectsList/index'

class Project extends React.Component {
  render() {
    return (
      <div>
        <div className={"container"}>
          <div className={"content projects"}>
            <div className={"title-links"}>
              <span className={"title"}>
                <h2>Projects</h2>
              </span>
            </div>

            <div className={"float-bull"}>
              <div className={"bull-1"}></div>
              <div className={"bull-2"}></div>
              <div className={"bull-3"}></div>
            </div>

            <ul className={"menu-btns"}>
              <li><a className={"btn-menu"} href="home.html"></a></li>
              <li><a href="projects.html"></a></li>
              <li><a href="contact.html"></a></li>
            </ul>

            <div className={"project-content"}>
              <ProjectList />
            </div>

            <div className={"footer"}>
              <a href="mailto:masambaaudrey1@gmail.com" target="_blank">2019©masambaaudrey1@gmail.com</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Project