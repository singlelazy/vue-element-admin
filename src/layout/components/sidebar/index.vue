<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
        >
            <sidebar-item
            ></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'SideBar'
})
export default class extends Vue {

}
</script>

<style lang='stylus'>

</style>
