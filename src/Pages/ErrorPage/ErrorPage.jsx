import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section>

            <div className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-[#0070dc]">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-sm font-semibold md:text-2xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 text-sm mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'} rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded  "><button className="btn bg-[#0070dc] text-white text-base rounded-full">Back to home</button> </Link>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default ErrorPage;