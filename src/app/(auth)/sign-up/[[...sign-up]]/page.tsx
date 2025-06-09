import { SignUp } from "@clerk/nextjs"

function SignUpPage() {
  return (
   <main className="flex h-screen items-center w-full justify-center">
           <SignUp/>
       </main>
  )
}

export default SignUpPage