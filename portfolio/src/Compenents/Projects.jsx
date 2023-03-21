export function Projects(){
    return(
        <>
            <div className="sections" id="projects">
                <h2></h2>
                <main className="projectContent">
                    <div id="s1">PacMen-Exercise</div>
                    <div className="card">
                        <img src="Pacmen.jpeg" className="card-img-top" alt="PacMen Project Picture"/>
                        <div className="card-body">
                            <h5 className="card-title">PacMen-Exercise</h5>
                            <p className="card-text">This is a modified version of the 'PacMen-Factory' project assignment through MIT coding bootcamp. This project creates images of PacMan at different locations in the browser upon clicking the 'Add PacMan' button. After clicking the 'Start Game' button, the program moves all of the PacMen created all at once at different intervals and bounces the PacMen off the borders of the browser based on the window size.</p>
                            <a href="https://github.com/StephanDrawe/PacMen-Exercise" className="btn btn-outline-secondary">Go To Project</a>
                        </div>
                    </div>
                    {/* <div id="s2">Eye-Exercise</div>
                    <div className="card">
                        <img src="eyes.jpeg" className="card-img-top" alt="Eye-Exercise"/>
                        <div className="card-body">
                            <h5 className="card-title">Eye-Exercise</h5>
                            <p className="card-text">This is the 'Eyes Exercise' project assignment through MIT coding bootcamp. This project tracks the movement of the mouse with images of two eyes created using CSS. The purpose of this project is to learn to code DOM manipulation through JavaScript, CSS, and HTML with external inputs, such as the mouse movement.</p>
                            <a href="https://github.com/StephanDrawe/Eye-Exercise" className="btn btn-outline-secondary">Go To Project</a>
                        </div>
                    </div>
                    <div id="s3">Real-Time-Bus-Tracker</div>
                    <div className="card">
                        <img src="Real Time Tracker.jpeg" className="card-img-top" alt="Real-Time-Bus-Tracker"/>
                        <div className="card-body">
                            <h5 className="card-title">Real-Time-Bus-Tracker</h5>
                            <p className="card-text">This is a modified version of the 'Real Time Bus Tracker' project assignment through MIT coding bootcamp. The original project tracked the bus route of a public line from the MIT campus through each twelve stops on its way to the Harvard campus. The tracker made use of geocoding and navigation APIs and SKDs through mapbox.</p>
                            <a href="https://github.com/StephanDrawe/Real-Time-Bus-Tracker" className="btn btn-outline-secondary">Go To Project</a>
                        </div>
                    </div> */}
                </main>
            </div>
        </>
    )
}