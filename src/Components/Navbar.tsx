import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-center space-x-12 p-8">
      <div className="font-bold text-2xl hover:opacity-70">
        <Link href="/">Home</Link>
      </div>
      <div className="font-bold text-2xl hover:opacity-70">
        <Link href="/add-new-code">Add New Code</Link>
      </div>
    </nav>
  );
};

export default Navbar;
