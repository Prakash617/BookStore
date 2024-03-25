import React, { useState } from 'react'
import { Input } from '../ui/input'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Search } from 'lucide-react'

type Props = {}

const SearchBar = (props: Props) => {
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <>
            <div className='flex gap-3 items-center relative' onClick={() => setOpenSearch(true)}>
                <Input readOnly className='text-lg pl-10' placeholder='What do you want to read?' />
                <Search className='absolute left-2 text-sky-600' />
            </div>

            <Dialog open={openSearch} onOpenChange={setOpenSearch}>
                <DialogContent className="sm:max-w-[425px] md:max-w-[800px] min-h-[400px] sm:rounded-3xl border-4 border-gray-300"
                    // customClose={'esc'}
                >
                    <DialogHeader>
                        <DialogTitle>
                            <div className='flex gap-3 items-center relative' onClick={() => setOpenSearch(true)}>
                                <Input className='text-xl pl-10 bg-transparent border-t-0 border-r-0 border-l-0' placeholder='Search By Title, Author, Keyword or ISBN' />
                                <Search className='absolute left-2 text-sky-600' />
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">

                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SearchBar