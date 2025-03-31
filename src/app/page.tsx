import Navbar from "@/components/Navbar";
export default function Home(){
  return (
      <>
        <Navbar/>
        <main style={{ marginTop: '100px' }}> {/* Marge pour éviter que la navbar recouvre le titre */}

            <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="bg-green-100 p-4 rounded-lg text-center">
                <h2 className="font-semibold">Météo</h2>
                    <p>Cachan</p>
                </div>

            </div>
        </main>
      </>




  )
}
