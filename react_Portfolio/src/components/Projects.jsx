function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center text-primary">My Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Todo App</h5>
                <p className="card-text">A React app to manage your tasks, using state and event handling.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Fetches weather data from API and shows weather by location.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">This very site you're looking at — built with React and Bootstrap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
