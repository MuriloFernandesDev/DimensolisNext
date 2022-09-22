import Image from "next/image";
import ImageBlog from "../../assets/images/BlogPost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { date } from "../../utils/masks";

interface BlogContentProps {
    image: string;
    category: any;
    title: string;
    data: string;
    link: string;
}

const BlogContent = ({
    image,
    category,
    title,
    data,
    link,
}: BlogContentProps) => {
    const TitleReplace = title.replace(/3M&#8217;s/g, "");
    return (
        <Link href={link} passHref>
            <a target={"_blank"}>
                <div className="card card-compact w-full h-full drop-shadow-sm shadow-black border-2 bg-primary transition-all md:hover:scale-105 duration-300 md:hover:shadow-xl">
                    <div className="card-body flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="bg-warning w-full pb-1 rounded-md">
                                <img
                                    className="rounded-t-md"
                                    src={image}
                                    alt="Imagem"
                                ></img>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.map((response: any) => {
                                    return (
                                        <p
                                            key={response}
                                            className="text-warning bg-[#E1E1E6] text-xs rounded-md p-1 flex justify-center"
                                        >
                                            {response === 26
                                                ? "Fotovoltaico"
                                                : response === 22
                                                ? "Informativos"
                                                : response === 20
                                                ? "Aquecedor Solar"
                                                : response === 24
                                                ? "Banho"
                                                : response === 21
                                                ? "Aquecedor solar para piscína"
                                                : response === 25
                                                ? "Piscina"
                                                : "Solis"}
                                        </p>
                                    );
                                })}
                            </div>
                            <h1 className="text-slate-700 font-semibold">
                                {TitleReplace}
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center w-full text-slate-700">
                            <div className="flex gap-1 items-center text-xs">
                                <FontAwesomeIcon icon={faClock} />
                                <p>{date(data)}</p>
                            </div>

                            <a>Ver mais</a>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
export default BlogContent;
