import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const UpdateModal = ({ infodata, setInfoData, refetch }) => {

    const [isOpen, setOpen] = useState(false)
    const [attendence, setAttendence] = useState(false)
    const [mess, setMess] = useState(false)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        setLoading(true)
        const name = data.name
        const email = data.email
        const checkin = data.checkin
        const checkout = data.checkout
        const isActive = data.activity
        const picture = infodata?.picture
        const dayOne = {
            oneAtten: data.oneAtten,
            oneMess: data.oneMess
        }
        const dayTwo = {
            twoAtten: data?.twoAtten,
            twoMess: data?.twoMess
        }
        const dayThree = {
            threeAtten: data.threeAtten,
            threeMess: data.threeMess
        }
        const dayFour = {
            fourAtten: data.fourAtten,
            fourMess: data.fourMess
        }
        const dayFive = {
            fiveAtten: data.fiveAtten,
            fiveMess: data.fiveMess
        }
        const daySix = {
            sixAtten: data.sixAtten,
            sixMess: data.sixMess
        }
        const daySeven = {
            sevenAtten: data.sevenAtten,
            sevenMess: data.sevenMess
        }

        const updatedata = {
            name,
            email,
            isActive,
            picture,
            checkin,
            checkout,
            dayOne,
            dayTwo,
            dayThree,
            dayFour,
            dayFive,
            daySix,
            daySeven
        }

        axios.put(`${process.env.REACT_APP_API_URL}/tenantsinfo/${infodata?._id}`, updatedata)
            .then(res => {
                console.log(res.data)
                if (res?.data?.acknowledged === true) {
                    // setInfoData(null)
                    toast.success("Info updated Successfully")
                    setLoading(false)
                    refetch()
                }
                else {
                    toast.error("Check your network connection")
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("Check your network connection")
                setLoading(false)
            })

        console.log(updatedata)
    };

    return (
        <div>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                    Update Info
                                </h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                <div>
                                    <div className='flex items-center gap-3 flex-col md:flex-row my-2 w-full'>
                                        <div className='w-full'>
                                            <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Name</label>

                                            <input type="name" placeholder="username" class=" w-full placeholder-gray-400/70 text-sm rounded-lg border border-gray-200 bg-white px-5 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                defaultValue={infodata?.name}
                                                {...register("name")}

                                            />
                                        </div>
                                        <div className='mt-2 md:mt-0 w-full'>
                                            <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

                                            <input type="email" placeholder="john@example.com" class=" block w-full placeholder-gray-400/70 text-sm rounded-lg border border-gray-200 bg-white px-5 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                defaultValue={infodata?.email}
                                                {...register("email")}

                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 my-2 flex-col md:flex-row w-full'>
                                        <div className='w-full'>
                                            <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Check In</label>

                                            <input type="date" class="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 text-sm rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                defaultValue={infodata?.checkin}
                                                {...register("checkin")}

                                            />
                                        </div>
                                        <div className='mt-2 md:mt-0 w-full'>
                                            <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Check Out</label>

                                            <input type="date" class="block text-sm w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                defaultValue={infodata?.checkout}

                                                {...register("checkout")}
                                            />
                                        </div>
                                        <div className='mt-2 md:mt-0 w-full'>
                                            <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Activity</label>

                                            <select class="text-sm block placeholder-gray-400/70 rounded-lg border w-full border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                defaultValue={infodata?.isActive}
                                                {...register("activity")}
                                            >
                                                <option selected value="false">Absence</option>
                                                <option value="true">Present</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div>
                                        <div>
                                            <div className='flex items-center justify-between my-2'>
                                                <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Date</label>
                                                <div className='flex items-center gap-5 mr-5'>
                                                    <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Attendence</label>
                                                    <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Mess</label>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">09/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class=" block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayOne?.oneAtten}
                                                        {...register("oneAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayOne?.oneMess}
                                                        {...register("oneMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">10/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class="text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayTwo?.twoAtten}
                                                        {...register("twoAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayTwo?.twoMess}
                                                        {...register("twoMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">11/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class=" text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayThree?.threeAtten}
                                                        {...register("threeAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayThree?.threeMess}
                                                        {...register("threeMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">12/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class="text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayFour?.fourAtten}
                                                        {...register("fourAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayFour?.fourMess}
                                                        {...register("fourMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">13/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class="text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayFive?.fiveAtten}
                                                        {...register("fiveAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.dayFive?.fiveMess}
                                                        {...register("fiveMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">14/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class="text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.daySix?.sixAtten}
                                                        {...register("sixAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block text-xs placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.daySix?.sixMess}
                                                        {...register("sixMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between mb-3'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">15/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <select class=" text-xs block placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.daySeven?.sevenAtten}
                                                        {...register("sevenAtten")}
                                                    >
                                                        <option selected value="absence">Absence</option>
                                                        <option value="present">Present</option>
                                                    </select>
                                                    <select class="block placeholder-gray-400/70 rounded-lg border text-xs border-gray-200 bg-white px-5 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        defaultValue={infodata?.daySeven?.sevenMess}
                                                        {...register("sevenMess")}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option selected value="no">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button onClick={() => setInfoData(null)} type="button"
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit"
                                    class="inline-block w-44 h-9 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                    {
                                        loading ?
                                            <SmallSpinner />
                                            :
                                            "Save changes"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateModal;













