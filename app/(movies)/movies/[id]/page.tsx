import { Suspense } from "react"
import MoviesInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"


export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            <h2>Movie Loading Page</h2>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MoviesInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}

