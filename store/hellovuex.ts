// import { getModule, VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);
// const store = new Vuex.Store({})
// @Module({dynamic: true, name: 'hello', store})
// class Hello extends VuexModule {
//   private name = 'mzb';
//   get getName() {
//     return this.name;
//   }
//   @Mutation
//   setName(name: string) {
//     this.name = name;
//   }
//   @Action //不管有没有返回值,返回的都是一个Promise.
//   value() {
//     return new Promise((resolve, reject) => {
//       console.log('开始设置name'); //只要调用,这两行必然执行.
//       this.setName('dxz');
//       resolve(this.getName); //调用结果成功
//     })
//   }
// }
// export const hellovuex = getModule(Hello);