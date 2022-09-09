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
import Banner01Img from "../../../public/banners/01.png";
import Banner02Img from "../../../public/banners/02.png";
import Banner03Img from "../../../public/banners/03.png";
import axios from "axios";

interface BodyProps {
    children: ReactElement;
}

const Body = ({ children }: BodyProps) => {
    const [showBanner, setShowBanner] = useState(false);
    const router = useRouter();
    const [BannerRouter, setBannerRouter] = useState<any>(Banner01Img);
    const [data, setData] = useState<any>();

    useEffect(() => {
        if (router.asPath !== "/") {
            setShowBanner(true);
        } else {
            setShowBanner(false);
        }
        if (router.asPath === "/") {
            setBannerRouter(Banner01Img);
        } else if (router.asPath === "/banho") {
            setBannerRouter(Banner02Img);
        } else if (router.asPath === "/piscina") {
            setBannerRouter(Banner03Img);
        }
    }, [router]);

    useEffect(() => {
        async function ApiBlog() {
            try {
                const response = await axios.get(
                    "https://solissolar.com.br/wp-json/wp/v2/posts?per_page=3"
                );
                setData(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        ApiBlog();
    }, []);

    return (
        <>
            <Navbar />
            <div className="w-full pt-28">
                <Image src={BannerRouter} layout="responsive"></Image>
            </div>
            <div className="w-full bg-primary">
                {showBanner == true ? (
                    <div className="w-full justify-around gap-5 max-w-7xl mx-auto flex">
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
                        "bg-primary mx-auto flex max-w-7xl " +
                        (showBanner === false ? "py-10" : "")
                    }
                >
                    <div className="w-3/4 px-4">{children}</div>
                    <div className="w-1/4 px-4 flex flex-col gap-4">
                        <h1 className="text-primary-content font-bold text-2xl">
                            Quer saber mais? leia os artigos do nosso blog!
                        </h1>
                        {data?.data.map((postBlog: any) => {
                            return (
                                <BlogContent
                                    id={postBlog.id}
                                    image={
                                        "https://solissolar.com.br/wp-content/uploads/2022/08/miniatura_tp-min.jpg"
                                    }
                                    category={"teste"}
                                    title={postBlog.title.rendered}
                                    data={postBlog.date}
                                    link={postBlog.link}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Body;
