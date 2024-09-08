// function PopularFood() {
//   return (
//     <div className="h-screen bg-gray-100">
//       <div>
//         <p className="text-6xl font-semibold text-center pt-24">Our Popular Foods Menu</p>
//       </div>
//       <div className="flex justify-around mx-24">
//         <div>
//           <img className="w-56 m-4 rounded-full mix-blend-multiply relative top-20" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }} src={('../Utils/Images/Tomato salad.png')} alt="" />
//           <div className="border w-64 pt-28 text-center rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
//             <p className="text-xl font-semibold pb-4">Tomato Salad</p>
//             <p className="text-gray-600 text-lg pb-4">Vegetable</p>
//             <p className="text-2xl font-semibold pb-10"> $25 </p>
//           </div>
//         </div>
//         <div>
//           <img className="w-56 m-4 rounded-full mix-blend-multiply relative top-20" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }} src={('../Utils/Images/Noodles cooking.png')} alt="" />
//           <div className="border w-64 pt-28 text-center rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
//             <p className="text-xl font-semibold pb-4">Noodles Cooking</p>
//             <p className="text-gray-600 text-lg pb-4">Vegetable</p>
//             <p className="text-2xl font-semibold pb-10"> $25 </p>
//           </div>
//         </div>
//         <div>
//           <img className="w-56 ml-4 object-cover rounded-full mix-blend-multiply relative mt-11 top-20 " style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }} src={('../Utils/Images/Barbeque chicken.png')} alt="" />
//           <div className="border w-64 pt-28 text-center rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
//             <p className="text-xl font-semibold pb-4">Barbecue Chicken</p>
//             <p className="text-gray-600 text-lg pb-4">Chicken</p>
//             <p className="text-2xl font-semibold pb-10"> $25 </p>
//           </div>
//         </div>
//         <div>
//           <img className="w-56 mt-5 m-4 rounded-full mix-blend-multiply relative top-20" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }} src={('../Utils/Images/Delicious Food.png')} alt="" />
//           <div className="border w-64 pt-28 text-center rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
//             <p className="text-xl font-semibold pb-4">Delicious Food</p>
//             <p className="text-gray-600 text-lg pb-4">Vegetable</p>
//             <p className="text-2xl font-semibold pb-10"> $25 </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PopularFood

function PopularFood() {
  return (
    <div className="h-screen bg-gray-100">
      <div>
        <p className="text-6xl font-semibold text-center pt-20">Our Popular Foods Menu</p>
      </div>
      <div className="flex justify-around mx-28 ">
        {/* Card 1 */}
        <div className="relative mt-36">
          <img
            className="w-56 h-56 rounded-full mix-blend-multiply absolute -top-24 left-1/2 transform -translate-x-1/2"
            style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
            src={('../Utils/Images/Tomato salad.png')}
            alt=""
          />
          <div
            className="border w-64 pt-44 text-center rounded-3xl"
            style={{ height: '24rem', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
          >
            <p className="text-2xl font-semibold pb-4">Tomato Salad</p>
            <p className="text-gray-600 text-xl pb-4">Vegetable</p>
            <p className="text-3xl font-semibold pb-10"> $25 </p>
          </div>
        </div>
        <div className="relative mt-36">
          <img
            className="w-56 h-56 rounded-full mix-blend-multiply absolute -top-24 left-1/2 transform -translate-x-1/2"
            style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
            src={('../Utils/Images/Noodles cooking.png')}
            alt=""
          />
          <div
            className="border w-64 pt-44 text-center rounded-3xl"
            style={{ height: '24rem', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
          >
            <p className="text-2xl font-semibold pb-4">Noodles Cooking</p>
            <p className="text-gray-600 text-xl pb-4">Vegetable</p>
            <p className="text-3xl font-semibold pb-10"> $20 </p>
          </div>
        </div>
        <div className="relative mt-36">
          <img
            className="w-56 h-56 rounded-full mix-blend-multiply absolute -top-24 left-1/2 transform -translate-x-1/2"
            style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
            src={('../Utils/Images/Barbeque chicken.png')}
            alt=""
          />
          <div
            className="border w-64 pt-44 text-center rounded-3xl"
            style={{ height: '24rem', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
          >
            <p className="text-2xl font-semibold pb-4">Barbecue Chicken</p>
            <p className="text-gray-600 text-xl pb-4">Chicken</p>
            <p className="text-3xl font-semibold pb-10"> $90 </p>
          </div>
        </div>
        <div className="relative mt-36">
          <img
            className="w-56 h-56 rounded-full mix-blend-multiply absolute -top-24 left-1/2 transform -translate-x-1/2"
            style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
            src={('../Utils/Images/Delicious Food.png')}
            alt=""
          />
          <div
            className="border w-64 pt-44 text-center rounded-3xl"
            style={{ height: '24rem', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
          >
            <p className="text-2xl font-semibold pb-4">Delicious Food</p>
            <p className="text-gray-600 text-xl pb-4">Vegetable</p>
            <p className="text-3xl font-semibold pb-10"> $20 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularFood;
