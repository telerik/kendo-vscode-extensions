<template>
    <Menu>
      <li>
        <router-link class="k-link k-menu-link" to="/">Home</router-link>
      </li>
    </Menu>
</template>
<script>
import '@progress/kendo-ui/js/kendo.menu';
import { Menu } from "@progress/kendo-layout-vue-wrapper";
export default {
    components: {
       Menu
    }
}
</script>
