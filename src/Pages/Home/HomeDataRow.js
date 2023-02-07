import React from 'react';
import UpdateModal from './UpdateModal';

const HomeDataRow = ({ data, infodata, setInfoData }) => {
    const { _id, name, email, picture, isActive, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven } = data 
    return (
        <div>
            
            {/* <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
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
            </td> */}
        </div>
    );
};

export default HomeDataRow;

