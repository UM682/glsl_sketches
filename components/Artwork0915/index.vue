<template>
  <section class="artwork">
    <div id="canvas-container2"></div>
  </section>
</template>

<script>
import Artwork0915 from "./js/Artwork0915";

export default {
  name: "artwork0915",
  components: {},
  props: [],
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {};
  },
  computed: {},
  mounted() {
    // canvas要素を渡す。
    this.Artwork0915 = new Artwork0915({
      $canvas: this.$refs.canvas,
    });
  },
  destroyed() {
    // canvasを作ったり壊したりする前提の場合はここに処理停止する処理を書く（今回省略）。
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
  },
};
</script>

<style>
/* スタイルなどお好みで　*/
.artwork {
  position: fixed;
}
</style>