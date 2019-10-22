<template>
    <div>
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">Option 1</el-menu-item>
                        <el-menu-item index="1-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>

            <el-container>

                <el-main>
                    <el-card class="box-card" @click.native="addTodo()">
                        <div @click.native="addTodo()">

                            <span>{{ subjects[current].front }}</span>
                            <div v-if="type === 'B'">

                                {{ subjects[current].back }}
                                <el-row>
                                    <el-button type="danger">다시 보기</el-button>
                                    <el-button type="primary">보통</el-button>
                                    <el-button type="success">쉬움</el-button>

                                </el-row>
                            </div>

                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    export default {
        methods: {
            addTodo: function() {
                this.type = this.type == 'A' ? 'B' : 'A';
            }
        },
        data: function() {
            return {
                type: 'A',
                current: 0,
                subjects: [{
                    front: '1사단의 위치는?',
                    back: '파주',
                }, {
                    front: '9사단의 위치는?',
                    back: '고양',
                }, ],
            }
        },
    }
</script>