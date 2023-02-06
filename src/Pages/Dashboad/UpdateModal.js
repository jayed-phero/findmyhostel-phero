import React, { useState } from 'react';

const UpdateModal = ({ }) => {

    const [isOpen, setOpen] = useState(false)
    const [attendence, setAttendence] = useState(false)
    const [mess, setMess] = useState(false)
    return (
        <div>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                Update Info
                            </h5>
                            <button type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4">
                            <form>
                                <div>
                                    <div className='flex items-center gap-3 flex-col md:flex-row'>
                                        <div className='mb-2'>
                                            <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

                                            <input type="email" placeholder="john@example.com" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                        </div>
                                        <div className='mb-2'>
                                            <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Name</label>

                                            <input type="name" placeholder="username" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className='flex items-center justify-between my-3'>
                                            <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Date</label>
                                                <div className='flex items-center gap-5 mr-5'>
                                                    <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Attendence</label>
                                                    <label for="email" class="block text-sm font-semibold text-gray-500 dark:text-gray-300">Mess</label>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">11/02/23</label>
                                                <div className='flex itmes-center gap-5'>
                                                    <div>
                                                        <div onClick={() => setAttendence(!attendence)} class={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  dark:bg-gray-800  cursor-pointer ${attendence ? 'bg-emerald-100/60' : 'bg-pink-100/60'}`}>
                                                            <span class={`h-1.5 w-1.5 rounded-full ${attendence ? 'bg-emerald-500' : 'bg-pink-100/60'}`}></span>

                                                            <h2 class={`text-sm font-normal ${attendence ? 'text-emerald-500':  'text-pink-500 bg-pink-100/60'}`}>{attendence ? 'Present' : "Absence"}</h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => setMess(!mess)} class="px-5 py-1 text-sm text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">{mess ? "Yes" : "No"}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div
                            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateModal;















{/* <div x-data="{ isOpen: true }" class="relative flex justify-center">
                <button onClick={() => setOpen(!isOpen)} class="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Open Modal
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'}`}
                    x-transition:enter="transition duration-300 ease-out"
                    x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
                    x-transition:leave="transition duration-150 ease-in"
                    x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
                    x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    class="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title" role="dialog" aria-modal="true"
                >
                    <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                Invite your team
                            </h3>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Your new project has been created. Invite your
                                team to collaborate on this project.
                            </p>

                            <form class="mt-4" action="#">
                                <label for="emails-list" class="text-sm text-gray-700 dark:text-gray-200">
                                    Email address
                                </label>

                                <label class="block mt-3" for="email">
                                    <input type="email" name="email" id="email" placeholder="user@email.xyz" value="devdhaif@gmail.com" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label class="block mt-3" for="email">
                                    <input type="email" name="email" id="email" placeholder="user@email.xyz" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label class="block mt-3" for="email">
                                    <input type="email" name="email" id="email" placeholder="user@email.xyz" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <button type="button" class="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>

                                    <span class="mx-2">Add another</span>
                                </button>


                                <div class="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button type="button" onClick={() => setOpen(!isOpen)} class="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                        Cancel
                                    </button>

                                    <button type="button" class="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                        Send invites
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}