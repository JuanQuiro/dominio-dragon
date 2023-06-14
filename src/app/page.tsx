import Link from "next/link";
import { createPost } from "~/app/actions";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Button } from "~/ui/button";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  console.log(session);
  

  return (
    <main className="flex fondo min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl text-white font-extrabold tracking-tight sm:text-[5rem]">
          Dominio <span className="text-red-400">Dragon</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex duration-200 group max-w-xs border-2 border-transparent hover:border-red-700 flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href={'/sobre-mi'}
          >
            <h3 className="text-2xl text-white/50 group-hover:text-white font-bold">Sobre mi y portafolio →</h3>
            <div className="text-lg font-raleway font-normal italic text-white/50 group-hover:text-white">
              👀 Descubre mi portafolio y cómo puedo ayudarte a llevar tu negocio al siguiente nivel como desarrollador Full Stack. ¡Visítame en la sección de 'Sobre mí y portafolio'! 🚀
            </div>
          </Link>
          <Link
            className="flex duration-200 group max-w-xs border-2 border-transparent hover:border-red-700 flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
          >
            <h3 className="text-2xl text-white/50 group-hover:text-white font-bold">Blog →</h3>
            <div className="text-lg text-white/50 font-raleway font-normal italic group-hover:text-white">
              📝 ¡Bienvenido a mi sección de blog! Aquí encontrarás artículos interesantes y útiles 🔧 sobre tecnología, desarrollo web y todo lo relacionado con el mundo Full Stack. 💻
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {/* {hello ? hello.greeting : "Loading tRPC query..."} */}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Estas loguiado como {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full shadow-[-3px_5px_0px_0px_#1a202c] hover:shadow-[-3px_5px_0px_0px_#000000] duration-500 bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}



async function SessionActive() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  return (
    <div className="w-full max-w-xs">
      <p>Hola</p>
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.text}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <form action={createPost} className="flex flex-col gap-2">
        <input
          type="text"
          name="text"
          placeholder="Title"
          className="w-full rounded bg-primary p-2 text-background"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
