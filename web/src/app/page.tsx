import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (

    <div className="flex flex-col w-full h-full min-h-screen items-center p-5 bg-zinc-400 ">
      <UserButton afterSignOutUrl="/"/>
      <div className="w-full justify-center items-center">
        <h1>Page Home</h1>
      </div>
    </div>
   
  )
}
