"use client";

import { Button, Input, ToggleThemeButton } from "@/components";
import { AuthPageTitle } from "@/components/auth";
import { onLogin } from "@/redux/slices/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm();
  const user = useSelector((state) => state.user.user);

  const onSubmit = (data) => {
    if (!user) {
      router.push("/register");
    } else {
      const { password } = data;
      if (password !== user.password) {
        form.setError("password", { message: "Password anda salah" });
      } else {
        dispatch(onLogin(data));
        form.reset();
        router.push("/profile");
      }
    }
  };

  return (
    <div className="h-full flex flex-col-reverse lg:flex-row overflow-auto">
      <div className="login-bg flex-1 bg-cover flex flex-col items-center justify-center gap-10 py-10">
        <div className="w-[200px] min-h-[300px] lg:w-[300px] lg:min-h-[400px] bg-gray-300 relative">
          <Image
            src="/login-image.jpg"
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="text-white w-[360px] lg:w-[440px] text-center">
          <h1 className="font-bold text-3xl">VocaGame</h1>
          <p>
            VocaGame merupakan salah satu situs top up dan pembelian voucher
            game di Indonesia
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative px-4 py-10">
        <div className="absolute top-4 right-6">
          <ToggleThemeButton />
        </div>
        <div className="w-[480px] mt-16">
          <AuthPageTitle
            title="Silahkan Login"
            caption="Masukkan username dan password anda untuk masuk"
            titleClassName="login-title"
          />
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3 mb-8">
                <Input
                  name="username"
                  placeholder="Masukkan username"
                  label="Username"
                />
                <Input
                  name="password"
                  placeholder="Masukkan password"
                  label="Password"
                  type="password"
                />
              </div>
              <Button
                type="submit"
                text="Masuk Sekarang"
                className="login-submit-btn w-full"
              />
            </form>
          </FormProvider>
          <p className="text-center mt-10 text-sm font-semibold">
            Belum punya akun?{" "}
            <Link href="/register" className="login-link">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
