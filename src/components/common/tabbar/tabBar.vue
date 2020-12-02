<template>
<div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>


export default {
  name: 'tabBar',
  
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 -5px 10px rgba(218, 184, 184, 0.2);
}

</style>
