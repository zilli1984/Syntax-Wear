import Banner from "@/assets/images/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { useRouter } from "@tanstack/react-router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="container">
      <section className="relative h-125 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Homem sentado com os tênis da SyntaxWear"
          className="w-full h-full object-cover object-[30%_center] md:object-center rounded-[20px]"
        />

        <Overlay
          title="Kripton One"
          subtitle="Transforme qualquer passo em presença"
          className="botton-0 inset-0 pt-[100px] md:pt-0 md:justify-end md:pr-20"
        >
          <Button
            variant="secondary"
            onClick={() => router.navigate({ to: "/products" })}
          >
            Ver modelos
          </Button>
          <Button>Comprar</Button>
        </Overlay>
      </section>
    </div>
  );
};
