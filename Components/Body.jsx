import { Heart } from 'lucide-react';

function Body() {
  return (
    <div className="flex">
      <div className="ml-14 mt-28">
        <button className="bg-orange-100 p-2 px-6 rounded-3xl text-orange-400 mb-4">
          WELCOME TO OUR RESTAURANT
        </button>
        <p className="text-7xl mb-4 font-semibold">Delicious Foods</p>
        <p className="text-7xl mb-4 font-semibold">For Every Occasion</p>
        <p className="text-7xl mb-4 font-semibold">And Festival</p>
        <div className="mt-14">
          <p className="text-gray-500">
            Delicious Foods For Every Occasion And Festival Delicious Foods
          </p>
          <p className="text-gray-500">For Every Occasion And Festival</p>
        </div>
        <button className="bg-orange-500 mt-8 px-8 py-3 rounded-3xl text-lg text-center text-white">
          Order Now
        </button>
      </div>
      <div className="w-[55vw] mt-12 relative">
        <img
          src="https://img.freepik.com/free-photo/vegan-farfalle-pasta-with-spinach-sauce-with-fried-chickpeas_2829-18274.jpg?t=st=1725781914~exp=1725785514~hmac=de5eec253c25048c6d9b4156b682c78a415241e7445594d6cdff1c1566e88b58&w=1060"
          alt=""
        />
        <div
          className="border w-44 rounded-2xl absolute bg-gray-200"
          style={{
            bottom: '20px',
            left: '250px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          <img
            className="w-36 ml-3 my-2 rounded-2xl bg-gray-300"
            src={('../Utils/Images/Tomato salad.png')}
            alt=""
          />
          <p className="font-bold flex justify-around">
            Salad Special <Heart />
          </p>
          <p className="font-bold p-3">⭐ 5.0</p>
        </div>
        <div
          className="border w-44 h-[200px] rounded-2xl absolute bg-gray-200"
          style={{
            bottom: '100px',
            left: '450px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          <img
            className="w-36 ml-3 my-2 rounded-2xl bg-gray-300"
            src={('../Utils/Images/Barbeque chicken.png')}
            alt=""
          />
          <p className="font-bold pl-3 flex justify-around mt-3">
            Good For Health <Heart />
          </p>
          <p className="font-bold p-3">⭐ 5.0</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
