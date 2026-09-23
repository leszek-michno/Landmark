import { links } from "../assets/links";

const Navbar = () => {
  return (
    <nav>
      <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 ">
        
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-amber-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
