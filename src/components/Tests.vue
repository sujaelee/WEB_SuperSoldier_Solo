<template>
    <div>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in tests" v-bind:key="index" :offset="1">
<router-link :to="`/tests/${index+1}`">

                <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 14px;">
                        <span>{{ subject.title }}</span>
                        <div class="bottom clearfix">
						<span>{{ subject.number }}</span>
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