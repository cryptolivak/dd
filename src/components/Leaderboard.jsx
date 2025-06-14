const planets = [
  { name: "Andromeda", status: "Colonized", volume: 2400, holders: 17 },
  { name: "NebulaX", status: "Under Attack", volume: 4300, holders: 14 },
  { name: "Vortexal", status: "Cracked", volume: 1900, holders: 6 },
  { name: "Singularis", status: "Black Hole", volume: 12000, holders: 1 },
]

function statusColor(status) {
  switch (status) {
    case "Colonized": return "text-neon";
    case "Under Attack": return "text-yellow-400 animate-pulse";
    case "Cracked": return "text-cracked";
    case "Black Hole": return "text-blackhole";
    default: return "text-white";
  }
}

export default function Leaderboard() {
  return (
    <section className="mt-10 mb-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">Galaxy Leaderboard</h2>
      <div className="overflow-x-auto rounded-lg bg-blackhole/80 p-4 glow">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-neon text-lg">
              <th className="pr-6 pb-2 font-semibold">Planet</th>
              <th className="pr-6 pb-2 font-semibold">Status</th>
              <th className="pr-6 pb-2 font-semibold">Volume</th>
              <th className="pr-6 pb-2 font-semibold">Holders</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((p) => (
              <tr key={p.name} className="border-b border-blackhole/40 last:border-b-0">
                <td className="py-2">{p.name}</td>
                <td className={`py-2 font-bold ${statusColor(p.status)}`}>{p.status}</td>
                <td className="py-2">{p.volume.toLocaleString()}</td>
                <td className="py-2">{p.holders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}