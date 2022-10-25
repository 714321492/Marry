<template>
    <div>
        <flipbook class="flipbook" :pages="[null, 'https://ts1.github.io/flipbook-vue/images/1.jpg',
        'https://ts1.github.io/flipbook-vue/images/2.jpg',
        'https://ts1.github.io/flipbook-vue/images/3.jpg',
        'https://ts1.github.io/flipbook-vue/images/4.jpg', null]" v-slot="flipbook">
            <button @click="flipbook.flipLeft">Previous Page</button>
            <button @click="flipbook.flipRight">Next Page</button>
        </flipbook>
    </div>
</template>

<script>
  import Flipbook from 'flipbook-vue'
  //import { mapMutations } from 'vuex'
  import {ref, reactive, toRefs, onMounted, watch} from 'vue'
  //import { useRoute, useRouter } from 'vue-router'
  export default {
    name: "home",
    components: { Flipbook },
    data() {
      return {}
    },
    setup () {
//      let list = ref({})
//      let list = reactive({})
      const data = reactive({})
      onMounted(() => {})
      return {}
    },
    methods() {
    }
  };
</script>
<style lang="scss" scoped>
    .flipbook {
        width: 90vw;
        height: 90vh;
    }
</style>