import  Button from "@/components/Button"



export default function MyComponent() {
    return (
        <div>
            <nav>
                <div className='bg-[#042133] py-3'>
                    <ul className="flex list-none items-center justify-between px-6">
                        <h1 className="font-semibold">Arisefunds</h1>
                        <img src="/logo.png" alt="logo" className="w-12 h-15"/>

                        <div className="flex gap-8 text-sm font-medium">
                            <li>Home</li>
                            <li>How we work</li>
                            <li>ICBM</li>
                            <li>Partners</li>
                            <li>Contact</li>
                        </div>

                        <Button />
                    </ul>
                </div>
            </nav>
        </div>
    );
}