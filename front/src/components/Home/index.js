// import React from 'react'

// class Home extends React.Component {


//   copyMail = (e) => {
//     this.mail.select();
//     document.execCommand('copy');
//     if (document == null) {
//       alert('not copied')
//     } else {
//       alert('MAIL COPIED : masambaaudrey1@gmail.com')
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div className={'container home'}>
//           <div className={"content"}>
//             <div className={"float-bull"}>
//               <div className={"bull-1"}></div>
//               <div className={"bull-2"}></div>
//               <div className={"bull-3"}></div>
//             </div>

//             <ul className={"menu-btns"}>
//               <li><a className={"btn-menu"} href="home.html">Home</a></li>
//               <li><a href="projects.html"></a></li>
//               <li><a href="contact.html"></a></li>
//             </ul>

//             <div className={"title-links"}>
//               <span class='title'>
//                 <h1>MASAMBA<br />AUDREY </h1>
//                 <h2>DESIGN/FRONTED JUNIOR</h2>
//               </span>
//             </div>

//             <ul className={"links"}>
//               <li><a href="https://www.linkedin.com/in/audreymasamba/" target="_blank">LINKEDIN</a></li>
//               <li><a href="https://github.com/AudreyMas?tab=repositories" target="_blank">GITHUB</a></li>
//               <li>
//                 <input ref={(mail) => this.mail = mail} type="text" value="masambaaudrey1@gmail.com" id="myInput" />
//                 <a onClick={this.copyMail}>MAIL</a>
//               </li>
//               <li><a href="../assets/img/cv-Masamba_Audrey.pdf" target="_blank">CV</a></li>
//             </ul>

//             <div className={"footer"}>
//               <a href="mailto:masambaaudrey1@gmail.com" target="_blank">2019©masambaaudrey1@gmail.com</a>
//             </div>

//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Home;







import React from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import * as legoData from "../Loading/legoloading.json";
import * as doneData from "../Loading/doneloading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
  }

  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }


  copyMail = (e) => {
    this.mail.select();
    document.execCommand('copy');
    if (document == null) {
      alert('not copied')
    } else {
      alert('MAIL COPIED : masambaaudrey1@gmail.com')
    }
  };

  render() {
    return (

      <div>
        {!this.state.done ? (
          <FadeIn>
            <div class="">
              <h1>fetching pizza</h1>
              {!this.state.loading ? (
                <Lottie options={defaultOptions}/>
              ) : (
                  <Lottie options={defaultOptions2}/>
                )}
            </div>
          </FadeIn>
        ) : (

              <div className={'container home'}>
                <div className={"content"}>
                  <div className={"float-bull"}>
                    <div className={"bull-1"}></div>
                    <div className={"bull-2"}></div>
                    <div className={"bull-3"}></div>
                  </div>

                  <ul className={"menu-btns"}>
                    <li><a className={"btn-menu"} href="home.html">Home</a></li>
                    <li><a href="projects.html"></a></li>
                    <li><a href="contact.html"></a></li>
                  </ul>

                  <div className={"title-links"}>
                    <span class='title'>
                      <h1>MASAMBA<br />AUDREY </h1>
                      <h2>DESIGN/FRONTED JUNIOR</h2>
                    </span>
                  </div>

                  <ul className={"links"}>
                    <li><a href="https://www.linkedin.com/in/audreymasamba/" target="_blank">LINKEDIN</a></li>
                    <li><a href="https://github.com/AudreyMas?tab=repositories" target="_blank">GITHUB</a></li>
                    <li>
                      <input ref={(mail) => this.mail = mail} type="text" value="masambaaudrey1@gmail.com" id="myInput" />
                      <a onClick={this.copyMail}>MAIL</a>
                    </li>
                    <li><a href="../assets/img/cv-Masamba_Audrey.pdf" target="_blank">CV</a></li>
                  </ul>

                  <div className={"footer"}>
                    <a href="mailto:masambaaudrey1@gmail.com" target="_blank">2019©masambaaudrey1@gmail.com</a>
                  </div>

                </div>
              </div>

          )}
      </div>

    )
  }
}

export default Home;