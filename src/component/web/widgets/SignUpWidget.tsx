"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Link from "next/link";
import { useParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";


import { AppleLogo, GoogleLogo } from "@/components/web/svg";
import { useRouter } from "next-nprogress-bar";
import { signIn } from "next-auth/react";
import { RegisterUserInput, registerUserSchema } from "@/core/user/schema";

export default function SignUpWidget() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
        console.log("here")
    } catch (e) {
        console.log(e)
    }
  });

  const [show, setShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <form onSubmit={onSubmit} className="relative" autoComplete="off">
      <button
        disabled={isSubmitting}
        type="button"
        className="btn_primary w-full mt-[30px] h-[42px] bg-[#5086EC] relative font-bold"
        onClick={() => signIn("google")}
      >
        <div className="bg-white absolute left-2 top-2 w-7 h-7 flex items-center justify-center rounded-full">
          <GoogleLogo />
        </div>
        Continue with Google
      </button>
      {/* Apple button */}
      <button
        disabled={isSubmitting}
        type="button"
        className="btn_secondary border-black text-black w-full mt-5 h-[42px] relative font-bold"
        // onClick={() => signIn('apple')}
      >
        <div className="bg-black absolute left-2 top-[6px] w-7 h-7 flex items-center justify-center rounded-full">
          <AppleLogo fill="white" width={16} />
        </div>
        Continue with Apple
      </button>

      <div className="my-[30px] flex gap-5 items-center text-gray text-sm">
        <hr className="border-solid w-full" />
        Or
        <hr className="border-solid w-full" />
      </div>
      <div className="grid gap-5">
        <div>
          <input
            disabled={isSubmitting}
            autoComplete="given-name"
            className="input_primary"
            placeholder="First name"
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="text-red">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <input
            disabled={isSubmitting}
            className="input_primary"
            autoComplete="family-name"
            placeholder="Last name"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="text-red">{errors.lastname.message}</p>
          )}
        </div>
        <div>
          <input
            disabled={isSubmitting}
            className="input_primary"
            placeholder="Email address"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
        </div>
        <div>
              <Controller
            control={control}
            name="rePassword"
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                icon={
                  passwordShow ? (
                    <EyeIcon width={20} height={20} />
                  ) : (
                    <EyeClosedIcon width={20} height={20} />
                  )
                }
                type={passwordShow ? "text" : "password"}
                onClick={() => setPasswordShow((curr) => !curr)}
                placeholder="Confirm password"
              />
            )}
          />
        </div>
        <div>
        </div>

      </div>
      {errors.agreement && (
        <p className="text-red">{errors.agreement.message}</p>
      )}
      {/* Submit */}
      <button
        disabled={isSubmitting}
        type="submit"
        className="btn_primary w-full mt-[30px] h-[42px] font-bold"
      >
        {isSubmitting ? "Waiting..." : "Create my account"}
      </button>
      <p className="text-sm mt-6 text-center">
        Already have an account?{" "}
        <Link href="/login">
          <button type="submit" className="font-bold">
            login
          </button>
        </Link>
      </p>
    </form>
  );
}
