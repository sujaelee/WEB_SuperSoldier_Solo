<template>
    <div>
        <el-row>
            <el-col :span="6" v-for="(card, index) in cards" v-bind:key="index" :offset="1">
<router-link :to="`/cards/${index+1}`">

                <el-card style="margin-bottom:10px;">
                    <div>
						<span style="font-size:1.5em; font-weight:bold;">{{ card.title }}</span>
                        <div class="bottom clearfix">
						<span>{{ card.number }}</span>
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
        props: ['cards'],
    }
</script>