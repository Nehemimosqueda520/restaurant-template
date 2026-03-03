import { AspectRatio } from "@radix-ui/react-aspect-ratio"; 

export function Home() {
  return (
    <main>
        <AspectRatio ratio={16 / 9} className="w-full">
            <img src="/bbq-meat-plate.webp" alt="Hero Image" className="w-full h-full object-cover " />
           <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl font-bold text-section-text">Taste the</h1>
            <br className=" invisible" />
            <h1 className="text-7xl font-bold text-section-text"> DANLicious!</h1>
            <button className="mt-8 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/60 transition-colors">See more about us</button>
            </div>
        </AspectRatio>
      
    </main>
  )
}