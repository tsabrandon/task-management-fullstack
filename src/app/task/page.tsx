import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTask(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.task.create({ data: { title } });
  redirect("/");
  console.log("hi");
}

const Task = () => {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Add Task page</h1>
      </header>
      <form className='flex gap-2 flex-col' action={createTask}>
        <input
          type='text'
          name='title'
          className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
        />
        <div className='flex gap-3 justify-end'>
          <Link
            href='..'
            className='px-4 py-2 border border-slate-300 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none'
          >
            {" "}
            Cancel
          </Link>
          <button
            type='submit'
            className='px-4 py-2 border border-slate-300 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none'
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default Task;
