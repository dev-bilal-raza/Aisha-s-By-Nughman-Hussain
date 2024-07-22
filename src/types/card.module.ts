import { StaticImageData } from "next/image";

export interface ProductCardType {
    title: string,
    image_src: StaticImageData,
    price: number
}