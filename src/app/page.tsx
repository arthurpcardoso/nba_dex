import Teambox from "../components/teambox"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="">
        <span className="">Times da NBA</span>
        <div>
          <Teambox />
        </div>
      </div>
    </main>
  )
}
