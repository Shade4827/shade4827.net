<template>
  <section>
    <h2 class="text-xl font-bold mb-4">Skills</h2>

    <div class="flex flex-col md:flex-row gap-4 md:gap-6">
      <div class="flex-1 min-w-[200px] basis-[20px]">
        <p class="mb-2 font-semibold text-white">業務で利用</p>
        <ul class="list-disc list-inside pl-0">
          <li class="my-1 text-white">JavaScript / TypeScript</li>
          <li class="my-1 text-white">Vue.js</li>
          <li class="my-1 text-white">Nuxt</li>
          <li class="my-1 text-white">Ruby on Rails</li>
          <li class="my-1 text-white">CakePHP (2.x)</li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px] basis-[20px]">
        <p class="mb-2 font-semibold text-white">個人で利用</p>
        <ul class="list-disc list-inside pl-0">
          <li class="my-1 text-white">C</li>
          <li class="my-1 text-white">C++</li>
          <li class="my-1 text-white">Python</li>
          <li class="my-1 text-white">Unity</li>
          <li class="my-1 text-white">Svelte</li>
        </ul>
      </div>
    </div>

    <p class="mt-4 text-sm text-white">
      このサイトは
      <a
        href="https://ja.vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline dotted"
      >
        Vue.js
      </a>
      を利用して作成しています
      <a
        href="https://github.com/Shade4827/portfolio"
        rel="noopener noreferrer"
        class="underline dotted"
      >
        GitHub</a
      >
    </p>
  </section>
</template>
