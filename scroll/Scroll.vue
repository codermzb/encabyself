<!--<template>-->
<!--  <div class="wrapper" ref="wrapper">-->
<!--    <div class="content">-->
<!--      <slot></slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--  import { Vue, Component, Prop } from 'vue-property-decorator';-->
<!--  import BScroll from 'better-scroll';-->
<!--  @Component-->
<!--  export default class Scroll extends Vue {-->
<!--    @Prop({ default: 0 }) probeType!: number;-->
<!--    @Prop({ default: false }) pullUpLoad!: boolean;-->
<!--    scroll!: BScroll;-->
<!--    mounted() {-->
<!--      this.$nextTick(() => {-->
<!--        this._initScroll();-->
<!--      });-->
<!--    }-->
<!--    _initScroll() {-->
<!--      if(!this.$refs.wrapper) return ;-->
<!--      this.scroll = new BScroll(<HTMLDivElement>this.$refs.wrapper, {-->
<!--        click: true,-->
<!--        probeType: this.probeType,-->
<!--        pullUpLoad: this.pullUpLoad-->
<!--      });-->
<!--      //监听滚动-->
<!--      this.scroll.on('scroll', (position) => {-->
<!--        this.$emit('scroll', position);-->
<!--      });-->
<!--      //监听上拉到底部执行一次-->
<!--      this.scroll.on('pullingUp', () => {-->
<!--        this.$emit('pullingUp');-->
<!--      });-->
<!--    }-->
<!--    scrollTo( x: number, y: number, time = 300) {-->
<!--      this.scroll.scrollTo(x, y, time);-->
<!--    }-->
<!--    //当上拉到底部时可再次触发上拉到底部监听事件-->
<!--    finishPullUp() {-->
<!--      this.scroll.finishPullUp();-->
<!--    }-->
<!--    refresh() {-->
<!--      this.scroll.refresh();-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->