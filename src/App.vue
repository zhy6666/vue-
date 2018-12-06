<template>
<div>
  <router-view></router-view>
  <footer-guide v-if="$route.meta.showFooter"></footer-guide>
</div>
</template>
<script>
  import footerGuide from "./xqPages/components/footerGuide";
  export default {
    components: {footerGuide}
 }
</script>

<style>

</style>
