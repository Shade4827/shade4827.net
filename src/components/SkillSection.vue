<template>
  <section class="skill">
    <h2 class="heading">Skills</h2>
    <div class="skill-columns">
      <div>
        <p>業務で利用</p>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Vue.js</li>
          <li>Nuxt</li>
          <li>Ruby on Rails</li>
          <li>CakePHP (2.x)</li>
        </ul>
      </div>
      <div>
        <p>個人で利用</p>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Python</li>
          <li>Unity</li>
          <li>Svelte</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.skill-columns {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
}
.skill-columns > div {
  flex: 1 1 240px;
  min-width: 200px;
}
p {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  color: #fff;
}
li {
  margin: 0.25rem 0;
  color: #fff;
}

@media (max-width: 640px) {
  .skill-columns {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
