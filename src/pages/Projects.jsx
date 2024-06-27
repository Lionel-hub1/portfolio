import movies from "../assets/images/movies-project.png";
import diyblog from "../assets/images/diy-blog.png";

const Projects = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center">Master Pieces</h2>
      <div className="grid auto-cols-[200px] md:auto-cols-fr grid-flow-col gap-x-5 snap-always snap-x snap-mandatory overflow-x-auto mx-16 pt-2 lg:mx-24 pb-8">
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover rounded-t-md lg:rounded-none lg:rounded-l-md"
            src={movies}
            alt="Movies App Screenshot"
            loading="lazy"
          />
          <div className="text-left p-2">
            <h3 className="text-lg font-bold">Movies App</h3>
            <p className="text-sm my-2">
              A movie app that displays movies from an API.
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside my-2">
              <li>React</li>
              <li>PWA</li>
            </ul>
            <a
              href="https://movies-eight-virid.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-secondary text-primary font-medium py-2 px-4 rounded hover:bg-secondary-dark transition-colors duration-300"
            >
              Preview
            </a>
          </div>
        </div>
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover rounded-t-md lg:rounded-none lg:rounded-l-md"
            src={diyblog}
            alt="DIY Screenshot"
            loading="lazy"
          />
          <div className="text-left p-2">
            <h3 className="text-lg font-bold">DIY Blog</h3>
            <p className="text-sm my-2">
              View DIY related posts on this site.
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside my-2">
              <li>Django</li>
              <li>React</li>
              <li>PWA</li>
            </ul>
            <a
              href="https://diyblog.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-secondary text-primary font-medium py-2 px-4 rounded hover:bg-secondary-dark transition-colors duration-300"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
