import CodeBox from "@/Components/CodeBox";
import { db } from "@/db";

async function getData() {
  const codes = await db.code.findMany();
  return codes;
}

export default async function Home() {
  const codes = await getData();

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {codes.map((code) => (
        <CodeBox key={code.id} name={code.name} id={code.id} />
      ))}
    </div>
  );
}
