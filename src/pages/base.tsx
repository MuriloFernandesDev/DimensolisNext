import Image from "next/image";
import ThemeChanger from "../components/Theme";

export default function Home(): JSX.Element {
    return (
        <>
            <div className="flex min-h-screen justify-center items-center">
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-base-200">
                    <div className="w-full h-auto">
                        <ThemeChanger type="icon" />
                        <Image
                            src="https://tailwindcss.com/img/card-top.jpg"
                            alt="Sunset in the mountains"
                            layout="responsive"
                            priority={true}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            Next + Tailwind ❤️
                        </div>
                        <p className="text-grey-darker text-base">
                            Next and Tailwind CSS are a match made in heaven,
                            check out this article on how you can combine these
                            two for your next app.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
