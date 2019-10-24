<template>

    <div style="margin:auto; width:400px;">
        <h1>

            로그인
        </h1>
        <el-form label-width="100px">
            <el-form-item label="아이디">
                <el-input v-model="user.id"></el-input>
            </el-form-item>
            <el-form-item label="비밀번호">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login(user.id, user.password)">로그인</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    id: '',
                    password: ''
                }
            };
        },
        methods: {
            login(id,password) {
    this.$store.commit('login',{uid:id,upw:password})
				
				if(this.$store.state.logined) this.$router.push('/');
            },
        },
    }
</script>