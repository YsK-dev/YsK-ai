import { Button } from '@/components/ui/button'
import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
    return (
        <div className='flex justify-center my-40 items-center'>
            <SignIn />
        </div>


    )
}

export default SignInPage
