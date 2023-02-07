import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { postAndGetImageUrl } from '../../../api/ImageHosting';
import SmallSpinner from '../../../Shared/Spinner/SmallSpinner';

const AddTenantsModal = ({refetch}) => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {

        const name = data.name
        const email = data.email
        const checkin = data.checkin
        const checkout = data.checkout
        const isActive = data.activity
        const picture = data.picture[0]

        const dayOne = {
            oneAtten: "Absence",
            oneMess: "no"
        }
        const dayTwo = {
            twoAtten: "Absence",
            twoMess: "no"
        }
        const dayThree = {
            threeAtten: "Absence",
            threeMess: "no"
        }
        const dayFour = {
            fourAtten: "Absence",
            fourMess: "no"
        }
        const dayFive = {
            fiveAtten: "Absence",
            fiveMess: "no"
        }
        const daySix = {
            sixAtten: "Absence",
            sixMess: "no"
        }
        const daySeven = {
            sevenAtten: "Absence",
            sevenMess: "no"
        }

        setLoading(true)
        postAndGetImageUrl(picture)
            .then(imgLink => {
                console.log(imgLink)

                const updatedata = {
                    name,
                    email,
                    isActive,
                    picture: imgLink,
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

                axios.post(`${process.env.REACT_APP_API_URL}/tenantspost`, updatedata)
                    .then(res => {
                        console.log(res.data)
                        if (res?.data?.acknowledged === true) {
                            setLoading(false)
                            toast.success("Info posted Successfully")
                            refetch()
                        }
                        else {
                            toast.error("Check your network connection")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                        toast.error("Check your network connection")
                    })
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter1" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                    Modal title
                                </h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                <div class="flex justify-center">
                                    <div class="mb-3 w-full">
                                        <label for="formFileMultiple" class="form-label inline-block mb-2 text-gray-700">Photo</label>
                                        <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple"
                                         {...register("picture")}
                                        required
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 flex-col my-2 w-full'>
                                    <div className='w-full'>
                                        <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Name</label>

                                        <input type="name" placeholder="username" class=" w-full placeholder-gray-400/70 text-sm rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            {...register("name")}
                                            required

                                        />
                                    </div>
                                    <div className='mt-2 md:mt-0 w-full'>
                                        <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

                                        <input type="email" placeholder="john@example.com" class=" block w-full placeholder-gray-400/70 text-sm rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            {...register("email")}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 my-2 flex-col md:flex-row w-full'>
                                    <div className='w-full'>
                                        <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Check In</label>

                                        <input type="date" class="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 text-sm rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            {...register("checkin")}
                                            required

                                        />
                                    </div>
                                    <div className='mt-2 md:mt-0 w-full'>
                                        <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Check Out</label>

                                        <input type="date" class="block text-sm w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            {...register("checkout")}
                                        />
                                    </div>
                                    <div className='mt-2 md:mt-0 w-full'>
                                        <label for="Birthday" class="block text-sm text-gray-500 dark:text-gray-300">Activity</label>

                                        <select class="text-sm block placeholder-gray-400/70 rounded-lg border w-full border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            {...register("activity")}
                                            required
                                        >
                                            <option selected value="false">Absence</option>
                                            <option value="true">Present</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button"
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

export default AddTenantsModal;