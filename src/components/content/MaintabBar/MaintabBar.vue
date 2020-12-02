<template>
<div>
    <tabBar>
      <tabBarItem path="/home" NavigationBarColor='blue'>
        <img slot="item-ico" src="~assets/image/tab-bar/daohangshouye.svg" alt="">
        <img slot="item-ico-itme" src="~assets/image/tab-bar/daohangshouye1.svg" alt="">
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/fenlei"  NavigationBarColor='blue'>
        <img slot="item-ico" src="~assets/image/tab-bar/fenlei.svg" alt="">
        <img slot="item-ico-itme" src="~assets/image/tab-bar/fenlei1.svg" alt="">
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/gouwuche"   NavigationBarColor='blue'>
        <img slot="item-ico" src="~assets/image/tab-bar/gouwuche.svg" alt="">
        <img slot="item-ico-itme" src="~assets/image/tab-bar/gouwuche1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/wode" NavigationBarColor='blue'>
        <img slot="item-ico" src="~assets/image/tab-bar/wode.svg" alt="">
        <img slot="item-ico-itme" src="~assets/image/tab-bar/wode1.svg" alt="">
        <div slot="item-text" >我的</div>
      </tabBarItem>
    </tabBar>
</div>
</template>

<script>

    import tabBar from '../../common/tabbar/tabBar';
    import tabBarItem from '../../common/tabbar/tabBarItem';

export default {
  name: 'MaintabBar',
    components:{
        tabBar,
        tabBarItem
    }
}
</script>

<style scoped>

</style>
