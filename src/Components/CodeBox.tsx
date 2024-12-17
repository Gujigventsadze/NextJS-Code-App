import Link from "next/link";

interface CodeBoxProps {
  name: string;
  id: number;
}

const CodeBox = ({ name, id }: CodeBoxProps) => {
  return (
    <div className="flex shadow-custom-gray w-[30%] justify-between py-3 px-6 items-center rounded-md">
      <div className="font-semibold text-2xl">{name}</div>
      <div>
        <Link href={`/codereview/${id}`}>
          <button className="bg-black text-white text-[1.2rem] px-4 py-1 rounded-full hover:opacity-70 active:opacity-50">
            Show
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CodeBox;
