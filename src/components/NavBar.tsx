import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="shadow-box p-2 w-full bg-black">
      <div className="flex justify-between font-bold bg-transparent">
        <div className="text-2xl text-white">
          <Link href="/">Alvin</Link>
        </div>
        <ul className="flex justify-between text-white">
          <li className="mx-2">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link href="#about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
