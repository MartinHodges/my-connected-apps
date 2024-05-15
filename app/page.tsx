import FishTanks from "./components/fish_tanks";
import Fishes from "./components/fishes";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">My Aquarium</h1>
      <div className={"flex flex-row justify-between"}>
        <div className="m-6">
          <Fishes />
        </div>
        <div className="m-6">
          <FishTanks />
        </div>
      </div>
    </main>
  );
}
