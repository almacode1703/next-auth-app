import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../layout/layout";
import styles from "../../styles/form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useFormik } from "formik";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-5/6 mx-auto text-gray-400">
            Shop now for chic & trendy clothes at unbeatable prices !
          </p>
        </div>

        {/* Register Form */}
        <form className="flex flex-col gap-5" onClick={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className="icon flex items-center px-4" id="emailSymbol">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4" id="emailSymbol">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
              id="fingerPrint"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              id="fingerPrint"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_button}>
            <button type="submit">Login</button>
          </div>
          <p className="text-center text-gray-400">
            Don't have an account ?{" "}
            <Link href={"/login"} className={styles.sign_up_link}>
              Sign In
            </Link>
          </p>
        </form>
        {/* End of Form */}
      </section>
    </Layout>
  );
}
