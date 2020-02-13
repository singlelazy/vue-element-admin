<template>
    <div class="navbar">
        <div class="left-menu">
            <ul>
                <li>基础运营</li>
                <li>数据中心</li>
                <li>消息中心</li>
                <li>系统及权限</li>
            </ul>
        </div>
        <div class="right-menu">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'NavBar'
})
export default class extends Vue {

}
</script>

<style lang='stylus'>

</style>
