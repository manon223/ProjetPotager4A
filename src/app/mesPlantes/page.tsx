import Navbar from "@/components/Navbar";
export default function mesPlantes(){
    return(
        <>
            <Navbar />
            <main style={{ marginTop: '80px' }}> {/* Marge pour éviter que la navbar recouvre le titre */}
                <h1>Mes Plantes</h1>
            </main>
        </>
    );
}