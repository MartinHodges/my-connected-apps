
async function getFishTanks() {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/fish-tanks`,
      {
        cache: "no-store"
      })
   
    if (!res.ok) {
      throw new Error('Failed to fetch fish tanks')
    }
  
    return res.json()
  }

  export default async function FishTanks() {
    const tanks = await getFishTanks()

    return (
        <div>
            <h2 className="text-2xl">My Fish Tanks</h2>
            {tanks.map((tank: any) => (
                <div key={tank.id}  className="p-6 m-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div>
                        <h2>{tank.name}</h2>
                        <div className={"flex flex-row text-xs"}>
                            <div>
                                id:
                            </div>
                            <div>
                                {tank.id}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  }