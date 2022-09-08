import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import Logo from "app/core/components/logo.js"
import runningman from "public/running-man.png"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div>
        <nav className="py-2 bg-blue-mid">
          <div className="mx-auto max-w-7xl">
            <Logo className="w-auto py-2 h-14 fill-white" />
          </div>
        </nav>
        <main className="py-12 text-white bg-blue-mid font-display">
          <div className="grid grid-cols-3 mx-auto align-top max-w-7xl">
            <Image src={runningman.src} alt="Running binary man" width="500px" height="620px" />
            <div className="col-span-2 ml-12">
              <h1 className="text-7xl">Web Apps.</h1>
              <p className="mt-6 text-2xl">
                Running Code specialises in developing full stack React applications
              </p>
              <button>Meet the Team</button>
              <button>Testimonials</button>
              <button>Portfolio</button>
            </div>
          </div>
        </main>
        <footer className="bg-blue-mid">
          <div className="mx-auto max-w-7xl">Footer</div>
        </footer>
      </div>
    </Layout>
  )
}

export default Home
