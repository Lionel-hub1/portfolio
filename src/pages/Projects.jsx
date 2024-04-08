import movies from "../assets/images/movies-project.png";

const Projects = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="grid auto-cols-[200px] grid-flow-col gap-x-5 snap-always snap-x snap-mandatory overflow-x-auto mx-16">
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover"
            src={movies}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">Movies App</h3>
            <p className="text-sm">
              A movie app that displays movies from an API
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>PWA</li>
            </ul>
            <h3 className="font-bold mt-3">
              Hosted Link:{" "}
              <a
                href="https://movies-eight-virid.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
            <h3 className="font-bold mt-3">
              Github repo:{" "}
              <a
                href="https://github.com/Lionel-hub1/movies"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
          </div>
        </div>
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover"
            src={movies}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">Movies App</h3>
            <p className="text-sm">
              A movie app that displays movies from an API
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>PWA</li>
            </ul>
            <h3 className="font-bold mt-3">
              Hosted Link:{" "}
              <a
                href="https://movies-eight-virid.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
            <h3 className="font-bold mt-3">
              Github repo:{" "}
              <a
                href="https://github.com/Lionel-hub1/movies"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
          </div>
        </div>
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover"
            src={movies}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">Movies App</h3>
            <p className="text-sm">
              A movie app that displays movies from an API
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>PWA</li>
            </ul>
            <h3 className="font-bold mt-3">
              Hosted Link:{" "}
              <a
                href="https://movies-eight-virid.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
            <h3 className="font-bold mt-3">
              Github repo:{" "}
              <a
                href="https://github.com/Lionel-hub1/movies"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
          </div>
        </div>
        <div className="border-x border-secondary p-4 flex flex-col lg:flex-row space-x-4 rounded-md shadow-lg">
          <img
            className="h-24 w-full object-top lg:w-24 lg:h-full object-cover"
            src={movies}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-lg font-bold">Movies App</h3>
            <p className="text-sm">
              A movie app that displays movies from an API
            </p>
            <h3 className="font-bold mt-3">Technologies</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>PWA</li>
            </ul>
            <h3 className="font-bold mt-3">
              Hosted Link:{" "}
              <a
                href="https://movies-eight-virid.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
            <h3 className="font-bold mt-3">
              Github repo:{" "}
              <a
                href="https://github.com/Lionel-hub1/movies"
                target="_blank"
                rel="noreferrer"
                className="text-secondary font-light underline"
              >
                click
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
