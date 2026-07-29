import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useParams();

  const filteredProducts = products.filter(
    (product) =>
      (product.category?.name ?? "").toLowerCase() ===
      category.toLocaleLowerCase(),
  );

  return (
    <section className="container text-center pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[70vh]">
      <h1 className="text-3xl text-center mb-3">Lista de produtos</h1>

      {filteredProducts.length === 0 ? (
        <>
          <p className="text-center m-10">
            Nenhum produto encontrado nesta categoria
          </p>
          <Link
            to={"/products"}
            className=" text-accent hover:text-accent-hover hover:underline "
          >
            Volte para a aba produtos
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-center mb-10 p-4">
            Conforto Excepcional para as aventuras do dia-a-dia
          </h2>
          <ProductList products={filteredProducts} />
        </>
      )}
    </section>
  );
}
