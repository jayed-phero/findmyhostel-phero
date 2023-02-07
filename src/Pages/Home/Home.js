import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UpdateModal from './UpdateModal';
const Home = () => {
    const [infodata, setInfoData] = useState(null)

    const { data: teneantsData = [], isLoading, refetch } = useQuery({
        queryKey: ['ucevents'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/teneants`)
            .then(res => res.json())

    })

    console.log(teneantsData)
    return (
        <div className='bg-gray-100 min-h-screen'>
            <section class="max-w-7xl py-5 px-4 mx-auto">
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white">Tenants numbers</h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">00{teneantsData?.length} tenants</span>
                </div>


                <div class="flex flex-col mt-6 mx-4 md:mx-0">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle ">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div class="flex items-center gap-x-3">
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-2">
                                                    <span>Status</span>

                                                    <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                <div className='flex items-center gap-6'>
                                                    <span>
                                                        <h3>09/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>10/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>11/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>12/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>13/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>14/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                    <span>
                                                        <h3>15/02/23</h3>
                                                        <p className='available'>Availability &</p>
                                                        <p className='available'>Mess Availability</p>
                                                    </span>
                                                </div>
                                            </th>


                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Check In/ Check Out</th>

                                            <th scope="col" class="relative py-3.5 px-4">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            teneantsData.map(data =>
                                                <tr>
                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div class="inline-flex items-center gap-x-3">

                                                            <div class="flex items-center gap-x-2">
                                                                <img class="object-cover w-10 h-10 rounded-full" src={data.picture} alt="" />
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 dark:text-white ">{data.name}</h2>
                                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@{data.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {
                                                            data?.isActive ?
                                                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>

                                                                    <h2 class="text-sm font-normal">Active</h2>
                                                                </div>
                                                                :
                                                                <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>

                                                                    <h2 class="text-sm font-normal">Cancelled</h2>
                                                                </div>
                                                        }
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className='flex items-center gap-5'>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayOne?.oneAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayOne?.oneAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayOne?.oneMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayOne?.oneMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayTwo?.twoAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayTwo?.twoAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayTwo?.twoMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayTwo?.twoMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayThree?.threeAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayThree?.threeAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayThree?.threeMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayThree?.threeMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayFour?.fourAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayFour?.fourAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayFour?.fourMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayFour?.fourMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayFive?.fiveAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayFive?.fiveAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.dayFive?.fiveMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.dayFive?.fiveMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.daySix?.sixAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.daySix?.sixAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.daySix?.sixMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.daySix?.sixMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className=''>
                                                                    <td class={`px-2 py-1 text-xs  dark:text-gray-300 whitespace-nowrap border rounded ${data?.daySeven?.sevenAtten === 'present' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.daySeven?.sevenAtten?.slice(0, 3)}
                                                                    </td>
                                                                    <td class={`px-2 py-1 text-xs dark:text-gray-300 whitespace-nowrap border rounded ${data?.daySeven?.sevenMess === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data?.daySeven?.sevenMess}
                                                                    </td>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-2">
                                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">{data?.checkin ? data.checkin : "00-00-0000"}</p>
                                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">{data?.checkout ? data.checkout : "00-00-0000"}</p>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-6">

                                                            <button onClick={() => setInfoData(data)} class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                                                data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6">
                    <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            previous
                        </span>
                    </a>

                    <div class="items-center hidden lg:flex gap-x-3">
                        <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                        <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                    </div>

                    <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span>
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </section>
            {
                infodata &&

                <UpdateModal
                    infodata={infodata}
                    setInfoData={setInfoData}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default Home;