const Skills = () => {
  return (
    <section className="py-8 ">
      <h2 className="text-2xl font-bold pb-2 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-16 lg:mx-24">
        <div className="border-secondary-light text-primary-dark p-4 rounded-md shadow-lg">
          <h3 className="text-lg font-bold pb-2">Frontend</h3>
          <ul className="list-inside list-disc flex flex-wrap md:flex-nowrap md:flex-col space-x-5 lg:list-none">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4 rounded-md shadow-lg">
          <h3 className="text-lg font-bold pb-2">Backend</h3>
          <ul className="list-inside list-disc flex flex-wrap md:flex-nowrap md:flex-col space-x-5 lg:list-none">
            <li>Django</li>
            <li>Java SpringBoot</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4 rounded-md shadow-lg">
          <h3 className="text-lg font-bold pb-2">Mobile</h3>
          <ul className="list-inside list-disc flex flex-wrap md:flex-nowrap md:flex-col space-x-5 lg:list-none">
            <li>React Native</li>
            <li>Expo</li>
            <li>Android Studio</li>
            <li>Flutter</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4 rounded-md shadow-lg">
          <h3 className="text-lg font-bold pb-2">Others</h3>
          <ul className="list-inside list-disc flex flex-wrap md:flex-nowrap md:flex-col space-x-5 lg:list-none">
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Retool</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
