import Image from "next/image";
import ImageBlog from "../../../public/BlogPost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const BlogContent = () => {
    return (
        <div className="card card-compact w-full drop-shadow-sm shadow-black border-2 bg-primary transition-all hover:scale-105 duration-300 hover:shadow-xl">
            <div className="card-body flex flex-col">
                <div className="bg-warning w-full pb-2 rounded-md">
                    <Image
                        className="rounded-t-md"
                        src={ImageBlog}
                        layout="responsive"
                    ></Image>
                </div>
                <div className="flex gap-2 w-3/4 justify-start">
                    <p className="text-warning bg-[#E1E1E6] text-xs rounded-md p-1 flex justify-center">
                        Fotovoltaico
                    </p>
                    <p className="text-warning bg-[#E1E1E6] text-xs rounded-md p-1 flex justify-center">
                        Fotovoltaico
                    </p>
                </div>
                <h1 className="text-slate-700 font-semibold">
                    Sitema Fotovoltaico: diferença entre On Grid e Off Grid
                </h1>
                <div className="flex justify-between items-center w-full text-slate-700">
                    <div className="flex gap-1 items-center text-xs">
                        <FontAwesomeIcon icon={faClock} />
                        <p>19 de julho de 2022</p>
                    </div>
                    <a href="#">Ver mais</a>
                </div>
            </div>
        </div>
    );
};
export default BlogContent;
