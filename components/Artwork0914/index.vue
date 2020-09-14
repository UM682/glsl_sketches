<template>
  <section class="artwork">
    <div id="canvas-container1"></div>
  </section>
</template>

<script>
import Artwork0914 from "./js/Artwork0914";

export default {
  name: "artwork0914",
  components: {},
  props: [],
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {};
  },
  computed: {},
  mounted() {
    // canvas要素を渡す。
    this.Artwork0914 = new Artwork0914({
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