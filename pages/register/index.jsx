import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../layout/layout";
import styles from "../../styles/form.module.css";
import Image from "next/image";
import gitImg from "../../public/assets/github-mark.svg";
import googleImg from "../../public/assets/google-logo.svg";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

export default function Register() {
  const [show, setShow] = useState(false);
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
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" id="emailSymbol">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" id="emailSymbol">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
              id="fingerPrint"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="confirm password"
              className={styles.input_text}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
              id="fingerPrint"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_button}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.input_button_custom}>
            <button type="button">Sign In with Google</button>
            <Image src={googleImg} width="28" height="28" />
          </div>
          <div className={styles.input_button_custom}>
            <button type="button">Sign In with Github</button>
            <Image src={gitImg} width="24" height="20" />
          </div>
          <p className="text-center text-gray">
            Don't have an account ?{" "}
            <Link href={"/login"} className={styles.sign_up_link}>
              login
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
