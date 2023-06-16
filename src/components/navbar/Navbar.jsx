import { nav } from "../../data/nav";

function Navbar() {
  return (
    <nav>
      <ul className="flex sm:gap-4">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={name}>
              <a
                className="text-black hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
