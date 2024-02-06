import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center flex-col p-8">
      <h1 className="text-4xl font-extrablod items-center flex">SolBi Ju</h1>
      <div>
        <ul className="flex p-4 items-center">
          <Link href="/">
            <li className="p-2">Work</li>
          </Link>
          <li className="p-2">Showreel</li>
          <Link href="/contact">
            <li className="p-2">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
