import {ReactElement} from "react";
import {Props as ProductCardProps} from "../components/ProductCard";
import {Props as ProductTitleProps} from "../components/ProductTitle";
import {Props as ProductImageProps} from "../components/ProductImage";
import {Props as ProductButtonsProps} from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHocProps {
    (Props: ProductCardProps): ReactElement;
    Title: (Props: ProductTitleProps) => ReactElement;
    Image: (Props: ProductImageProps) => ReactElement;
    Buttons: (Props: ProductButtonsProps) => ReactElement;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
