<template>
    <div>
        <el-container style=" border: 1px solid #eee;     height: 85vh;
">
            <el-aside width="300px" style=" border : 1px solid #eee">

                <span style="font-weight:bold; margin: 10px;">

                    문제 번호
                </span>
                <span style="float:right; font-weight:bold; margin-right:10px;">

                    답안 입력

                </span>
                <div style="">
                    <el-menu style="border : 0px; ">

                        <el-menu-item-group v-for="(test, index) in $store.state.tests[$route.params.id - 1].q" v-bind:key="test.id" style="border : 0px; ">

                            <el-menu-item @click.native="changeNumber(index)" style="border-bottom : 1px solid #eee">
                                <i class="el-icon-success" v-if="$store.state.tests[$route.params.id -1].fixed && $store.state.tests[$route.params.id - 1].a[index] == $store.state.tests[$route.params.id - 1].submitted[index] "></i>
                                <i class="el-icon-error" v-if="$store.state.tests[$route.params.id -1].fixed  && $store.state.tests[$route.params.id - 1].a[index] != $store.state.tests[$route.params.id - 1].submitted[index] "></i>
                                {{ index+1 }}번

                                <span style="float:right">
                                    <i class="el-icon-check" v-if="$store.state.tests[$route.params.id - 1].submitted[index]"></i>
                                </span>
                            </el-menu-item>
                        </el-menu-item-group>

                    </el-menu>
                    <el-button type="primary" style="float:right; margin-top: 10px;" @click="open($route.params.id - 1)" v-if="!$store.state.tests[$route.params.id -1].fixed">답안 제출하기</el-button>
                </div>

                <div style="float:left; display: inline-block; width:280px; margin: 10px;">
                    결과 :
                    <el-progress :text-inside="true" :stroke-width="30" status="success" :percentage="percentage"></el-progress>
                </div>
            </el-aside>

            <el-container>

                <el-main>
                    <h1 style="font-size:2em; ">
                        {{ number+1 + '. ' + this.$store.state.tests[$route.params.id-1].q[number]}}
                    </h1>
                    <div style="width: 600px; margin-left:40px; margin-right: 10px; float : left; ">

                        <el-input placeholder="답안을 입력하세요 ..." v-model="$store.state.tests[$route.params.id - 1].submitted[number]" @keyup.enter.native="editAnswer($route.params.id - 1, number)" v-if="$store.state.tests[$route.params.id - 1].submitted[number]" class="inputBox" :disabled="$store.state.tests[$route.params.id -1].fixed "></el-input>
                        <el-input placeholder="답안을 입력하세요 ..." v-model="input" @keyup.enter.native="submitAnswer($route.params.id - 1, number, input)" v-else class="inputBox" :disabled="$store.state.tests[$route.params.id -1].fixed "></el-input>

                    </div>
                    <el-button type="primary" @click.native="editAnswer($route.params.id - 1, number)" style="margin-top: 2px;" v-if="$store.state.tests[$route.params.id - 1].submitted[number]">확인</el-button>
                    <el-button type="primary" @click.native="submitAnswer($route.params.id - 1,number, input)" style="margin-top: 2px;" v-else>확인</el-button>

                    <div style="clear:both;" v-show="$store.state.tests[$route.params.id -1].fixed ">
                        <h1 v-show="$store.state.tests[$route.params.id -1].fixed  && $store.state.tests[$route.params.id-1].a[number] == $store.state.tests[$route.params.id-1].submitted[number]" style="color:green;">
                            맞았습니다 !
                        </h1>
                        <h1 v-show="$store.state.tests[$route.params.id -1].fixed  && $store.state.tests[$route.params.id-1].a[number] != $store.state.tests[$route.params.id-1].submitted[number]" style="color:red;">
                            틀렸습니다 !
                        </h1>
                        <h1> 답 : {{ this.$store.state.tests[$route.params.id-1].a[number]}} </h1>
                    </div>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<style>
    .inputBox {
        font-size: 30px;

        margin-right: 10px;
        height: 100px;
    }
</style>

<script>
    export default {
        methods: {
            editAnswer(test, id) {
                if (id != this.$store.state.tests[test].q.length - 1) this.number++
                    else this.number
            },
            submitAnswer(test, id, value) {
                this.$store.state.tests[test].submitted[id] = value;
                this.input = ''
                if (id != this.$store.state.tests[test].q.length - 1) this.number++
                    else this.number
            },
            changeNumber: function(a) {
                this.number = a;
            },
            open(page) {
                this.$confirm('답안을 제출하면 더 이상 수정할 수 없습니다. 제출하시겠습니까?', '경고', {
                    confirmButtonText: '네',
                    cancelButtonText: '아니오',
                    type: 'warning'
                }).then(() => {
                    this.$store.state.tests[page].fixed = true;
                    let answers = 0;
                    for (let i in this.$store.state.tests[page].q) {
                        if (this.$store.state.tests[page].a[i] === this.$store.state.tests[page].submitted[i]) answers++;
                    }
                    this.percentage = answers / this.$store.state.tests[page].q.length * 100;
					this.$store.state.tests[page].taken = true;
					this.$store.state.tests[page].score = this.percentage;
					
                    this.$message({
                        type: 'success',
                        message: '답안이 제출되었습니다.'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '취소되었습니다.'
                    });
                });
            }
        },
        data: function() {
            return {
                percentage: 0,
                number: 0,
                input: '',
				fixed: false,
            }
        }
    }
</script>