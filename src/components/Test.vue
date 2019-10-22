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

                        <el-menu-item-group v-for="(test, index) in tests" v-bind:key="index" style="border : 0px; ">

                            <el-menu-item @click.native="changeNumber(index)" style="border-bottom : 1px solid #eee">
                                <i class="el-icon-success" v-if="fixed && test.a == test.submitted "></i>
                                <i class="el-icon-error" v-if="fixed && test.a !== test.submitted "></i>
                                {{ index+1 }}번

                                <span style="float:right">
                                    <i class="el-icon-check" v-if="test.submitted"></i>
                                </span>
                            </el-menu-item>
                        </el-menu-item-group>

                    </el-menu>
                    <el-button type="primary" style="float:right; margin-top: 10px;" @click="open">답안 제출하기</el-button>
                </div>

                <div style="float:left; display: inline-block; width:280px; margin: 10px;">
                    결과 :
                    <el-progress :text-inside="true" :stroke-width="30" status="success" width="150" :percentage="percentage"></el-progress>
                </div>
            </el-aside>

            <el-container>

                <el-main>
                    <h1 style="font-size:3em; ">
                        {{ number+1 + '. ' + tests[number].q}}
                    </h1>
                    <div style="width: 600px; margin-left:40px; margin-right: 10px; float : left; ">

                        <el-input placeholder="답안을 입력하세요 ..." v-model="tests[number].submitted" @keyup.enter.native="editAnswer" v-if="tests[number].submitted" class="inputBox" :disabled="fixed"></el-input>
                        <el-input placeholder="답안을 입력하세요 ..." v-model="input" @keyup.enter.native="submitAnswer(number, input)" v-else size="medium" class="inputBox" :disabled="fixed"></el-input>

                    </div>
                    <el-button type="primary" @click.native="submitAnswer(number, input)" style="margin-top: 2px;">확인</el-button>
                    <div style="clear:both;" v-show="fixed">
                        <h1 v-show="fixed && tests[number].a == tests[number].submitted" style="color:green;">
                            맞았습니다 !
                        </h1>
                        <h1 v-show="fixed && tests[number].a != tests[number].submitted" style="color:red;">
                            틀렸습니다 !
                        </h1>
                        <h1> 답 : {{ tests[number].a}} </h1>
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
            editAnswer() {
                this.number++;
            },
            submitAnswer(id, value) {
                this.tests[id].submitted = value;
                this.input = ''
                if (id != 3) this.number++
                    else this.number
            },
            changeNumber: function(a) {
                this.number = a;
            },
            open() {
                this.$confirm('답안을 제출하면 더 이상 수정할 수 없습니다. 제출하시겠습니까?', '경고', {
                    confirmButtonText: '네',
                    cancelButtonText: '아니오',
                    type: 'warning'
                }).then(() => {
                    this.fixed = true;
                    let answers = 0;
                    for (let i in this.tests) {
                        if (this.tests[i].a === this.tests[i].submitted) answers++;
                    }
                    this.percentage = answers /  this.tests.length * 100;
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
                fixed: false,
                input: '',
                tests: [{
                    q: '수도방위사령부는 무슨 부대인가?',
                    a: '방패',
                    submitted: '',
                }, {
                    q: '제72동원보병사단은 무슨 부대인가?',
                    a: '올림픽',
                    submitted: '',
                }, {
                    q: '25사단의 위치는 어디인가?',
                    a: '파주',
                    submitted: '',
                }, {
                    q: '수방사의 위치는 어디인가?',
                    a: '용인',
                    submitted: '',
                }],
            }
        },
    }
</script>