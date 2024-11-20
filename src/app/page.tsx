import TaskItem from "@/components/TaskItem";
import { prisma } from "@/db";
import Link from "next/link";

// await prisma.task.create({ data: { title: "first task" } });

function getTask() {
  return prisma.task.findMany();
}
async function toggleTask(id: string, complete: boolean) {
  "use server";
  console.log(id, complete);
  await prisma.task.update({ where: { id }, data: { complete } });
}
export default async function Home() {
  const tasks = await getTask();

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'> Tasks</h1>
        <Link
          href='/task'
          className='px-4 py-2 border border-slate-300 rounded hover:bg-slate-500 focus-within:bg-slate-500 outline-none'
        >
          New Task
        </Link>
      </header>
      <ul className='pl-4'>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} toggleTask={toggleTask} />
        ))}
      </ul>
    </>
  );
}
