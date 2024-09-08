import { Award, UtensilsCrossed, HandPlatter } from 'lucide-react';
function About() {
    return (
        <div className='mb-16'>
            <div>
                <div className="mt-32 text-7xl text-center font-semibold"> About The Company </div>
            </div>
            <div className='grid grid-cols-3 mt-20 mx-40'>
                <div className="flex flex-col items-center text-center">
                    <p className='text-orange-500 w-32 h-32 flex justify-center items-center bg-orange-100 rounded-full'>
                        <Award style={{ width: '80px', height: '80px' }} />
                    </p>
                    <p className='text-2xl font-medium my-5'>More Than 10 Years</p>
                    <p>We have a great pleasure in introducing our</p>
                    <p>Concern being the leaders in the field</p>
                    <p>Food Products. We have been serving the end</p>
                    <p>Users and Consumers.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className='text-orange-500 w-32 h-32 flex justify-center items-center bg-orange-100 rounded-full'>
                        <UtensilsCrossed style={{ width: '80px', height: '80px' }} />
                    </p>
                    <p className='text-2xl font-medium my-5'>Cutting-Edge Infrastructure</p>
                    <p>Well equipped and had total infrasturcture of</p>
                    <p>most modern plant and machinery and </p>
                    <p>automated while in the process of making</p>
                    <p>the following.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className='text-orange-500 w-32 h-32 flex justify-center items-center bg-orange-100 rounded-full'>
                        <HandPlatter style={{ width: '80px', height: '80px' }} />
                    </p>
                    <p className='text-2xl font-medium my-5'>Discover Our Acclaimed Products</p>
                    <p>All these products are widely acclaimed due</p>
                    <p>to its highlighting features like fresh &</p>
                    <p>healthy, low calorie, adulteration free, longer</p>
                    <p>shelf life.</p>
                </div>

            </div>
        </div>
    );
}

export default About;
