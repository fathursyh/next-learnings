import { useParams } from "next/navigation"

export default function BlogDetail({params}) {
    const {slug} = params;
    return (
        <>
            <p>detail</p>
            <p>{slug}</p>
        </>
    )
}