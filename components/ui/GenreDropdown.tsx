import React from 'react';
import { Genres } from '@/typings';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

async function GenreDropdown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }

    const response = await fetch(url, options);
    const data = (await response.json()) as Genres;

    console.log(data)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Genre</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    data.genres.map((genre) => (
                        <DropdownMenuItem key={genre.id}>
                            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                                {genre.name}
                            </Link>
                        </DropdownMenuItem>
                    ))
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropdown;