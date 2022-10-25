<template>
  <div class="banner">
    <img src="../../assets/image/paintBrush.png" class="paintBrush">
    <div class="banner_height banner_1">
      <!--<img src="../../assets/image/2/2.gif" class="banner_1_1">-->
      <!--<img src="../../assets/image/2/2_1.png" class="banner_1_1_1 banner_1_1_1_left">-->
      <!--<img src="../../assets/image/2/2_1.png" class="banner_1_1_2 banner_1_1_2_left">-->
      <!--<img src="../../assets/image/2/2_4.png" class="banner_1_1_1 banner_1_1_1_right">-->
      <!--<img src="../../assets/image/2/2_4.png" class="banner_1_1_2 banner_1_1_2_right">-->

      <div class="banner_left banner_1_1_left">
        <img src="../../assets/image/2/line.png" class="line">
        <img src="../../assets/image/2/flower.png" class="flower">
        <img src="../../assets/image/2/left_1.png" class="lantern">
      </div>
      <div class="banner_left banner_1_2_left">
        <img src="../../assets/image/2/line.png" class="line">
        <img src="../../assets/image/2/flower.png" class="flower">
        <img src="../../assets/image/2/left_1.png" class="lantern">
      </div>

      <div class="banner_right banner_1_1_right">
        <img src="../../assets/image/2/line.png" class="line">
        <img src="../../assets/image/2/flower.png" class="flower">
        <img src="../../assets/image/2/left_1.png" class="lantern">
      </div>
      <div class="banner_right banner_1_2_right">
        <img src="../../assets/image/2/line.png" class="line">
        <img src="../../assets/image/2/flower.png" class="flower">
        <img src="../../assets/image/2/left_1.png" class="lantern">
      </div>

      <div class="center_box">
        <img src="../../assets/image/2/center_open.png" class="center_open_top">
        <div class="center_img_top">
          <div class="center_top_flower">
            <img src="../../assets/image/2/center_top_flower.png">
          </div>
          <div class="center_top_flower2">
            <img src="../../assets/image/2/center_top_flower2.png">
          </div>
          <img src="../../assets/image/2/center_top.png" class="center_top">
        </div>
        <img src="../../assets/image/2/2_3.png" class="center_box_2_3">
      </div>
    </div>
    <div class="banner_height banner_2">
      <img class="banner_1_1 banner_1_1_2" src="../../assets/image/1/1_1.png">
      <img class="banner_1_1 banner_1_1_1" src="../../assets/image/1/1_1.png">
      <img class="banner_1_2 banner_1_2_1" src="../../assets/image/1/1_2.png">
      <img class="banner_1_3 banner_1_3_1" src="../../assets/image/1/1_3.png">
      <img class="banner_1_2 banner_1_2_2" src="../../assets/image/1/1_2.png">
      <img class="banner_1_3 banner_1_3_2" src="../../assets/image/1/1_3.png">

      <div class="center_box">
        <img src="../../assets/image/2/center_open.png" class="center_open_bottom">
        <div class="center_img_bottom">
          <div class="center_bottom_flower">
            <img src="../../assets/image/2/center_bottom_flower.png">
          </div>
          <div class="center_bottom_flower2">
            <img src="../../assets/image/2/center_bottom_flower2.png">
          </div>
          <img src="../../assets/image/2/center_bottom.png" class="center_bottom">
        </div>
        <img src="../../assets/image/2/2_3.png" class="center_box_2_3">
      </div>
    </div>

    <div class="banner_cenetr">
      <div class="center_logo">
        <div class="center_logo_circular_left"></div>
        <div class="center_logo_circular_right"></div>
        <div class="center_logo_show">
          <img src="../../assets/image/2/center_logo.png">
        </div>
      </div>

      <div class="center_text">
        <img src="../../assets/image/2/maobi.png" class="maobi">
        <div class="center_text_hide center_text_hide_1"></div>
        <div class="center_text_hide center_text_hide_2"></div>
        <div class="center_text_hide center_text_hide_3"></div>
        <div class="center_text_hide center_text_hide_4"></div>
        <img src="../../assets/image/2/center_text.png" class="center_text_image">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import { mapMutations } from 'vuex'
import { init } from './banner_1'
import { ref, reactive, toRefs, onMounted, watch } from 'vue'
//import { useRoute, useRouter } from 'vue-router'
export default {
  name: "banner_1",
  components: {

  },
  data() {
    return {

    }
  },
  setup () {
//      let list = ref({})
//      let list = reactive({})
    const data = reactive({

    })
//    const route = useRoute()
    // const router = useRouter()
//    watch(() => route,(newVal, oldVal)=>{},{deep:true})
    //      $(".banner_1_2_1").animate({
//        transform: `translateX(-50%)`,
//        opacity: 1,
//      }, 5000, () => {})

    onMounted(() => {
      init();
    })
    return {
      ...toRefs(data)
    }
  },
  methods() {}
};
</script>
<style lang="scss" scoped>
  @import './banner_1';
</style>