import { Instagram, Twitter, Facebook, Github } from 'lucide-react';
function Footer() {
  return (
    <div>
      <div className="flex bg-black text-white">
        <div className="flex items-center ml-16 " >
          <img className="w-28" src="https://png.pngtree.com/template/20190306/ourmid/pngtree-food-and-drink-image_62453.jpg" alt="" />
          <p className="font-semibold text-2xl"> FOOD </p>
        </div>
        <div className="flex font-medium text-lg ml-60 items-center">
          <p className="p-10">Home</p>
          <p className="pr-10">About Us</p>
          <p className="pr-10">Products</p>
          <p className="pr-10">Quality</p>
        </div>
        <div className='flex items-center ml-60'>
          <p className='mx-6 p-2 rounded-full bg-orange-400'> <Instagram /> </p>
          <p className='mr-6 p-2 rounded-full bg-orange-400'> <Twitter /> </p>
          <p className='mr-6 p-2 rounded-full bg-orange-400'> <Facebook /> </p>
          <p className='mr-6 p-2 rounded-full bg-orange-400'> <Github /> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
