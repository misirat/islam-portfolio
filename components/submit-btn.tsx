import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const SubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <button className='group mx-auto h-[3rem] w-[8rem] bg-gray-900
         text-white rounded-full outline-none transition-all
                flex items-center justify-center focus:scale-110
                 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:bg-opacity-65 disabled:scale-100'
            type='submit'
            disabled={pending} >
            {pending ? <div className='w-5 h-5 rounded-full animate-spin border-b-2'></div> : <>Submit{" "}<FaPaperPlane className='text-xs opacity-70 transition-all
                    group-hover:translate-x-1 group-hover:-translate-y-1' /></>}
        </button>
    )
}

export default SubmitBtn