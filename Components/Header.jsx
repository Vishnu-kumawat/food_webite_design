import { ShoppingCart } from 'lucide-react';
function Header() {
    return (
        <div className="flex bg-gray-100">
            <div className="flex items-center ml-16">
                <img className="w-28 mix-blend-multiply -mt-6" src="https://png.pngtree.com/template/20190306/ourmid/pngtree-food-and-drink-image_62453.jpg" alt="" />
                <p className="font-semibold text-2xl"> FOOD </p>
            </div>
            <div className="flex font-medium text-lg ml-60 items-center">
                <p className="p-10">Home</p>
                <p className="pr-10">About Us</p>
                <p className="pr-10">Products</p>
                <p className="pr-10">Contact Us</p>
            </div>
            <div className='flex items-center ml-60'>
                <p className='flex'> <ShoppingCart /> <sup className=' font-bold text-lg text-red-500'> 2 </sup> </p>
                <button className='bg-orange-500 text-white ml-7 font-medium text-lg px-9 py-3 rounded-3xl'> Contact Us </button>
            </div>
        </div>
    )
}

export default Header
