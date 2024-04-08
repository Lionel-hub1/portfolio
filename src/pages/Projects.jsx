import movies from "../assets/images/movies-project.png";

const Projects = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-24">
        <div className="border border-secondary">
          <img className="w-24" src={movies} alt="" />
        </div>
        <div className="border border-secondary">
          <img className="w-24" src={movies} alt="" />
        </div>
        <div className="border border-secondary">
          <img className="w-24" src={movies} alt="" />
        </div>
        <div className="border border-secondary">
          <img className="w-24" src={movies} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
