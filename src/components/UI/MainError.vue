<template>
  <div class="main-error"><slot></slot></div>
</template>

<script>
export default {
  name: 'MainError',
};
</script>

<style lang="scss">
.main-error {
  @include main-title;
  color: #ff0800;
}
</style>
