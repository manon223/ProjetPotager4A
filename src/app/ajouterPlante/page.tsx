import Navbar from "@/components/Navbar";
export default function ajouterPlante(){
    return (
        <>
            <Navbar/>
            <main style={{ marginTop: '80px' }}> {/* Marge pour éviter que la navbar recouvre le titre */}
                <h1>Ajouter une plante</h1>
            </main>
        </>




    )
}
