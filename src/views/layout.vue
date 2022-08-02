<template>
  <div class="app-layout">
    <nav>顶部组件</nav>
    <header>头部组件</header>
    <div class="main">
    <!-- <Home> -->
      <router-view />
    <!-- </Home> -->
    </div>
    <footer>底部组件</footer>
  </div>
</template>

<script>
// import Home from './home'
export default {
  name: 'layoutPage',
  components: {
    // Home
  }
}
</script>
