<template>

</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
        },
      ]


    }
  },
  methods: {

  },
  components: {},
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')

  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style lang="scss" scoped>

</style>
