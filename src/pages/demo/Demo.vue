<template>
    <div class="home">
        <el-button>默认按钮</el-button>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
};
</script>
