<template>
    <div>
        <h1 style="margin-left:80px;">
            신청한 과목
        </h1>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in subjects" v-bind:key="index" :offset="1">
                <router-link :to="`/subjects/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                            <div class="bottom clearfix">
                                <span>{{ subject.subtitle }}</span>
                            </div>
                        </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
        <h1 style="margin-left:80px;">
            과목 목록
        </h1>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in subjects" v-bind:key="index" :offset="1">
                <router-link :to="`/subjects/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                            <div class="bottom clearfix">
                                <span>{{ subject.subtitle }}</span>
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
        props: ['subjects'],
    }
</script>