<template>
    <el-header style="background-color: white;  font-size: 12px; line-height: 0;">

        <div style="float:left; line-height:50px; font-size:1.5em">
            SuperSoldier
        </div>

        <el-menu class="el-menu-demo" mode="horizontal" :router="true" active-text-color="green" style="font-weight:bold;" text-color="black">
            <el-menu-item index="/">
                <i class="el-icon-medal-1"></i>
                SuperSoldier</el-menu-item>
            <el-menu-item index="/subjects">공부하기</el-menu-item>
            <el-menu-item index="/cards">카드학습</el-menu-item>
            <el-menu-item index="/tests">시험보기</el-menu-item>
            <el-menu-item index="/login" v-if = "!this.$store.state.logined">로그인</el-menu-item>
            <el-menu-item index="/profile" v-else >{{this.$store.state.user.name}}</el-menu-item>
			
        </el-menu>

    </el-header>
</template>
<style>
</style>

<script>
    export default {};
</script>