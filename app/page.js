import Member from "@/Components/Member"
import Group from "@/Components/Group"


export default function Home() {
  return (
    // <main>
    //   <h1>Hello Next.Js</h1>
    //   <a href="/student/profile">test</a>
    <main className="flex justify-center items-center h-screen w-full bg-slate-200">
      <Group/>
      <Member/>
    </main>
  )
}
