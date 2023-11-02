import React from "react";
import { useState } from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../../styles/form.module.css";
import Image from "next/image";
import gitImg from "../../public/assets/github-mark.svg";
import googleImg from "../../public/assets/google-logo.svg";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from '../lib/validate'


export default function Login() {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues : {
        email:'',
        password:''
    },
    validate:login_validate,
    onSubmit
  });

  console.log(formik.errors)

  async function onSubmit(values){
    const status = await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password,
      callbackUrl:'/'
    })

    console.log(status)
  }

  //Google Handler Function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-5/6 mx-auto text-gray-400">
            Shop now for chic & trendy clothes at unbeatable prices !
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>

          <div className={`${styles.input_group}${formik.errors.email && formik.touched.email ? ' border-rose-600':''}`}>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              className={styles.input_text}
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
            {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4" id="emailSymbol">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <span>{formik.errors.email && formik.touched.email ? <span className={styles.input_error_message}>{formik.errors.email}</span>:<></>}</span>  

          <div className={`${styles.input_group}${formik.errors.password && formik.touched.password ? ' border-rose-600':''}`}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
            //   onChange={formik.handleChange}
            //   value={formik.values.password}
            {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
              id="fingerPrint"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <span>{formik.errors.password && formik.touched.password ? <span className={styles.input_error_message}>{formik.errors.password}</span>:<></>}</span>

          <button className={styles.input_button} type="submit">Login</button>
          <div className={styles.input_button_custom}>
            <button type="button" onClick={handleGoogleSignIn}>
              Sign In with Google
            </button>
            <Image src={googleImg} width="28" height="28" />
          </div>

          <div className={styles.input_button_custom}>
            <button type="button" onClick={handleGithubSignIn}>Sign In with Github</button>
            <Image src={gitImg} width="24" height="20" />
          </div>

          <p className="text-center text-gray-400">
            Don't have an account ?{" "}
            <Link href={"/register"} className={styles.sign_up_link}>
              Sign Up
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
