<template>
  <section class="bg-primary-50">
    <div class="mx-auto max-w-8xl p-spacing flex flex-col items-center md:flex-row gap-8 py-10 lg:py-20">
      <div class="basis-6/12">
        <h1 class="text-mb-5xl lg:text-7xl text-secondary-700 font-medium break-words text-balance">
          Acme Lease
        </h1>
        <p class="text-secondary-500 lg:text-lg mt-4 lg:mt-6 text-balance">
          A car leasing company
        </p>
        <div class="flex gap-4 mt-8 xl:mt-10">
          <div>
            <a href="#"><Button>Find your car</Button></a>
          </div>
        </div>
      </div>
      <div class="basis-6/12 relative flex justify-end items-center">
        <div class="z-10 flex items-center aspect-[20/17] w-9/12 overflow-hidden justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 402 260" class="w-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M398.251 260H7.15201C4.49222 260 3.14794 256.795 5.01181 254.898L90.6954 167.668C94.5446 163.749 100.834 163.669 104.782 167.487L150.523 211.731C154.934 215.998 162.113 215.321 165.649 210.304L259.838 76.6611C263.834 70.9911 272.249 71.0127 276.216 76.703L400.712 255.284C402.099 257.273 400.676 260 398.251 260Z" fill="white" />
            <circle cx="50" cy="50" r="50" fill="white" />
          </svg>
        </div>
        <div class="w-9/12 aspect-[20/17] bg-primary-100 rounded-3xl right-0 top-0 z-0"></div>
      </div>
    </div>
  </section>
</template>
