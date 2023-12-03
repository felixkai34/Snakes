import React from 'react';
import { Link } from 'react-router-dom';
import Datas from '../Data.json';

function Posts() {
 return (
    <div className='max-w-xs md:max-w-full lg:max-w-screen-lg mx-auto'>
		<div className=' flex justify-center items-center my-10'>
			<img className=' w-20 mr-5' src="https://cdn-icons-png.flaticon.com/512/616/616653.png "/>
			<h1 className=' text-5xl text-white font-semibold'>SNAKES</h1>
		</div>
		
		<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5'>
			{Datas.map((data) => (
				<div key={data.Id} className="border rounded-lg shadow bg-gray-800 border-gray-700">
					<img className="rounded-t-lg w-full aspect-square" src={`/${data.Img}`} />
					<div className="p-5">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.MMName}</h5>
						<p className="mb-3 font-normal text-gray-400">{data.EngName}</p>
						<Link to={`/${data.Id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:outline-none bg-blue-600 hover:bg-blue-700">
							Read more
							<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
							</svg>
						</Link>
					</div>
				</div>
			))}
		</div>
	  
    </div>
 );
}

export default Posts;