<template>
    <div style="">
        <el-container style=" border: 1px solid #eee;     height: 85vh;
">
            <el-aside width="300px" style=" border : 1px solid #eee">
                <el-menu v-for="(chapter, index) in this.$store.state.subjects[$route.params.id - 1].chapters" v-bind:key="index" style="border : 0px; ">
                    <el-menu-item-group @click.native="changeNumber(index)">
                        <el-menu-item style="border-bottom : 1px solid #eee">{{ chapter }}</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>

            <el-container>

                <el-main>
                    <h1>
                        {{ this.$store.state.subjects[ $route.params.id - 1 ].title}}
                    </h1>
                    <h2>
                        {{ this.$store.state.subjects[ $route.params.id - 1 ].chapters[chapterNumber]}}
                    </h2>

                    <span style="white-space: pre-wrap; 
  font-family: inherit;">
                        {{ this.$store.state.subjects[ $route.params.id - 1 ].contents[chapterNumber]}}
                    </span>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    export default {
        methods: {
            changeNumber: function(a) {
                this.chapterNumber = a;
            }
        },
        data: function() {
            return {
                chapterNumber: 0,
                subjects: [
                ],
            }
        },
    }
</script>