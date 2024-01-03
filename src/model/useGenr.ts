import useGenre from "./useGenre";
export default function useGenr(id:number)
{
    const {data}=useGenre();
    const genre=data?.results.find(g=>id===g.id);
    return {genre}
}