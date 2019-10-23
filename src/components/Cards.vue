<template>
    <div>
        <h1 style="margin-left:80px;">
            내 카드들
        </h1>
        <el-row>
            <el-col :span="6" v-for="(card, index) in cards" v-bind:key="index" :offset="1">
                <router-link :to="`/cards/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <img src="@/assets/logo.png" class="image">

                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ card.title }}</span>
                            <div class="bottom clearfix">
                                <span>{{ card.number }}개의 카드 중 20개를 학습하셨습니다.</span>
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
        props: ['cards'],
    }
</script>