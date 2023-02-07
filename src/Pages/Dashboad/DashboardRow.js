import React from 'react';

const DashboardRow = ({ data }) => {
    const { _id, name, email, picture, isActive, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven } = data
    // console.log(dayOne?.oneAtten)
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">
                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" /> */}

                    <span>#{_id.slice(20, 24)}</span>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                {
                    isActive ?
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
                <div class="flex items-center gap-x-2">
                    <img class="object-cover w-8 h-8 rounded-full" src={picture} alt="" />
                    <div>
                        <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{name}</h2>
                        <p class="text-xs font-normal text-gray-600 dark:text-gray-400">{email}</p>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className='flex items-center gap-5'>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayOne?.oneAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayOne?.oneMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayTwo?.twoAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayTwo?.twoMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayThree?.threeAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayThree?.threeMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayFour?.fourAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayFour?.fourMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayFive?.fiveAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {dayFive?.fiveMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {daySix?.sixAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {daySix?.sixMess}
                            </td>
                        </div>
                    </span>
                    <span>
                        <div className=''>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {daySeven?.sevenAtten?.slice(0, 3)}
                            </td>
                            <td class="px-2 py-1 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap border rounded">
                                {daySeven?.sevenMess}
                            </td>
                        </div>
                    </span>
                </div>
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-6">
                    <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                        data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default DashboardRow;