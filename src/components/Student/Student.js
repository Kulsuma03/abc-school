import React from 'react';

const Student = ({student}) => {
    const {picture, studentClass, name } =student
    console.log(picture)
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={picture}
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            
                            {name}
                           
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Simple is better"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Simple is better
                        </a>
                        <p className="mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
    );
};

export default Student;