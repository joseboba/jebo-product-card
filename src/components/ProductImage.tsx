import React, {CSSProperties, useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export interface Props {
	img?: string;
	className?: string;
	style?: CSSProperties;
}
export const ProductImage = ({ img, className, style}: Props) => {

	const { product } = useContext(ProductContext);
	let imgToShow: string = img || product.img || noImage;

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={imgToShow}
			alt={'Product image'}
			style={style}
		/>
	);
};
