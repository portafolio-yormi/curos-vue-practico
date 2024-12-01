<script></script>

<template>
  <div class="splashscreen">
    <img src="@/assets/cashflow-icon.svg" alt="Vue logo" />
    <h1>Splash<span>Screen</span></h1>
  </div>
</template>

<style scoped>
.splashscreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  color: var(--brand-blue);
}

h1 span {
  color: var(--brand-green);
}
</style>
