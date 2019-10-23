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

                        <el-menu-item-group v-for="(test, index) in tests[$route.params.id - 1].q" v-bind:key="test.id" style="border : 0px; ">

                            <el-menu-item @click.native="changeNumber(index)" style="border-bottom : 1px solid #eee">
                                <i class="el-icon-success" v-if="fixed && tests[$route.params.id - 1].a[index] == tests[$route.params.id - 1].submitted[index] "></i>
                                <i class="el-icon-error" v-if="fixed && tests[$route.params.id - 1].a[index] != tests[$route.params.id - 1].submitted[index] "></i>
                                {{ index+1 }}번

                                <span style="float:right">
                                    <i class="el-icon-check" v-if="tests[$route.params.id - 1].submitted[index]"></i>
                                </span>
                            </el-menu-item>
                        </el-menu-item-group>

                    </el-menu>
                    <el-button type="primary" style="float:right; margin-top: 10px;" @click="open($route.params.id - 1)">답안 제출하기</el-button>
                </div>

                <div style="float:left; display: inline-block; width:280px; margin: 10px;">
                    결과 :
                    <el-progress :text-inside="true" :stroke-width="30" status="success" :percentage="percentage"></el-progress>
                </div>
            </el-aside>

            <el-container>

                <el-main>
                    <h1 style="font-size:2em; ">
                        {{ number+1 + '. ' + tests[$route.params.id-1].q[number]}}
                    </h1>
                    <div style="width: 600px; margin-left:40px; margin-right: 10px; float : left; ">

                        <el-input placeholder="답안을 입력하세요 ..." v-model="tests[$route.params.id - 1].submitted[number]" @keyup.enter.native="editAnswer($route.params.id - 1, number)" v-if="tests[$route.params.id - 1].submitted[number]" class="inputBox" :disabled="fixed"></el-input>
                        <el-input placeholder="답안을 입력하세요 ..." v-model="input" @keyup.enter.native="submitAnswer($route.params.id - 1, number, input)" v-else size="medium" class="inputBox" :disabled="fixed"></el-input>

                    </div>
                    <el-button type="primary" @click.native="editAnswer" style="margin-top: 2px;" v-if="tests[$route.params.id - 1].submitted[number]">확인</el-button>
                    <el-button type="primary" @click.native="submitAnswer($route.params.id - 1,number, input)" style="margin-top: 2px;" v-else>확인</el-button>

                    <div style="clear:both;" v-show="fixed">
                        <h1 v-show="fixed && tests[$route.params.id-1].a[number] == tests[$route.params.id-1].submitted[number]" style="color:green;">
                            맞았습니다 !
                        </h1>
                        <h1 v-show="fixed && tests[$route.params.id-1].a[number] != tests[$route.params.id-1].submitted[number]" style="color:red;">
                            틀렸습니다 !
                        </h1>
                        <h1> 답 : {{ tests[$route.params.id-1].a[number]}} </h1>
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
                if (id != this.tests[test].q.length - 1) this.number++
                    else this.number
            },
            submitAnswer(test, id, value) {
                this.tests[test].submitted[id] = value;
                this.input = ''
                if (id != this.tests[test].q.length - 1) this.number++
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
                    this.fixed = true;
                    let answers = 0;
                    for (let i in this.tests[page].q) {
                        if (this.tests[page].a[i] === this.tests[page].submitted[i]) answers++;
                    }
                    this.percentage = answers / this.tests[page].q.length * 100;
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
                        q: [
                            '수도방위사령부는 무슨 부대인가?',
                            '제72동원보병사단은 무슨 부대인가?',
                            '25사단의 위치는 어디인가?',
                            '수방사의 위치는 어디인가?'
                        ],
                        a: [
                            '방패',
                            '올림픽',
                            '파주',
                            '용인',
                        ],
                        submitted: [
                            '',
                            '',
                            '',
                            '',
                        ]
                    }, {
                        q: [
                            '변압기의 1차 코일에 감은 수가 100회, 2차 코일에 감은 수가 300회인 변압기의 1차 코일에 100V 전압을 가할 시 2차 코일에 유기되는 전 압은 몇 볼트(V) 인가?',
                            '중령은 영어로 무엇인가?',
                            '받들어 총은 영어로 무엇인가?',
                            '차렷은 영어로 무엇인가?',
							'Sergeant는 무슨 뜻인가?'
                        ],
                        a: [
                            'Warrant Officer',
                            'Lieutenant Colonel',
                            'Present Arms',
                            'Attention',
							'병장'
                        ],
                        submitted: [
                            '',
                            '',
                            '',
                            '',
							''
                        ]
                    }
                ],
            }
        }
    }
</script>