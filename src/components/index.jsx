/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yNGylv8Ak5E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col justify-center bg-background px-4 md:px-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Launching Soon</h1>
          <p className="text-muted-foreground md:text-xl">
            Get ready for the future of web development. Our startup is revolutionizing the way you build and deploy
            applications.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">14</span>
              <span className="text-muted-foreground">Days</span>
            </div>
            <span className="text-4xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">06</span>
              <span className="text-muted-foreground">Hours</span>
            </div>
            <span className="text-4xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">42</span>
              <span className="text-muted-foreground">Minutes</span>
            </div>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}