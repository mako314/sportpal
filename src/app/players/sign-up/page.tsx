import PlayerSignUpForm from "./playerSignUpForm"

export default function PlayerSignUpPage() {

  // max-w-xl 

  // This was added to the second DIV, it's what kind of gave it a smaller area, can add it back, but im trying to go through the steps first

  return (

    <div className="mt-10 flex justify-center px-4">
    <div className="w-full rounded-lg bg-white p-8 shadow-lg">
        <PlayerSignUpForm/>
    </div>
</div>
  )
}