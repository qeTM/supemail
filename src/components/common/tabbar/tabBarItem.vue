<template>
    <div class="tab-bar-item"  @click="zhuantiam">
      <div v-if="Ister"><slot name='item-ico'></slot></div>
      <div v-else><slot name='item-ico-itme'></slot></div>    
      <div :style="NavigationBarColorstyle"><slot name='item-text'></slot> </div>
    </div>
</template>

<script>


export default {
  name: 'tabBarItem',
  data(){
    return{
      // Ister:true
      
    }
  },
  computed:{
    Ister(){
      return this.$route.path.indexOf(this.path)
    },
    NavigationBarColorstyle(){
      return this.Ister?{}:{color:this.NavigationBarColor}
    }
  },
  props:{
    path:String,
    NavigationBarColor:{
        type:String,
        default:'red'
      }
  },
  methods:{
    zhuantiam(){
      // console.log('跳转成功')
      // console.log(this.path)
      this.$router.push(this.path)
    },
    
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
}
</style>
