import Image from "next/image";
import ImageBlog from "../../assets/images/BlogPost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { date } from "../../utils/masks";

interface BlogContentProps {
    image: string;
    category: string;
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
        <div className="card card-compact w-full h-full drop-shadow-sm shadow-black border-2 bg-primary transition-all md:hover:scale-105 duration-300 md:hover:shadow-xl">
            <div className="card-body flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <div className="bg-warning w-full pb-2 rounded-md">
                        <Image
                            className="rounded-t-md"
                            width={200}
                            height={150}
                            src={ImageBlog}
                            layout="responsive"
                            alt="Imagem"
                        ></Image>
                    </div>
                    <div className="flex gap-2 w-3/4 justify-start">
                        <p className="text-warning bg-[#E1E1E6] text-xs rounded-md p-1 flex justify-center">
                            {category}
                        </p>
                        <p className="text-warning bg-[#E1E1E6] text-xs rounded-md p-1 flex justify-center">
                            {category}
                        </p>
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
                    <Link href={link}>
                        <a target="_blank">Ver mais</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default BlogContent;
