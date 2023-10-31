import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { useSession, getSession, signOut} from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //Identify if there is session to distinguish between guest and authorized user
  const { data: session } = useSession();
  function handlerSignOut() {
    signOut()
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth Ecomm</title>
      </Head>
      {session ? <User session={session} handlerSignOut={handlerSignOut} /> : <Guest />}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link href={"/login"} legacyBehavior passHref>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// Authorized User

function User({ session, handlerSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" onClick={handlerSignOut}>
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link href={"/profile"} legacyBehavior>
          <a
            href="Sign In"
            className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
          >
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
