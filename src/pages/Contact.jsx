// import { useState } from "react";

const Contact = () => {
  let submitted = false;
  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center pb-5">Contact Me</h2>
      {submitted ? (
        <p className="text-primary-dark text-center">
          Thank you for your message. I will get back to you as soon as
          possible.
        </p>
      ) : (
        <form
          method="POST"
          // onSubmit={handleSubmit}
          action="https://getform.io/f/lajkokqb"
          className="w-[70vw] lg:w-1/2 flex flex-col text-primary items-center justify-center"
        >
          <div className="w-full md:flex md:space-x-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
            />
          </div>
          <textarea
            placeholder="Input your message here..."
            name="message"
            className="w-full border-secondary-light border-2 p-2 rounded-md mb-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-secondary  text-primary-dark p-2 rounded-md"
          >
            Send
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
