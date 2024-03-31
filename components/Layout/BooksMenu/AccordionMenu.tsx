
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

let categorylist = [
    {
        title: "Arts & Photography",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Foreign Langauge",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Technology",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Arts & Photography",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Foreign Langauge",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Foreign Langauge",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },
    {
        title: "Travel",
        genre: [
            { name: "All" },
            { name: "Acrehitecture" },
            { name: "Design" },
            { name: "Music" },
            { name: "Picture" },
            { name: "Art" }
        ]
    },

]

const AccordionMenu = () => {

    return (
        <>
            <Accordion type="single" collapsible className="col-span-3 overflow-y-auto">
                {
                    categorylist.map((category: any, categoryIndex: number) => {
                        return (
                            <AccordionItem className='bg-gray-100' value={`category-${categoryIndex + 1}`} key={categoryIndex}>
                                <AccordionTrigger className='hover:no-underline px-5 text-xl'>{category.title}</AccordionTrigger>
                                <AccordionContent className='bg-white px-5'>
                                    {category.genre.map((genre: any, genreIndex: number) => {
                                        return (
                                            <Link href={'#'} key={genreIndex}>
                                                <div  className='p-2 text-gray-800 text-md rounded-md hover:bg-blue-200' >
                                                    {genre.name}
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }
                    )
                }
            </Accordion>
        </>
    )
}

export default AccordionMenu
