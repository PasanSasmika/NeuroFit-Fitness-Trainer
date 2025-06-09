import { SignIn } from "@clerk/nextjs"

function SignInPage() {
  return (
    <main className="flex h-screen items-center w-full justify-center">
        <SignIn/>
    </main>
  )
}

export default SignInPage