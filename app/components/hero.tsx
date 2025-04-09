import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroWatch from "@/public/hero/Hero.png";

export default function Hero () {
    return (
        <div className="min-h-[30vh] md:min-h-[50vh] lg:min-h-[70vh] flex flex-col md:flex-row justify-center items-center px-4 md:px-10 ">
            <div className="max-w-4xl px-4 py-4">
                <h1 className="text-4xl pt-6 md:pt-0 md:text-7xl font-semibold">Sự thanh lịch vượt thời gian trên cổ tay bạn</h1>
                <p className="mt-4 text-md">Khám phá bộ sưu tập đồng hồ cao cấp được tuyển chọn của chúng tôi, được chế tác dành cho những người đánh giá cao sự tinh tế và chính xác</p>
                <Link href="#">
                    <Button className="mt-8 cursor-pointer">Bộ sưu tập mua sắm</Button>
                </Link>
            </div>

            <div>
                <Image src={HeroWatch} alt="" width={700} height={700}></Image>
            </div>
        </div>
    )
}