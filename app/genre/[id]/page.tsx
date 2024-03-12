import React from 'react'

type Props = {
    params: {
        id: string
    };
    searchParams: {
        genre: string
    }
}

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    console.log(id, genre);
    return (
        <div>GenrePage</div>
    )
}

export default GenrePage;