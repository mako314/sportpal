export default function HomePage() {

  return (

<div>
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

    <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
      
      <div className="max-w-[720px] lg:max-w-[842px]">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">The Recruiting You Want With All The <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">Analytics </span>
        </h1>
        <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
          <p className="text-xl text-[#636262]">Your all-in-one platform to evaluate prospects, communicate directly with recruits, and gain a competitive edge in the race for talent.</p>
        </div>
        
        <div className="flex">
          <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Recruit The Best Talent</a>
          <a href="#" className="flex max-w-full flex-row items-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" />
            <p className="text-black">View Demo</p>
          </a>
        </div>
      </div>
  
      <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
        <img src="https://www.al.com/resizer/7DlrQ9dAR2-dbc99a9PDB7EFvxU=/800x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/SDVYSQ3KUBGERIAVC6GGB2UADA.JPG" alt="" className="relative h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover" />
        <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 rounded-2xl bg-black"></div>
      </div>
    </div>
  </div>
</div>
  )
}