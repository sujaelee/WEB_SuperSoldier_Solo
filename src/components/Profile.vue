<template>
    <div>
		
        <h1 style="margin-left:80px;">
            {{this.$store.state.user.class}} {{this.$store.state.user.name}}
        </h1>
        <el-row>
        </el-row>
        <h1 style="margin-left:80px;">
            내 과목
        </h1>
        <el-row>
            <el-col :span="6" v-for="(subject, index) in this.$store.state.subjects" v-bind:key="index" :offset="1">
                <div v-if="subject.taken">

                    <router-link :to="`/subjects/${subject.id}`">

                        <el-card style="margin-bottom:10px; ">
                            <img src="@/assets/logo.png" class="image">
                            <div>
                                <span style="font-size:1.5em; font-weight:bold;">{{ subject.title }}</span>
                                <div class="bottom clearfix">
                                    <h4>
                                        <span>{{ subject.subtitle }}</span>
                                    </h4>
                                </div>
                            </div>
                        </el-card>
                    </router-link>

                </div>
            </el-col>
        </el-row>
                <h1 style="margin-left:80px;">
            내 카드들
        </h1>
<el-row>
            <el-col :span="6" v-for="(card, index) in $store.state.decks" v-bind:key="index" :offset="1">
                <div v-if="$store.state.subjects[index].taken">

				<router-link :to="`/cards/${index+1}`">

                    <el-card style="margin-bottom:10px;">
                        <img src="@/assets/note.png" class="image">

                        <div>
                            <span style="font-size:1.5em; font-weight:bold;">{{ card.title }}</span>
                            <div class="bottom clearfix">
                                <span>{{ card.number }}개의 카드 중 {{card.seen}}개를 학습하셨습니다.</span>
                            </div>
                        </div>
                    </el-card>
                </router-link>
	</div>
            </el-col>
        </el-row>
        <el-row>
            <h1 style="margin-left:80px;">
                내가 본 시험
            </h1>
            <el-col :span="6" v-for="(test, index) in this.$store.state.tests" v-bind:key="index" :offset="1">
                <div v-if="test.taken">

                    <router-link :to="`/tests/${index+1}`">

                        <el-card style="margin-bottom:10px;">
                            <div>
                                <span style="font-size:1.5em; font-weight:bold;">{{ test.title }}</span>
                                <div class="bottom clearfix">
                                    <h4>{{ test.explanation}}</h4>
                                    <div>
                                        <h5>

                                            {{ test.score }}점

                                        </h5>
                                        <el-tag v-if="test.score >= 90">특급전사!</el-tag>
                                        <el-tag v-else-if="test.score >= 80">전투프로!</el-tag>
                                        <el-tag v-else-if="test.score >= 70">일반</el-tag>

                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </router-link>
                </div>
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
        data() {
            return {
                subjects: [],
            }
        },
        methods: {
            register(subject) {
                this.$store.commit('register', {
                    value: subject
                })
            },
        },
    }
</script>