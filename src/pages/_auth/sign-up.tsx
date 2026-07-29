import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "../../components/RegisterForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separador";
import GoogleIcon from "@/assets/images/google-icon.png";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Cadastre-se - SyntaxWear",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-20">
      <div className="w-[450px] bg-white rounded-2xl flex flex-col p-4">
        <Logo />
        <RegisterForm />
        <Separator />

        <button className=" w-full flex item-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
          <img src={GoogleIcon} alt="Google icon" className="w-5 h-5" />
          <span className="text-sm font-medium text-black">
            Sign in with Google
          </span>
        </button>
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?
          <a href="/sign-in" className="text-[#5433EB] hover:underline px-1">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}
