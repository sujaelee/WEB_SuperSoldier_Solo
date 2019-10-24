<template>
    <div>
        <el-container style=" border: 1px solid #eee;     height: 85vh;
">
            <el-aside width="300px" style=" border : 1px solid #eee">
                <el-menu style="border : 0px; ">
                    <el-menu-item-group>
                        <el-menu-item style="border-bottom : 1px solid #eee">
                            <h2>
                                아직 학습하지 않음 {{count[0]}}개
                            </h2>
                        </el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee">
                            <h2>

                                1분 후 복습 {{count[1]}}개</h2>
                        </el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee">
                            <h2>
                                5분 후 복습 {{count[2]}}개
                            </h2>
                        </el-menu-item>
                        <el-menu-item style="border-bottom : 1px solid #eee">
                            <h2>
                                15분 후 복습 {{count[3]}}개
                            </h2>
                        </el-menu-item>

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
                                    <el-button type="danger" @click.native="again(myCards[0].id)">다시 보기</el-button>
                                    <el-button type="primary" @click.native="normal(myCards[0].id)">보통</el-button>
                                    <el-button type="success" @click.native="easy(myCards[0].id)">쉬움</el-button>

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
                        front: '구급법 실시 전 일차적 대응 방안은?',
                        back: '신고',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 2,
                        front: '신고 이후에 해야할 일은?',
                        back: '위험 상황에서 벗어나기',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 3,
                        front: '구급법에서 ABC란?',
                        back: 'Airway - 기도, Breathing - 호흡, Circulation - 맥박, Conscious - 의식',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 4,
                        front: '물집 방지 방안은?',
                        back: '장갑을 끼고, 헝겊 따위로 부위를 감아주는 것',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 5,
                        front: '눈꺼풀에 이물질이 들어갔을 때는?',
                        back: '아래로 잡아당겨 안구와 아래쪽 눈꺼풀을 살핀다. 이때, 눈을 위로 치켜떠야 한다. 옷자락 끝이나 깨끗히 씻은 손에 물을 묻혀서 이물질을 제거한다',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 6,
                        front: '붕대 감기의 기본은?',
                        back: '단단하게, 풀리지 않도록',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 7,
                        front: '출혈이 없을 때 주의해야 할 점은?',
                        back: '혈액 순환을 방해할 정도로 감는 것',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 8,
                        front: '붕대감기에서 가장 먼저 해야 할 것은?',
                        back: '사선으로 단단하게 감는다',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 9,
                        front: '붕대를 사선으로 단단하게 감은 후 해야할 일은 ?',
                        back: '가장자리 선의 평형을 유지하면서 약 30~50cm정도를 남겨주고 둘둘 감는다',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }, {
                        id: 10,
                        front: '붕대감기의 끝맺음은?',
                        back: ' 마지막 층 아래에 붕대의 끝을 밀어넣고 안전핀, 반창고 등으로 고정시킨다',
                        reviewDate: Date.now(),
                        viewCount: 0,
                        level: '',
                    }],
                    [{
                            id: 1,
                            front: '경례',
                            back: 'Present Arms',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 2,
                            front: '바로 (경례후)',
                            back: 'Order Arms',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 3,
                            front: '바로',
                            back: 'Ready Front',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 4,
                            front: '차렷',
                            back: '(At) Attention',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 5,
                            front: '열중쉬어',
                            back: 'Parade Rest',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 6,
                            front: '쉬어',
                            back: 'At Ease',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 7,
                            front: '제자리 걸어가',
                            back: 'Mark Time March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 8,
                            front: '뛰어가',
                            back: 'Doubletime… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 9,
                            front: '줄줄이 우로 가',
                            back: 'Column Right… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 10,
                            front: '줄줄이 좌로 가',
                            back: 'Column Left… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 11,
                            front: '받들어 총',
                            back: 'Present… Arms',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 12,
                            front: '세워 총',
                            back: 'Order… Arms',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 13,
                            front: '우로 봐',
                            back: 'Eyes… Right(er)',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 14,
                            front: '앞으로 가',
                            back: 'Forward… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 15,
                            front: '우향 앞으로 가',
                            back: 'Right Flank… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 16,
                            front: '좌향 앞으로 가',
                            back: 'Left Flank… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 17,
                            front: '앞으로 가 (분열)',
                            back: 'Forward… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 18,
                            front: '뒤로 돌아가',
                            back: 'To the Rear… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        }, {
                            id: 19,
                            front: '제자리에 서',
                            back: 'Platoon(Ready)… Halt',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 20,
                            front: '번호 붙여 가',
                            back: 'Countoff… Off',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 21,
                            front: '빠른 걸음으로 가',
                            back: 'Doubletime… March',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 22,
                            front: '좌향좌',
                            back: 'Left(er)… Face',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 23,
                            front: '우향우',
                            back: 'Right(er)… Face',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 24,
                            front: '뒤로 돌아',
                            back: 'About… Face',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 25,
                            front: '해산',
                            back: 'Dismissed / Fallout ',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                    ],
                   [{
                            id: 1,
                            front: '북한군 보병 편제 인원은?',
                            back: '12명',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 2,
                            front: '북한군 공격 전술은',
                            back: '방어는 공격을 위한 기동의 한 부분이다',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 3,
                            front: '북한군이 채택하고 있는 구 소련의 전술 개념은',
                            back: '작전기동단',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 4,
                            front: '기동장비를 갖춘 대규모 지상병력을 동원하여 기습적이고, ‘다축종심공격(多軸縱深攻擊)’을 감행하는 전술은',
                            back: '작전기동단',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 5,
                            front: '작전기동단 전술을 달성하기 위해 북한군이 사용하는 세 가지 방법은?',
                            back: '분할 소멸법, 화력 습격법, 압축 소멸법',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 6,
                            front: '북한군 공격 형태 4가지는?',
                            back: '돌파, 우회, 포위, 첨입',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 7,
                            front: '북한군의 2가지 방어전술은?',
                            back: '진지방어, 기동방어',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 8,
                            front: '북한군 방어요소 3가지는?',
                            back: '반땅끄방어, 반항공방어, 원형방어',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 9,
                            front: '북한군의 전투대형 4가지는?',
                            back: '일선형, 전각형, 후각형, 좌우제차형',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 10,
                            front: '북한군의 전투요소 4가지는?',
                            back: '집결, 기습, 전멸, 후속',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                    ],[{
                            id: 1,
                            front: '수도방위사령부의 이름은?',
                            back: '방패',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 2,
                            front: '특수전사령부의 이름은?',
                            back: '사자',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 3,
                            front: '국제평화지원단의 이름은?',
                            back: '온누리',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 4,
                            front: '707특수임무단의 이름은?',
                            back: '백호',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 5,
                            front: '미사일 사령부의 이름은?',
                            back: '무극',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 6,
                            front: '항공작전 사령부의 이름은?',
                            back: '불사조',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 7,
                            front: '군수사령부의 이름은?',
                            back: '칠성대',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 8,
                            front: '수도군단의 이름은?',
                            back: '충의',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 9,
                            front: '17보병사단의 이름은?',
                            back: '번개',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 10,
                            front: '1군단의 이름은?',
                            back: '광개토',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 11,
                            front: '1포병여단의 이름은?',
                            back: '비호포병',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 12,
                            front: '2군단의 이름은?',
                            back: '쌍용',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 13,
                            front: '7보병사단의 이름은?',
                            back: '칠성',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },
                        {
                            id: 14,
                            front: '9사단의 이름은?',
                            back: '백마',
                            reviewDate: Date.now(),
                            viewCount: 0,
                            level: ''
                        },

                    ],
                ],
            }
        },
    }
</script>