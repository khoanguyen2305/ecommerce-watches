import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar () {
    return (
        <nav className="px-4 md:px-12 py-4 md:py-6">
            <div className="flex items-center justify-between">
                <Link href="/" className="hidden md:inline-block text-lg font-semibold">
                    <h1>
                        W<span className="text-blue-500">atches</span>
                    </h1>
                </Link>
                <div className="relative max-w-full md:w-[400px]">
                    <div className="absolute inset-y-0 start-0 flex items-center px-2 pointer-events-none">
                        <Search className="w-5 h-5"/>
                    </div>
                    <Input type="text" className="h-10 relative px-8 text-sm w-full py-2 border-2" placeholder="Tìm kiếm"/>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle/>
                    <Link href="/add-product" className="">
                        <Button className="cursor-pointer">Add Product</Button>
                    </Link>
                </div>   
            </div>
        </nav>
    )
}