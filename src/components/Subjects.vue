<template>
    <div>
        <div style="background: url(https://ghost.org/images/docs/bg-setup.svg) bottom no-repeat,linear-gradient(60deg,#556B2F,green); color:white; text-align:center;">
            <h1>
				병기본, 교범, 군대 정보... <br> 
                군인에게 필요한 모든 과목들을 모았습니다.
            </h1>
        </div>
        <h1 style="margin-left:80px;">
            신청한 과목
        </h1>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in subjects" v-bind:key="index" :offset="1">
                <div v-if="subject.taken">

                    <router-link :to="`/subjects/${subject.id}`">

                        <el-card style="margin-bottom:10px; ">
                            <img src="@/assets/logo.png" class="image">
                            <div>
                                <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                                <div class="bottom clearfix">
                                    <h4>
                                        <span>{{ subject.subtitle }}</span>
                                    </h4>
                                </div>
                            </div>
                        </el-card>
                    </router-link>

                </div>
            </el-col>
        </el-row>
        <h1 style="margin-left:80px;">
            과목 목록
        </h1>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in subjects" v-bind:key="index" :offset="1">
                <div v-if="!subject.taken">

                    <el-card style="margin-bottom:10px;">
                        <img src="@/assets/logo.png" class="image">

                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                            <div class="bottom clearfix">
                                <h4>
                                    <span>{{ subject.subtitle }}</span>
                                </h4>
                            </div>
                            <div>
                                <el-button type="success" @click.native="register(subject)">신청하기</el-button>
                            </div>
                        </div>
                    </el-card>

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
        margin: auto;
        width: 200px;
        height: 150px;
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
        methods: {
            register(subject) {
                subject.taken = true;
            },
        },
        props: ['subjects'],
    }
</script>