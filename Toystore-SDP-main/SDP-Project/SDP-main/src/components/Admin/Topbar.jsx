import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'


const Topbar = () => {
    
    return (
        <div className='h-[8vh] w-full bg-purple-200 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-4'>
                <Avatar>
                    <AvatarImage src="https://tse3.mm.bing.net/th?id=OIP.X724THjwrgTin7s4EmLnfgHaFL&pid=Api&P=0&h=180" alt="@shadcn" />
                    <AvatarFallback>ToysStore</AvatarFallback>
                </Avatar>
                
            </div>
        </div>
    )
}

export default Topbar