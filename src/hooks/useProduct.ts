import {useEffect, useRef, useState} from "react";
import {InitialValues, onChangeArgs, Product} from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({product, onChange, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value!);

    const isMounted = useRef(false);

    const increaseBy = (value?: number) => {
        const newValue = Math.max(counter + value!, 0);
        setCounter(Math.min(newValue, initialValues?.maxCount || newValue));
        onChange && onChange({product, count: newValue});
    };

    const reset = () => {
        setCounter(initialValues?.count || value!);
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value!);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);



    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset
    }
}
