<template>
    <div id="app">

        <Header />
        <el-main >
            <router-view />
        </el-main>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    export default {
        name: 'app',
        components: {
            Header,
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

    * {
        font-family: 'Noto Sans KR', sans-serif;
    }
    html, body {
        height: 100%;
        margin: 0px;
    }

    a {
        text-decoration: none;
    }
	
	h1 {
		margin-top: 0px;
		font-size: 3em;
	}
</style>