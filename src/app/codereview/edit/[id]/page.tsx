import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

interface EditCodePageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditCodePage = async ({ params }: EditCodePageProps) => {
  const id = (await params).id;

  const code = await db.code.findFirst({
    where: { id: parseInt(id) },
  });

  async function updateCode(form: FormData) {
    "use server";
    const name = form.get("name") as string;
    const code = form.get("code") as string;
    const res = await db.code.update({
      where: { id: parseInt(id) },
      data: {
        name: name,
        code: code,
      },
    });
    if (res) {
      redirect(`/codereview/${id}`);
    }
  }

  return (
    <form className="flex flex-col gap-3 w-[30%]" action={updateCode}>
      <input
        className="shadow-custom-gray py-2 px-6 rounded-lg font-bold outline-none"
        defaultValue={code?.name}
        name="name"
        required
      />
      <textarea
        className="shadow-custom-gray py-2 px-6 rounded-lg font-bold min-h-[9rem] resize-none outline-none"
        defaultValue={code?.code}
        name="code"
        required
      />
      <div className="flex justify-center gap-4">
        <Link href={`/codereview/${id}`}>
          <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:opacity-75 active:opacity-50">
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:opacity-75 active:opacity-50"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditCodePage;
