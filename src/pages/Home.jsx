import lion from "../assets/images/lionel-one.png";

const Home = () => {
  
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-full">
      <div className="flex items-center justify-center max-w-full lg:w-1/2 px-20  relative">
        <div className="bg-secondary bg-opacity-10 rotate-2 lg:rotate-[38deg] overflow-hidden">
          <img
            className="h-[15rem] lg:h-[24rem] lg:-rotate-[30deg] -mb-14  text-wrap opacity-80"
            src={lion}
            alt=""
          />
        </div>
      </div>

      <div className="flex w-auto overflow-auto py-10 lg:py-0 ml-20 lg:ml-0 lg:w-1/2 mr-20 lg:text-3xl items-center">
        <p className="text-left ">
          Hello, I&apos;m
          <span className="text-secondary inline-flex mx-1 font-semibold">
            Jean Lionel Ndabaga
          </span>
          , a full stack developer and a mobile apps developer who
          <span className="text-danger inline-flex mx-1 font-semibold">
            care
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
