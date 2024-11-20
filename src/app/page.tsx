import Link from "next/link";

export default function Home() {
  return (
    <header>
      <h1 className='text-2xl'> Tasks</h1>
      <Link href='/task'>New Task</Link>
    </header>
  );
}
