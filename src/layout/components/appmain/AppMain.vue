<template>
    <div class="app-main">
        <transition
            name="fade-transform"
            mode="out-in"
        >
            <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'AppMain'
})
export default class extends Vue {

}
</script>

<style lang='stylus' scoped>
.app-main
    overflow hidden
</style>
