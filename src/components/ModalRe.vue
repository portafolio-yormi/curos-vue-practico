<template>
  <div class="modal">
    <div class="head">
      <p>Nuevo Movimiento</p>
      <span class="iconify" data-icon=""></span>

      <Icon icon="ion:close-circle" width="24" height="24" @click="close" class="btn-close" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { defineEmits } from 'vue';
  import { Icon } from '@iconify/vue';
  const emit = defineEmits(['close']);

  const close = () => {
    emit('close');
  };
</script>

<style scoped>
  .modal {
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 24px;
    box-sizing: border-box;
  }

  p {
    margin: 0;
    font-size: 1.5rem;
    color: var(--brand-blue);
  }

  .btn-close {
    cursor: pointer;

    color: var(--brand-red);
  }
</style>
