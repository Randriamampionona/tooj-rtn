import Link from "next/link";

type TProps = {};

export default function Logo({}: TProps) {
  return (
    <div>
      <Link href="/" className="font-extrabold text-xl">
        Tooj<span className="text-sky-600">.</span>
      </Link>
    </div>
  );
}
