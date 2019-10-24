<template>
    <div>
        <div style="background: url(https://ghost.org/images/docs/bg-setup.svg) bottom no-repeat,linear-gradient(60deg,#556B2F,green); color:white; text-align:center;">
            <h1>
				간단하게 시험을 보고 실력을 확인하세요. <br> 
                시험을 통해 더 확실하게 기억하세요.
            </h1>
        </div>		
        <el-row>
            <h1 style="margin-left:80px;">
                내가 본 시험
            </h1>
            <el-col :span="6" v-for="(test, index) in this.$store.state.tests" v-bind:key="index" :offset="1">
                <div v-if="test.taken">

                    <router-link :to="`/tests/${index+1}`">

                        <el-card style="margin-bottom:10px;">
                            <div>
                                <span style="font-size:1.5em; font-weight:bold;">{{ test.title }}</span>
                                <div class="bottom clearfix">
                                    <h4>{{ test.explanation}}</h4>
                                    <div>
                                        <h5>

                                            {{ test.score }}점

                                        </h5>
                                        <el-tag v-if="test.score >= 90">특급전사!</el-tag>
                                        <el-tag v-else-if="test.score >= 80">전투프로!</el-tag>
                                        <el-tag v-else-if="test.score >= 70">일반</el-tag>

                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <h1 style="margin-left:80px;">
                볼 수 있는 시험
            </h1>
            <el-col :span="6" v-for="(test, index) in this.$store.state.tests" v-bind:key="index" :offset="1">

                <div v-if="!test.taken">

                    <router-link :to="`/tests/${index+1}`">

                        <el-card style="margin-bottom:10px;">
                            <div>
                                <span style="font-size:1.5em; font-weight:bold;">{{ test.title }}</span>
                                <div class="bottom clearfix">
                                    <h4>{{ test.explanation}}</h4>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </router-link>

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>

<script>
    export default {
        props: ['tests'],
    }
</script>