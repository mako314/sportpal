import { SportsPalSVG } from "@/app/resources/images"

export default function HomePageTestimonial() {

    return (
        <section className="">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53eeec84c014ec421d16_Group%20183.png" alt="" className="inline-block max-w-xl" />
            <div className="flex flex-col items-start lg:justify-center">
                <div className="flex items-center space-x-4"> 
                    <SportsPalSVG className="inline-block w-24 h-24"/>
                    <h1 className="text-3xl font-bold text-gray-800">Sport Pal</h1>
                </div>
                
                <p className="mb-6 max-w-md text-[#636262] md:mb-12 mt-4"> Sport Pal is dedicated to benefiting everyone in the sports arena, from the athletes and coaches to the scouts. Our mission is to deliver comprehensive game analytics to players, equipping them with professional profiles that streamline the scouting process. 
                <br />
                <br />This approach not only enhances performance insights for athletes but also simplifies talent identification for scouts, ensuring a smoother connection between emerging talent and professional opportunities.
                </p>
                <p className="font-bold"> Gray Angelo </p>
                <p className="text-sm text-[#647084]">CEO</p>
            </div>
            </div>
        </div>
        </section>
    )
  }