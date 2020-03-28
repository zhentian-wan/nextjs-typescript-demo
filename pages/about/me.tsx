import Link from "next/link";

const MePage = () => {
  return (
    <div>
      <h2>Me page</h2>
      <Link href="/">Home Page</Link>
      <Link href="/about">About Page</Link>
    </div>
  );
};

export default MePage;
