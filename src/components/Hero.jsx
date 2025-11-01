

export default function Hero(){
    return (
        <>
    <section id="hero" class="lg:h-screen flex flex-col gap-2 items-center pb-16 px-6 pt-24 sm:px-10 lg:px-24"> 
      <h1 class="text-4xl text-center md:text-5xl font-bold mb-4 text-slate-200">
        Hi, I’m <span class="text-blue-400">Majid Mohammed</span>
      </h1>
      <div class="w-48 h-48 mb-3 rounded-full shadow-blue-400 shadow-2xl animate-pulse"><img src="/images/profile.jpg" class="rounded-full" alt=""></img></div>
      <p class="text-center text-slate-200 max-w-2xl mx-auto text-[18px]">
        <span class="text-blue-400">Full-Stack Developer, </span>
        I design and build modern, responsive, and user-friendly web applications that solve real-world problems.
        With a background in IT support and network engineering, I bring both technical precision and creative design to every project.
      </p>
      <div class="flex flex-wrap justify-center gap-6 mt-4">
        <button class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md shadow-blue-800 transition-all duration-300 hover:shadow-blue-600 hover:shadow-lg hover:scale-105">
          <a href="#project">🚀 View My Work</a>
        </button>
    
        <button class="rounded-lg bg-transparent border border-blue-500 px-6 py-3 font-medium text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-blue-400 hover:shadow-lg hover:scale-105">
          <a href="#contact">📄 Contact</a>
        </button>
        </div>
        </section>
        </>
    )
}