import { Link } from "react-router-dom"

function NavbarBtn() {
    return (
        <div className="flex flex-wrap justify-evenly items-end w-full pb-8 max-sm:pb-0 gap-8 max-sm:mt-8">
            <button className="w-40 h-16 border-none text-xl font-semibold bg-gray-300 bg-opacity-85 text-black hover:bg-gray-900 hover:-translate-y-2 hover:text-white">
                <Link to="/">Alaska</Link>
            </button>
            <button className="w-40 h-16 border-none text-xl font-semibold bg-gray-300 bg-opacity-85 text-black hover:bg-gray-900 hover:-translate-y-2 hover:text-white">
                <Link to="/Iceland">Iceland</Link>
            </button>
            <button className="w-40 h-16 border-none text-xl font-semibold bg-gray-300 bg-opacity-85 text-black hover:bg-gray-900 hover:-translate-y-2 hover:text-white">
                <Link to="/Ecuador">Ecuador</Link>
            </button>
            <button className="w-40 h-16 border-none text-xl font-semibold bg-gray-300 bg-opacity-85 text-black hover:bg-gray-900 hover:-translate-y-2 hover:text-white">
                <Link to="/Norway">Norway</Link>
            </button>
            <button className="w-40 h-16 border-none text-xl font-semibold bg-gray-300 bg-opacity-85 text-black hover:bg-gray-900 hover:-translate-y-2 hover:text-white">
                <Link to="/ZambiaZimbabwe">Zambia and Zimbabwe</Link>
            </button>
        </div>
    )
}

export default NavbarBtn