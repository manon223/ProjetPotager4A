import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Navbar(){
    return(
        <nav
            className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex items-center  p-4">
                <Link href="/">
                 <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Mon potager</span>
                </Link>

                <div className="flex-1 flex justify-center">
                    <ul className="flex space-x-8 front-normal text-lg ">
                    <li>
                        <a href="/mesPlantes"
                           className=" py-2 px-3 text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">Mes plantes</a>
                    </li>
                    <li>
                        <a href="/donneesAnalytiques"
                           className=" py-2 px-3 text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">Données analytiques</a>
                    </li>
                    <li>
                        <a href="/ajouterPlante"
                           className=" py-2 px-3 text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">Ajouter une plante</a>
                    </li>
                </ul>
                </div>


                    <a href="/login" className="ml-auto p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <UserCircleIcon className="h-8 w-8 text-gray-700 dark:text-white" />
                    </a>



            </div>
        </nav>
    )
}