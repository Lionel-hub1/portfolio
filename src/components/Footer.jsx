import love from "../assets/icons/love.svg";

export const Footer = () => {
  return (
    <footer className="relative lg:absolute right-0 left-0 mx-auto bottom-4  text-secondary-light text-center w-1/2">
      <p className="z-50">
        &copy; {new Date().getFullYear()}; made with{" "}
        <img className="inline-flex w-6 h-6" src={love} alt="" /> by Jean Lionel
        Ndabaga
      </p>
    </footer>
  );
};
