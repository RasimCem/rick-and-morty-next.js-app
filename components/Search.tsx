import { SearchProps } from "@/types";
import { useState } from 'react';


const Search = ({ handleSubmit, placeHolder, searchQuery, setSearchQuery }): SearchProps => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-md mx-auto mb-10">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500" placeholder={placeHolder} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search;