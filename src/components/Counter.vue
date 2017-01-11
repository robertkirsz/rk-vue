<template>
  <div>
    <p>{{ counter }} / {{ doubleCounter }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="increment({ amount: 10 })">+10</button>
    <button @click="asyncIncrement">Async</button>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed: mapGetters(['counter', 'doubleCounter']),
    methods: {
      ...mapMutations(['increment', 'decrement']),
      ...mapActions(['asyncIncrement'])
    }
  }
</script>
