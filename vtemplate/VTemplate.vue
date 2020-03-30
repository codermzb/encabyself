<template>
  <div class="home">
    <child/>
    <h2>{{msg | value}}</h2>
    <h3>{{getValue}}</h3>
    <h4>{{name}}</h4>
  </div>
</template>

<script lang="ts"> //ts必须写
  import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
  import Child from './Child.vue';
  @Component({ //Comeponent 必须写
    components: {
      Child
    },
    filters: {
      value(msg: string) {
        return msg + ' mzb';
      }
    }
  })
  export default class VTemplate extends Vue {
    name = 'mzb';
    @Prop({ default: '' }) msg!: number;
    get getValue() { //计算属性
      return 'i love u';
    }
    @Emit()
    onChange(x: number, y: number) {
      let z = x + y;
      return z;  //若没有返回值,则将x作为参数传递,如有返回值,则以返回值作为参数传递.
    }
    @Watch('name', { immediate: true }) //监听的数据发生改变执行下面函数
    nameChange() {
      console.log('name 发生改变');
    }
    mounted() {

    }
  }
</script>

<style scoped>
  h4 {
    margin-bottom: 40px;
  }

</style>