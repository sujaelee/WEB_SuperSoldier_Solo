<template>
    <el-header style="background-color: white;  font-size: 12px; line-height: 0;">
      
      <div style="float:left; line-height:50px; font-size:1.5em">
        SuperSoldier
  </div>
      
<el-menu class="el-menu-demo" mode="horizontal" :router="true">
  <el-menu-item index="/">SuperSoldier</el-menu-item>
  <el-menu-item index="/subjects">공부하기</el-menu-item>
    <el-menu-item index="/cards">카드학습</el-menu-item>
  <el-menu-item index="/tests">시험보기</el-menu-item>

</el-menu>

    </el-header>
</template>
<style>
</style>

<script>
  export default {
  };
</script>
