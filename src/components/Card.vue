<template>
    <div>
        <el-container style=" border: 1px solid #eee;     height: 85vh;
">
            <el-aside width="300px" style=" border : 1px solid #eee">
                <el-menu style="border : 0px; ">
                    <el-menu-item-group>
                        <el-menu-item style="border-bottom : 1px solid #eee"> 아직 학습하지 않음 {{count[0]}}개</el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee"> 1분 후 복습 {{count[1]}}개</el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee"> 5분 후 복습 {{count[2]}}개</el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee"> 15분 후 복습 {{count[3]}}개</el-menu-item>

                    </el-menu-item-group>
                </el-menu>
            </el-aside>

            <el-container>

                <el-main>
                    <el-card class="box-card" @click.native="toggle()">
                        <div v-if="myCards.length!=0">
                            <span>
                                <h1 style="font-size:2em; ">
                                    {{ myCards[0].front }}
                                </h1>
                            </span>
                            <div v-if="type">
                                <h3>

                                    {{ myCards[0].back }}
                                </h3>
                                <el-row>
                                    <el-button type="danger" @click.native="again(myCards[$route.params.id-1].id)">다시 보기</el-button>
                                    <el-button type="primary" @click.native="normal(myCards[$route.params.id-1].id)">보통</el-button>
                                    <el-button type="success" @click.native="easy(myCards[$route.params.id-1].id)">쉬움</el-button>

                                </el-row>
                            </div>

                        </div>

                        <div v-else>
                            <span>
                                <h1 style="font-size:2em; ">
                                    학습을 완료하셨습니다 !
                                </h1>
                                <el-button type="primary" @click.native="reload()">새로 고침</el-button>
                            </span>
                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>
<style>
    .box-card {
        cursor: pointer;
    }
</style>

<script>
    export default {
        methods: {
            again: function(id) {
                this.changed++;
                this.cards[this.page][id - 1].viewCount = this.cards[this.page][id - 1].viewCount > 3 ? 3 : 0;
                this.cards[this.page][id - 1].reviewDate += 10;
            },
            normal: function(id) {
                this.changed++;
                this.cards[this.page][id - 1].reviewDate += this.interval[this.cards[this.page][id - 1].viewCount];
                this.cards[this.page][id - 1].viewCount++;
            },
            easy: function(id) {
                this.changed++;
                this.cards[this.page][id - 1].reviewDate += this.interval[this.cards[this.page][id - 1].viewCount];
                this.cards[this.page][id - 1].viewCount += 2;
            },
            reload: function() {
                this.changed++;
            },
            toggle: function() {
                this.type = !this.type;
            },
        },
        created() {
            this.page = this.$route.params.id - 1;
            this.myCards = this.cards[this.page].filter(it => it.reviewDate <= Date.now());
            this.changed++;
        },
        watch: {
            // whenever question changes, this function will run
            changed: function() {
                this.myCards = this.cards[this.page].filter(it => it.reviewDate <= Date.now());

                function compare(a, b) {
                    if (a.reviewDate < b.reviewDate)
                        return -1;
                    if (a.reviewDate > b.reviewDate)
                        return 1;
                    return 0;
                }
                this.myCards.sort(compare);
                this.count = [0, 0, 0, 0, 0, 0];
                for (let i = 0; i < this.cards[this.page].length; i++) {
                    if (this.cards[this.page][i].reviewDate < Date.now()) this.count[0]++;
                    else if (this.cards[this.page][i].reviewDate < Date.now() + 1000 * 60) this.count[1]++;
                    else if (this.cards[this.page][i].reviewDate < Date.now() + 1000 * 60 * 5) this.count[2]++;
                    else if (this.cards[this.page][i].reviewDate < Date.now() + 1000 * 60 * 15) this.count[3]++;
                }
            }
        },
        data: function() {
            return {
                interval: [1000 * 60, 1000 * 60 * 5, 1000 * 60 * 15, 1000 * 60 * 60 * 24, 1000 * 60 * 60 * 24 * 3, 1000 * 60 * 60 * 24 * 7, ],
                count: [0, 0, 0, 0, 0, 0],
                changed: 0,
                myCards: [],
                page: 0,
                type: false,
                current: 0,
                cards: [
                    [{
                        id: 1,
                        front: '1사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 2,
                        front: '2사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 3,
                        front: '3사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 4,
                        front: '4사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 5,
                        front: '5사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 6,
                        front: '6사단의 위치는?',
                        back: '파주',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, ],
                    [{
                        id: 1,
                        front: '1사fweffwe단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, {
                        front: '2사단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, {
                        front: '3사단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, {
                        front: '4사단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, {
                        front: '5사단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, {
                        front: '6사단의 위치는?',
                        back: '파주',
                        reviewDate: '',
                        viewCount: '',
                        level: '',
                    }, ]
                ],
            }
        },
    }
</script>