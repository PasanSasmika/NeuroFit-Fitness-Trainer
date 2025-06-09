import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

function Home() {

  return (
    <div>HOME

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <SignedOut>
        <SignInButton/>
      </SignedOut>
    </div>
  )
}

export default Home