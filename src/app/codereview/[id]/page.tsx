import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

interface CodeReviewProps {
  params: Promise<{
    id: string;
  }>;
}

const CodeReview = async ({ params }: CodeReviewProps) => {
  const id = (await params).id;

  const code = await db.code.findFirst({
    where: { id: parseInt(id) },
  });

  async function deleteCode() {
    "use server";
    const res = await db.code.delete({
      where: { id: parseInt(id) },
    });
    if (res) {
      redirect("/");
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="flex w-[45%] justify-between">
        <div className="font-bold text-2xl">{code?.name}</div>
        <div className="space-x-4 flex">
          <Link href={`/codereview/edit/${id}`}>
            <button className="bg-blue-400 text-white py-2 px-6 rounded-full hover:opacity-70 active:opacity-50 w-[7rem]">
              Edit
            </button>
          </Link>
          <form action={deleteCode}>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:opacity-70 active:opacity-50 w-[7rem]"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <code className="bg-black text-white w-[50%] min-h-[5rem] p-6 rounded-lg">
        {code?.code}
      </code>
    </div>
  );
};

export default CodeReview;
