import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import BlogContent from "../BlogContent";
import Footer from "../Footer";
import Navbar from "../NavBar";
import BF1Img from "../../../public/banners/BF1.svg";
import BF2Img from "../../../public/banners/BF2.svg";
import BF3Img from "../../../public/banners/BF3.svg";
import BF4Img from "../../../public/banners/BF4.svg";
import { useRouter } from "next/router";

interface BodyProps {
    children: ReactElement;
}
const Body = ({ children }: BodyProps) => {
    const [showBanner, setShowBanner] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.asPath !== "/") {
            setShowBanner(true);
        } else {
            setShowBanner(false);
        }
    }, [router]);
    return (
        <>
            <Navbar />
            <div className="w-full bg-primary">
                {showBanner == true ? (
                    <div className="w-full justify-around gap-5 max-w-7xl mx-auto pt-36 flex">
                        <Image src={BF1Img} layout="fixed"></Image>
                        <Image src={BF2Img} layout="fixed"></Image>
                        <Image src={BF3Img} layout="fixed"></Image>
                        <Image src={BF4Img} layout="fixed"></Image>
                    </div>
                ) : (
                    ""
                )}
                <div
                    className={
                        "bg-primary py-12 mx-auto flex max-w-7xl " +
                        (showBanner === false ? "pt-36" : "")
                    }
                >
                    <div className="w-3/4 px-4">{children}</div>
                    <div className="w-1/4 px-4 flex flex-col gap-4">
                        <h1 className="text-primary-content font-bold text-2xl">
                            Quer saber mais? leia os artigos do nosso blog!
                        </h1>
                        <BlogContent />
                        <BlogContent />
                        <BlogContent />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Body;
