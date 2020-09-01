<template>
  <div class="flex flex-col min-h-screen">
    <my-header style="flex-basis: 80px"></my-header>
    <Nuxt class="flex-1" />
    <my-footer style="flex-basis: 600px"></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/my-header";
import MyFooter from "@/components/my-footer";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss" scoped></style>
