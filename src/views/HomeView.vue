<template>
  <div class="content">
    <div>
      <SideBar />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
  setup() {
    return {};
  },
};
</script>
<style>
.content {
  display: flex;
}
</style>
