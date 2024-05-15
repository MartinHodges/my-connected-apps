
async function getFishes() {
    const res = await fetch(
        `${process.env.API_URL}/api/v1/fishes`,
        {
        cache: "no-store"
        })

    if (!res.ok) {
        throw new Error('Failed to fetch fishes')
    }

    return res.json()
}

export default async function Fishes() {
    const fishes = await getFishes()

    return (
        <div>
            <h2 className="text-2xl">My Fishes</h2>
            {fishes.map((fish: any) => (
                <div key={fish.id}  className="p-6 m-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div>
                        <h2>{fish.type}</h2>
                        <div className={"flex flex-row text-xs"}>
                            <div>
                                id:
                            </div>
                            <div>
                                {fish.id}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  }