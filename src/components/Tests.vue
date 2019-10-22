<template>
    <div>
        <el-row>
            <h1 style="margin-left:80px;">
                내가 본 시험
            </h1>
            <el-col :span="6" v-for="(subject, index) in tests" v-bind:key="index" :offset="1">
                <router-link :to="`/tests/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                            <div class="bottom clearfix">
								75점
                            </div>
                        </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
        <el-row>
            <h1 style="margin-left:80px;">
                볼 수 있는 시험
            </h1>
            <el-col :span="6" v-for="(subject, index) in tests" v-bind:key="index" :offset="1">
                <router-link :to="`/tests/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                            <div class="bottom clearfix">
                            </div>
                        </div>
                    </el-card>
                </router-link>
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