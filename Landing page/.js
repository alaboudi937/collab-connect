

/***********************
  Menu Component
***********************/

  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  
  
  /***********************
    Nav Component
   ***********************/
  
  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              CollabConnectEd
              <strong></strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Collab-Connect-ED</span>
            <span className="line"></span>
            <span className="line">
              <span className="color"></span>
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">About us</a>
            <a href="#contact" className="cta">
              Join us
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  
  /***********************
    About Component
   ***********************/
  
  const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Catalyst for Student Success</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle"></h4>
              <p>
  Welcome to our website, a catalyst for student success. We provide valuable resources and support to empower you in your academic and professional journey. Whether you're looking for educational tips through informative videos, collaborative project opportunities, or connections with fellow students, professors, and SMEs, our platform is designed to enhance your student experience. Join us and embark on your path to success.            </p>
              <p>
              </p>
            </div>
            <div className="title">
              <h3>About</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">Projects</h4>
              <p>
              Discover Collaborative Projects: Our Student Network's project section is all about teamwork and achieving your goals. Here, you can find like-minded students with diverse skills, create project ideas, and seek assistance from your peers. We also welcome Subject Matter Experts (SMEs) to provide specialized guidance. Let's make your project ideas come to life
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Networking</h4>
              <p>
  Connect with Students, Professors, and SMEs: In our project section, you have the opportunity to connect with fellow students, professors, and Subject Matter Experts (SMEs). Whether you're seeking collaborators with specific majors or skills, looking for academic guidance, or need specialized expertise, our platform makes it easy. Let's build a supportive community together.            </p>
            </div>
          </article>
        </div>
      </section>
    );
  };
  
  
  /***********************
    Project Component
   ***********************/
  
  const Project = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  /***********************
    Projects Component
   ***********************/
  
  const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">Sign up</h3>
          </div>
        </div>
      </section>
    );
  };
  
  
  /***********************
    Contact Component
   ***********************/
  
  const Contact = props => {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact us?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail">
                  Mhalaboudi@hawkmail.hfcc.edu
                  <i className="fas fa-at at" />
                  
                  <i className="fas fa-circle dot" />
                  
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button" id="submit" value="Submit" type="submit" />
          </form>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Footer Component
   ***********************/
  
  const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} </p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  
  
  
  /***********************
    Social Links Component
   ***********************/
  
  const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a>
      </div>
    );
  };
  
  
  
  /***********************
    Main Component
   ***********************/
  
  class App extends React.Component {
    state = {
      menuState: false
    };
  
    toggleMenu = () => {
      this.setState(state => ({
        menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
      }));
    };
  
    render() {
      return (
        <React.Fragment>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </React.Fragment>
      );
    }
  
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('app'));