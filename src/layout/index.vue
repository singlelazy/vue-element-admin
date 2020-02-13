<template>
    <div class="app-wrapper">
        <div class="main-container">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { NavBar, AppMain } from './components';
@Component({
    name: 'Layout',
    components: {
        NavBar,
        AppMain
    }
})
export default class extends Vue {

}
</script>

<style lang='stylus' scoped>

</style>
