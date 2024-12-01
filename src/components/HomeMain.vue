<template>
  <Layout>
    <template #header>
      <AppHeader />
    </template>
    <template #resume>
      <Resume
          :label="'Ahorro total'"
          :totalAmount="1000000"
          :amount="amount"
      />
    </template>
    <template #movements>
      <Movements />
    </template>
  </Layout>
</template>

<script>

import Layout from './LayoutMain.vue'
import AppHeader from './HeaderMain.vue'
import Resume from './Resume/Index.vue'
import Movements from './Movements.vue'

export default {
  components: {
    Layout,
    AppHeader,
    Resume,
    Movements
  },
  data() {
    return {
      amount: null
    }
  }
}
</script>
