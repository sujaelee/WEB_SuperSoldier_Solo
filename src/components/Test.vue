<template>
    <div>
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title">1번 문제</template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">2번 문제</template>
                    </el-submenu>
                </el-menu>
                <el-button type="primary">제출하기</el-button>

            </el-aside>

            <el-container>

                <el-main>
                    <h1 style="font-size:3em; margin-left:50px;">
                        {{ subjects[0].title}}
                    </h1>
                    <span style="white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;">
                        <el-input placeholder="Please input" v-model="input"></el-input>
                    </span>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                subjects: [{
                    title: '1사단의 위치는 어디인가?',
                    content: '파주',
                }, {
                    title: '화생방',
                    project: 'Project B',
                }, {
                    title: '정신전력',
                    project: 'Project C',
                }, {
                    title: '군부대',
                    project: 'Project D',
                }],
            }
        },
    }
</script>