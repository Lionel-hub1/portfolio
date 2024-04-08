const Contact = () => {
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center pb-5">Contact Me</h2>
      <form className="w-[70vw] lg:w-1/2 flex flex-col text-primary items-center justify-center">
        <div className="w-full md:flex md:space-x-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
        ></textarea>
        <button className="w-full bg-secondary  text-primary-dark p-2 rounded-md">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
