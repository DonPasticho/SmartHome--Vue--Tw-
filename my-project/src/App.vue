<template >
  <div>
    <nav class="mx-auto p-4 bg-amber-400">
      <div class="container
      mx-auto
      flex
      items-center
      justify-between">
        <a href="/" class="focus:outline-none focus-visible:ring-4
         ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400
          z-50 hover:opacity-75 transition-opacity" aria-label="Go to homepage">
          <img width="200" class="w-48 md:w-64 lg:w-72" src="./assets/logo.svg" alt="Home Smart Logo">
        </a>
        <button id="menu" class="lg:hidden focus:outline-none focus-visible:ring-4
         ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400 hover:opacity-75 transition-opacity" aria-expanded="false" aria-label="Abrir menú">
          <span class="iconify w-8 h-8 text-neutral-900" data-icon="tabler:menu-2"></span>
        </button>
        <div role="menuBar" class=" 
        hidden flex-col gap-4 absolute
        right-0 left-0 top-16
        z-40
        bg-amber-400
        shadow-xl text-center text-lg p-6 items-center
        lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between
        lg:w-full
        ">
          <a role="menuItem" href="/" class="py-1 px-6
          dark:text-neutral-900 focus:outline-none focus-visible:ring-4
          ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400
          hover:bg-neutral-900 hover:text-white transition-colors lg:ml-auto">Home</a>
          <a role="menuItem" href="/" class="py-1 px-6
          dark:text-neutral-900 focus:outline-none focus-visible:ring-4
          ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400
          hover:bg-neutral-900 hover:text-white transition-colors">Services</a>
          <a role="menuItem" href="/" class="py-1 px-6
          dark:text-neutral-900 focus:outline-none focus-visible:ring-4
          ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400
          hover:bg-neutral-900 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
    <header class="relative pt-16  bg-gradient-to-b from-amber-400 to-amber-600">
      <div class="
      absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32
      -z-10 ">
      </div>
      <div class="container
      mx-auto 
      grid grid-rows-1 place-items-end px-2">
        <img src="./assets/couch.png" class="
        row-start-1 row-end-2 col-start-1 col-end-2 
        mx-auto" alt="sofá">
        <img src="./assets/app.svg" class="
        row-start-1 row-end-2 col-start-1 col-end-2 
        mx-auto w-40 sm:w-52 md:w-64 lg:w-72" alt="app">
      </div>
    </header>
    <main class="
      grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden
    ">
      <a href="#" class="
      py-2 px-6 bg-amber-400 dark:text-neutral-900 shadow-xl
      hover:shadow-none transition-shadow focus:outline-none
      focus-visible:ring-4 ring-neutral-900 rounded-md 
      ring-offset-4 ring-offset-white dark:ring-amber-400 dark:ring-offset-neutral-800
      mx-auto my-12 flex gap-2
      ">
        <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span>Download the App</span> 
      </a>
      <section aria-labelledby="qualities" class="relative">
        <img src="./assets/dots.svg" alt="dots" class="
        hidden
        lg:block
        absolute
        top-1/2
        -translate-y-1/2
        -left-24
        xl:-left-7
        " aria-hidden="true">
        <img src="./assets/dots.svg" alt="dots" class="
        hidden
        lg:block
        absolute
        top-1/2
        -translate-y-1/2
        -right-24
        xl:-right-7
        " aria-hidden="true">
        <h2 id="qualities" class="sr-only">
          Our Qualities
        </h2>
        <div class="container
        mx-auto max-w-5xl flex gap-12 flex-wrap items-start
        justify-center md:justify-between">

          <div class="grid
          gap-4 justify-items-center text-center md:flex-1">
            <div class="rounded-full
            border-8 border-amber-400 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold">Safe</h3>
            <p>Our products are secure and private out-of-the-box</p>
          </div>

          <div class="grid
          gap-4 justify-items-center text-center md:flex-1">
            <div class="rounded-full
            border-8 border-amber-400 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold">Efficient</h3>
            <p>Our products are secure and private out-of-the-box</p>
          </div>

          <div class="grid
          gap-4 justify-items-center text-center md:flex-1">
            <div class="rounded-full
            border-8 border-amber-400 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 class="text-3xl font-bold">Proven</h3>
            <p>Leading the Smart Home world for 10 years</p>
          </div>

        </div>
      </section>
      <section aria-labelledby="partners" class="
      text-center grid gap-8 place-items-center">
        <div class="grid gap-4">
          <h2 id="partners" class="
          text-4xl font-bold text-amber-400">Our Partners</h2>
          <p class="max-w-lg">We've partnered with hundreds of smart home brands
            to help you create a smart home that fits your needs and doens't lock you in.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-8
        md:gap-x-16 max-w-2xl mx-auto">
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner1.svg" alt="Partner" class="
            h-16 w-16">
          </div>

          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner2.svg" alt="Partner" class="
            h-16 w-16">
          </div>
        
        
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner3.svg" alt="Partner" class="
            h-16 w-16">
          </div>
    
       
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner4.svg" alt="Partner" class="
            h-16 w-16">
          </div>
      
  
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner5.svg" alt="Partner" class="
            h-16 w-16">
          </div>
      
       
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner6.svg" alt="Partner" class="
            h-16 w-16">
          </div>
       
      
          <div class="p-4 bg-white dark:bg-neutral-600 shado-md
          dark:shadow-xl rounded-md">
            <img src="./assets/partner7.svg" alt="Partner" class="
            h-16 w-16">
          </div>       
        </div>
      </section>
      <section aria-labelledby="home" class="relative">
        <div class="flex flex-wrap-reverse gap-8
        justify-center">
          <div class="flex gap-6 flex-wrap flex-col items-start
          lg:justify-center">
            <div class="flex flex-wrap flex-col items-start gap-2">
              <h2 class="text-4xl font-bold">Relax, you're home!</h2>
              <p class="max-w-md">All our supported hardware includes traditional
                inputs so you can integrate our products 
                into your house in a way that's best for everyone.
              </p>
            </div>
            <a href="#" class="
            py-2 px-6 bg-amber-400 dark:text-neutral-900 flex gap-2 
            shadow-xl hover:shadow-none transition-shadow focus:outline-none
            focus-visible:ring-4 ring-neutral-900 rounded-md 
            ring-offset-4 ring-offset-white dark:ring-amber-400 dark:ring-offset-neutral-800
            ">
              Sign Up!
            </a>
          </div>
          <img src="./assets/table.png" alt="table">
        </div>
        <div class="absolute -bottom-6 -right-32 -z-10
        aspect-square md:border-8 border-amber-400 rounded-full 
        w-64 md:w-64 lg:w-96 xl:max-w-lg">
        </div>
        <div class="bg-teal-900 h-24 xl:h-48 xl:mt-0 
        xl:absolute w-screen
        -bottom-8 -z-10
        -mx-8 mt-12">
        </div>
      </section>
    </main>
    <section aria-labelledby="contact" class="
    container mx-auto px-8 overflow-hidden">
      <div class="flex flex-wrap justify-center
      gap-12 md:gap-6 lg:gap-20">
        <div class="md:flex-1 md:max-w-sm relative
        ">
          <img src="./assets/lamp.png" alt="lamp" class="
          mx-auto">
          <a href="#" class="
            py-2 px-6 bg-amber-400 dark:text-neutral-900 w-max mx-auto
            mt-12 md:mb-12 flex gap-2 
            shadow-xl hover:shadow-none transition-shadow focus:outline-none
            focus-visible:ring-4 ring-neutral-900 rounded-md 
            ring-offset-4 ring-offset-white dark:ring-amber-400 dark:ring-offset-neutral-800
            ">
              Download the App
          </a>
          <img src="./assets/app.svg" alt="app" width="240" class="
          hidden md:block drop-shadow-xl absolute
          left-1/2 -translate-x-1/2 max-w-[16rem] xl:max-w-xs">
          <div class="absolute -bottom-18 left-1/2 -z-10
          -translate-x-1/2
          aspect-square md:border-8 border-amber-400 rounded-full 
          md:w-72 lg:w-96">
          </div>
        </div>
        <form action="" class="relative border-8
        border-neutral-900 p-6 rounded-lg
        grid gap-8 md:flex-1 md:max-w-lg my-4
        md:my-12 lg:my-16 bg-white dark:bg-neutral-800
        w-full">
          <h2 id="contact" class="text-3xl font-bold">
            Let's Connect
          </h2>
          <div class="relative">
            <input type="text" id="name" class="
            peer
            w-full border-4 border-amber-400
            rounded-md focus:ring-4 dark:focus:ring-offset-2
            focus:border-amber-400 focus:ring-amber-400
            focus:outline-none
            dark:bg-amber-400 dark:text-neutral-900
            placeholder-transparent"
            placeholder="Your Name" autocomplete="off">

            <label for="name" class="
            text-neutral-500 text-sm
            font-bold uppercase absolute
            -top-4 left-2 -translate-y-1/2
            transition-all
            peer-placeholder-shown:left-4
            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:text-neutral-900
            peer-focus:-top-4
            peer-focus:left-2
            peer-focus:text-neutral-600
            dark:peer-focus:text-neutral-300">Your name</label>
          </div>
          <div class="relative">
            <input type="text" id="email" class="
            peer
            w-full border-4 border-amber-400
            rounded-md focus:ring-4 dark:focus:ring-offset-2
            focus:border-amber-400 focus:ring-amber-400
            focus:outline-none
            dark:bg-amber-400 dark:text-neutral-900
            placeholder-transparent"
            placeholder="Your Email" autocomplete="off">

            <label for="email" class="
            text-neutral-500 text-sm
            font-bold uppercase absolute
            -top-4 left-2 -translate-y-1/2
            transition-all
            peer-placeholder-shown:left-4
            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:text-neutral-900
            peer-focus:-top-4
            peer-focus:left-2
            peer-focus:text-neutral-600
            dark:peer-focus:text-neutral-300">Your Email</label>
          </div>
          <div class="relative">
            <textarea name="content" id="content" cols="20" 
            rows="5" placeholder="How can we help?" class="peer resize-none
              w-full border-4 border-amber-400
              rounded-md focus:ring-4 dark:focus:ring-offset-2
              focus:border-amber-400 focus:ring-amber-400
              focus:outline-none
              dark:bg-amber-400 dark:text-neutral-900
              placeholder-transparent"></textarea>
            <label for="content" class="
              text-neutral-500 text-sm
              font-bold uppercase absolute
              -top-3 left-2 -translate-y-1/2
              transition-all
              peer-placeholder-shown:left-4
              peer-placeholder-shown:top-6
              peer-placeholder-shown:text-neutral-900
              peer-focus:-top-4
              peer-focus:left-2
              peer-focus:text-neutral-600
              dark:peer-focus:text-neutral-300">How can we help?
            </label>
          </div>
          <a href="#" class="
            py-2 px-6 bg-neutral-900 text-white w-max
            shadow-xl hover:shadow-none transition-shadow 
            focus:outline-none
            focus-visible:ring-4 ring-neutral-900 rounded-md 
            ring-offset-4 ring-offset-white
            dark:ring-offset-amber-400 
            ">
              Submit
          </a>
        </form>
      </div>
    </section>
  </div>
</template>
