import usePlatforms from "./usePlatforms"
export default function usePlatform(id:number) {
    const { data } = usePlatforms();
    const platform=data?.results.find(p=>p.id===id)
    return {platform}
}
