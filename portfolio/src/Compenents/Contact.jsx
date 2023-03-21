export function Contact(){
    return(
        <>
            <div className="sections" id="contact">
                <h2>Contact</h2>
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
            </div>
        </>
    )
}