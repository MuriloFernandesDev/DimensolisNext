import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import BlogContent from "../BlogContent";
import Footer from "../Footer";
import Navbar from "../NavBar";
import { useRouter } from "next/router";
import Banner01Img from "../../assets/images/banners/01.png";
import Banner02Img from "../../assets/images/banners/02.png";
import Banner03Img from "../../assets/images/banners/03.png";
import axios from "axios";

interface BodyProps {
    children: ReactElement;
}

const Body = ({ children }: BodyProps) => {
    // const [showBanner, setShowBanner] = useState(false);
    const router = useRouter();
    const [BannerRouter, setBannerRouter] = useState<any>(Banner01Img);
    const [data, setData] = useState<any>();

    useEffect(() => {
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
            } catch (error) {
                console.log(error);
            }
        }
        ApiBlog();
    }, []);

    return (
        <>
            <Navbar>
                <div className="w-full pt-24 md:pt-28">
                    <Image src={BannerRouter} layout="responsive"></Image>
                </div>
                <div className="w-full bg-primary">
                    <div className="bg-primary mx-auto grid grid-cols-1 md:grid-cols-4 max-w-7xl pt-4">
                        <div className="mx-4 md:col-span-3">{children}</div>
                        <div className="px-4 flex flex-col gap-3 pt-10 md:pt-0">
                            <h1 className="text-primary-content font-bold text-2xl">
                                Quer saber mais? leia os artigos do nosso blog!
                            </h1>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 pb-5">
                                {data?.data.map((postBlog: any) => {
                                    return (
                                        <React.Fragment key={postBlog.id}>
                                            <BlogContent
                                                image={
                                                    postBlog
                                                        .better_featured_image
                                                        .media_details.sizes
                                                        .medium_large.source_url
                                                }
                                                category={postBlog.categories}
                                                title={postBlog.title.rendered}
                                                data={postBlog.date}
                                                link={postBlog.link}
                                            />
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Navbar>
        </>
    );
};

export default Body;
