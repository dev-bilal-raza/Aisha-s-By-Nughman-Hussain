import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/animation/CardAnimation"
import Link from "next/link";
import { ProductCardType } from '@/types/card.module';
import Button from '../layout/Button';

const ProductCard = ({ title, image_src, price }: ProductCardType) => {

    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 hover:bg-black duration-1000 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="50" className="w-full">
                    <Image
                        src={image_src}
                        height="1000"
                        // width="1000"
                        className="cursor-pointer h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="text-white mix-blend-difference m-4 font-semibold text-xl"
                >
                    {title}
                </CardItem>
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white mix-blend-difference"
                >
                    {price}
                </CardItem>
                <div className="flex justify-end items-center">
                    <CardItem
                        translateZ={20}
                        className=""
                    >
                        <Button text='Go To Product' />
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}


export default ProductCard