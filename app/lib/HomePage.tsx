"use client";
import Image from "next/image";

export default function HomePage(){
    return(
        <div>
            <Image
                src="/images/SerkanProfilePicture.png"
                alt="Image of Serkan Yılmaz"
                width={200}
                height={200}
                className="rounded-full"
            />
            <div>
                Serkan Yılmaz
            </div>
        </div>
    );
}