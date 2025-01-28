<template>
  <Layout>
    <template #header>
      <AppHeader />
    </template>
    <template #resume>
      <Resume :total-label="'Ahorro total'" :label="label" :total-amount="1000000" :amount="amount">
        <template #graphic>
          <p>Graphic</p>
        </template>
        <template #action>
          <Action />
        </template>
      </Resume>
    </template>

    <template #movements>
      <Movements :movements="movements" />
    </template>
  </Layout>
</template>

<script>
  import Layout from './LayoutMain.vue';
  import AppHeader from './HeaderMain.vue';
  import Resume from './Resume/Index.vue';
  import Movements from './Movements/Index.vue';
  import Action from './ActionMain.vue';

  export default {
    components: {
      Layout,
      AppHeader,
      Resume,
      Action,
      Movements
    },
    data() {
      return {
        label: null,
        amount: null,
        movements: [
          {
            id: 0,
            title: 'Movimiento 1',
            description: 'Descripción del movimiento 1',
            amount: -1000
          },
          {
            id: 1,
            title: 'Movimiento 2',
            description: 'Descripción del movimiento 2',
            amount: 2000
          },
          {
            id: 2,
            title: 'Movimiento 3',
            description: 'Descripción del movimiento 3',
            amount: -3000
          },
          {
            id: 3,
            title: 'Movimiento 4',
            description: 'Descripción del movimiento 4',
            amount: 4000
          },
          {
            id: 4,
            title: 'Movimiento 5',
            description: 'Descripción del movimiento 5',
            amount: 5000
          },
          {
            id: 5,
            title: 'Movimiento 6',
            description: 'Descripción del movimiento 6',
            amount: -6000
          },
          {
            id: 6,
            title: 'Movimiento 7',
            description: 'Descripción del movimiento 7',
            amount: 7000
          },
          {
            id: 7,
            title: 'Movimiento 8',
            description: 'Descripción del movimiento 8',
            amount: 8000
          }
        ]
      };
    }
  };
</script>
