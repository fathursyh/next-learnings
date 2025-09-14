import Link from "next/link";

export default function BlogPage() {
    return (
        <>
            <p>Home for blogs</p>
            <Link href={'/blogs/1'}>1</Link>
            <Link href={'/blogs/2'}>2</Link>
            <Link href={'/blogs/3'}>3</Link>
        </>
    )
}