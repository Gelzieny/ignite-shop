"use client";

import Image from "next/image";
import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import type { IProduct } from "@/contexts/CartContext";
import { useCart } from "@/hooks/useCart";
import { ProductSkeleton } from "@/components/ProductSkeleton";
import { CartButton } from "@/components/CartButton";

interface HomeClientProps {
  products: IProduct[];
}

export function HomeClient({ products }: HomeClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fake loading to use the skeleton loading from figma
    const timeOut = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timeOut);
  }, []);

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
            {isLoading ? (
              <>
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
              </>
            ) : (
              <>
                {products.map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    prefetch={false}
                  >
                    <Product className="embla__slide">
                      <Image
                        src={product.imageUrl}
                        width={520}
                        height={480}
                        alt=""
                        priority={index === 0}
                      />

                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        <CartButton
                          size="large"
                          color="green"
                          disabled={checkIfItemAlreadyExists(product.id)}
                          onClick={(e) => handleAddToCart(e, product)}
                        />
                      </footer>
                    </Product>
                  </Link>
                ))}
              </>
            )}
          </SliderContainer>
        </div>
      </HomeContainer>
    </div>
  );
}
