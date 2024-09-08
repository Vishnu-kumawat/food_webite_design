function Blog() {
    return (
        <div style={{height: '83vh'}}>
            <div className="text-center mt-14">
                <button className="bg-orange-100 text-orange-600 font-semibold rounded-2xl m-auto px-9 py-2 mb-9">LATEST BLOG</button>
                <p className="font-bold text-5xl">Our Latest Food News</p>
            </div>
            <div className="flex justify-around mt-16 mx-36">
                <div className="w-80 border rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
                    <img className="rounded-t-3xl" src="https://img.freepik.com/premium-photo/photo-vector-fresh-tasty-flying-burger-air-with-vegetables-with-background_747771-55.jpg" alt="" />
                    <div className="mx-3">
                        <p className="mt-4">Jan 15 2024</p>
                        <p className="font-semibold text-lg">Burger with French Fries and red cabbage salad</p>
                        <hr className="my-4 border-t-2 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                        <p className="ml-5 font-semibold text-lg">$35.00</p>
                        <button className="border rounded-xl font-medium mb-4 border-gray-300 px-5 py-1 mr-5">Read more</button>
                    </div>
                </div>
                <div className="w-80 border rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
                    <img className="rounded-t-3xl"  src="https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg" alt="" />
                    <div className="mx-3">
                        <p className="mt-4">Jan 15 2024</p>
                        <p className="font-semibold text-lg">Burger with French Fries and red cabbage salad</p>
                        <hr className="my-4 border-t-2 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                        <p className="ml-5 font-semibold text-lg">$25.00</p>
                        <button className="border rounded-xl font-medium mb-4 border-gray-300 px-5 py-1 mr-5 bg-orange-400 text-white">Read more</button>
                    </div>
                </div>
                <div className="w-80 border rounded-3xl" style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}>
                    <img className="rounded-t-3xl" src="https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg" alt="" />
                    <div className="mx-3">
                        <p className="mt-4">Jan 15 2024</p>
                        <p className="font-semibold text-lg">Burger with French Fries and red cabbage salad</p>
                        <hr className="my-4 border-t-2 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                        <p className="ml-5 font-semibold text-lg">$25.00</p>
                        <button className="border rounded-xl font-medium mb-4 border-gray-300 px-5 py-1 mr-5">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
