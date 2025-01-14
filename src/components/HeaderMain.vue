<template>
  <header>
    <img @click="reload" src="@/assets/cashflow-icon.svg" alt="Logo" />
    <h2>Cash<span>Flow</span></h2>
  </header>
</template>
<script>
  export default {
    methods: {
      reload() {
        location.reload();
      }
    }
  };
</script>
<style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }

  img,
  span {
    width: 48px;
  }

  h2 {
    font-size: 1.4rem;
    color: var(--brand-blue);
  }

  h2 span {
    color: var(--brand-green);
  }
</style>
