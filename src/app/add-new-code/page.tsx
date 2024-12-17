import { db } from "@/db";
import { redirect } from "next/navigation";

const NewCodePage = () => {
  async function CreateNewCode(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const code = formData.get("code") as string;

    const newCode = await db.code.create({
      data: {
        name: name,
        code: code,
      },
    });

    if (newCode) {
      redirect("/");
    }
  }

  return (
    <form
      className="w-[50%] flex flex-col items-center gap-3"
      action={CreateNewCode}
    >
      <div className="font-semibold text-[2rem]">Name</div>
      <input
        name="name"
        className="shadow-custom-gray py-2 px-4 w-[50%] rounded-xl outline-none"
        placeholder="e.g Two Sum..."
        required
      />
      <div className="font-semibold text-[2rem]">Code</div>
      <textarea
        name="code"
        className="shadow-custom-gray p-4 w-[50%] outline-none resize-none rounded-md h-[9rem]"
        placeholder="function TwoSum(a, b) { return a+b; }"
        required
      />
      <button
        className="bg-black text-white px-[3rem] py-[0.7rem] text-2xl rounded-full hover:opacity-70 active:opacity-50"
        type="submit"
      >
        Add Code
      </button>
    </form>
  );
};

export default NewCodePage;
