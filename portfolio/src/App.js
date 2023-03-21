import './App.css';

function App() {
  return (
    <div>
      
        <div className="sections" id="aboutMe">
            <h2></h2>
            <main className="aboutMeContent">
              <div id="hello">
                <h3> Hello World!</h3>
                  <p className="bio">
                    <a>Hello!</a> 
                    Welcome to my portfolio! My name is Stephan Drawe and I am a driven full stack developer in the making. With a background in the food and beverage industry, I am excited to transition into the world of tech and bring my problem-solving skills to the table. My focus is on front-end development using JavaScript, CSS, and HTML. In this portfolio, you will find a collection of projects that showcase my abilities and passion for development. To see more of my work, please check out my GitHub and LinkedIn profiles linked below. If you would like to contact me, please feel free to email me at stephan.drawe@hotmail.com or use the form provided on this page. Thank you for taking the time to visit my portfolio!
                  </p>
              </div>
            </main>
        </div>
        <div className="sections" id="projects">
            <h2></h2>
            <main className="projectContent">
              {/* <!-- <div id="s1">PacMen-Exercise</div> --> */}
              <div className="card">
                <img src="Pacmen.jpeg" className="card-img-top" alt="PacMen Project Picture"/>
                <div className="card-body">
                  <h5 className="card-title">PacMen-Exercise</h5>
                  <p className="card-text">This is a modified version of the 'PacMen-Factory' project assignment through MIT coding bootcamp. This project creates images of PacMan at different locations in the browser upon clicking the 'Add PacMan' button. After clicking the 'Start Game' button, the program moves all of the PacMen created all at once at different intervals and bounces the PacMen off the borders of the browser based on the window size.</p>
                  <a href="https://github.com/StephanDrawe/PacMen-Exercise" className="btn btn-outline-secondary">Go To Project</a>
                </div>
              </div>
              {/* <!-- <div id="s2">Eye-Exercise</div> --> */}
              <div className="card">
                <img src="eyes.jpeg" className="card-img-top" alt="Eye-Exercise"/>
                <div className="card-body">
                  <h5 className="card-title">Eye-Exercise</h5>
                  <p className="card-text">This is the 'Eyes Exercise' project assignment through MIT coding bootcamp. This project tracks the movement of the mouse with images of two eyes created using CSS. The purpose of this project is to learn to code DOM manipulation through JavaScript, CSS, and HTML with external inputs, such as the mouse movement.</p>
                  <a href="https://github.com/StephanDrawe/Eye-Exercise" className="btn btn-outline-secondary">Go To Project</a>
                </div>
              </div>
              {/* <!-- <div id="s3">Real-Time-Bus-Tracker</div> --> */}
              <div className="card">
                <img src="Real Time Tracker.jpeg" className="card-img-top" alt="Real-Time-Bus-Tracker"/>
                <div className="card-body">
                  <h5 className="card-title">Real-Time-Bus-Tracker</h5>
                  <p className="card-text">This is a modified version of the 'Real Time Bus Tracker' project assignment through MIT coding bootcamp. The original project tracked the bus route of a public line from the MIT campus through each twelve stops on its way to the Harvard campus. The tracker made use of geocoding and navigation APIs and SKDs through mapbox.</p>
                  <a href="https://github.com/StephanDrawe/Real-Time-Bus-Tracker" className="btn btn-outline-secondary">Go To Project</a>
                </div>
              </div>
            </main>
        </div>
        <div className="sections" id="contact">
            <h2>Contact</h2>
            {/* <!-- start bootstrap contact form --> */}
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com"/>
              </div>
              {/* <!-- don't need this anymore <div className="mb-3"> */}
                <label for="exampleInputEmail1" className="form-label">Your email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">aaa</div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {/* <!-- start code for contact buttons --> */}
              <a className="btn btn-outline-secondary" href="https://www.linkedin.com/in/stephan-drawe/" role="button">Linkedin</a>
              <a className="btn btn-outline-secondary" href="https://github.com/StephanDrawe?tab=repositories" role="button">Github</a>
              <button type="button" className="btn btn-outline-success">Just A Button</button>
            </form>
              {/* <!-- end code for contact buttons --> */}
            {/* <!-- end bootstrap contact form --> */}
        </div>
    </div>
  );
}

export default App;
