import  Button from "@/components/Button"



import Link from "next/link";

export default function MyComponent() {
    return (
        <div>
            <nav>
                <div className='bg-[#042133] py-1 text-[#FFF]'>
                    <ul className="flex list-none items-center justify-between px-6">
                        <div className="flex items-center ml-20">
                            <h1 className="font-semibold text-xl text-heavy">Arisefunds</h1>
                            <img src="/logo.png" alt="logo" className="w-14 h-17 mt-5"/>
                        </div>

                        <div className="flex gap-8 text-sm font-medium">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/how-we-work">How we work</Link></li>
                            <li><Link href="/icbm">ICBM</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </div>

                        <Button />
                    </ul>
                </div>
            </nav>
        </div>
    );
}