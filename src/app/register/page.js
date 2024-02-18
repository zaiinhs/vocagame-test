"use client";
import { useForm, FormProvider } from "react-hook-form";
import { AuthPageTitle } from "@/components/auth";
import { onRegister } from "@/redux/slices/user";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm();

  const onSubmit = (data) => {
    const { password, passwordConfirm } = data;
    if (password !== passwordConfirm) {
      form.setError("passwordConfirm", {
        message: "Password tidak sesuai",
      });
      return;
    }
    dispatch(onRegister(data));
    form.reset();
    router.push("/login");
  };

  return (
    <div className="min-h-full flex justify-center items-center text-gray-50 relative">
      <div className="absolute top-0 xl:left-6 w-full xl:w-[380px] text-center pt-[40px]">
        <a className="font-bold	text-3xl">VocaGame</a>
      </div>
      <div className="w-[480px] min-h-fit mt-[100px] xl:mt-20 mb-20 px-4 lg:px-0">
        <AuthPageTitle
          title="Daftarkan Akun"
          caption="Daftar akun anda  dengan mengisi form dibawah"
        />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3 mb-8 ">
              <Input
                name="name"
                label="Nama Anda"
                placeholder="Ketik nama anda di sini"
                style="alt"
              />
              <Input
                name="phone"
                label="Nomor Handphone"
                placeholder="Nomor handphone anda"
                style="alt"
                validation={{
                  minLength: {
                    value: 11,
                    message: "Min. 11 karakter",
                  },
                  maxLength: {
                    value: 13,
                    message: "Max. 13 karakter",
                  },
                }}
              />
              <Input
                name="password"
                label="Password"
                placeholder="Masukkan password anda"
                type="password"
                style="alt"
                validation={{
                  minLength: {
                    value: 6,
                    message: "Min. 6 karakter",
                  },
                }}
              />
              <Input
                name="passwordConfirm"
                label="Konfirmasi Password"
                placeholder="Masukkan kembali password anda"
                type="password"
                style="alt"
              />
            </div>
            <Button
              type="submit"
              text="Daftar Sekarang"
              className="w-full text-black bg-blue-100"
            />
          </form>
        </FormProvider>
        <p className="text-center mt-10 text-sm ">
          Sudah punya akun?{" "}
          <Link className="font-bold" href="/login">
            Login Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
