# JEBO-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### José Enrique Bobadilla

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jebo-product-card';
```

```
<ProductCard
        product={product}
        initialValues={{
        count: 4,
        maxCount: 10
        }}
>
    {
    ({reset, isMaxCountReached, maxCount, increaseBy, count}) => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
    }
</ProductCard>
```
