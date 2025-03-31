import Navbar from "@/components/Navbar";
export default function Home(){
  return (
      <>
        <Navbar/>
        <main style={{ marginTop: '80px' }}> {/* Marge pour éviter que la navbar recouvre le titre */}
          <h1>Home</h1>
        </main>
      </>




  )
}
