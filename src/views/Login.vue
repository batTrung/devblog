<template>
    <div>
        <section class="min-vh-100 d-flex align-items-center py-5 py-lg-0 bg-login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="text-center mb-4 mt-2">
                            <h1 class="mb-0 h3">Đăng nhập</h1>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="mt-3 mt-lg-0 bg-white border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <b-form
                                @submit.prevent="onSubmit()">
                                <VMessages :messages="errors" />
                                <b-form-group>
                                    <label for="email">Địa chỉ email</label>
                                    <b-input-group>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-envelope"></span>
                                            </span>
                                        </div>
                                        <b-input
                                            autofocus
                                            v-model.lazy="$v.user.email.$model"
                                            placeholder="email"
                                            type="text">
                                        </b-input>
                                    </b-input-group>
                                    <div v-show="$v.user.email.$anyDirty">
                                        <b-form-invalid-feedback
                                        :state="$v.user.email.required">
                                            Hãy nhập địa chỉ email
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback
                                        :state="$v.user.email.email">
                                            Địa chỉ email không hợp lệ
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <label for="password">Mật khẩu</label>
                                    <b-input-group>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-unlock-alt"></span>
                                            </span>
                                        </div>
                                        <b-input
                                            v-model.trim="$v.user.password.$model"
                                            placeholder="password"
                                            type="password">
                                        </b-input>
                                    </b-input-group>
                                    <div v-show="$v.user.password.$anyDirty">
                                        <b-form-invalid-feedback
                                        :state="$v.user.password.required">
                                            Hãy nhập mật khẩu
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <b-form-checkbox
                                            name="checkbox-1"
                                            value="accepted"
                                            class="form-check-label">
                                            Remember me
                                        </b-form-checkbox>
                                        <div><a href="" class="small text-right">Quên mật khẩu?</a></div>
                                    </div>
                                </b-form-group>
                                <b-button
                                    block
                                    type="submit"
                                    variant="success"
                                    :disabled="$v.user.$invalid">
                                    Đăng nhập
                                </b-button>
                            </b-form>
                            <div class="mt-3 mb-4 text-center"><span class="font-weight-normal">hoặc đăng nhập với</span></div>
                            <div class="btn-wrapper my-4 text-center">
                                <b-avatar variant="facebook" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                    </custom-icon>
                                </b-avatar>
                                <b-avatar variant="google" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-google"></span>
                                    </custom-icon>
                                </b-avatar>
                                <b-avatar variant="github" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-github"></span>
                                    </custom-icon>
                                </b-avatar>
                                <b-avatar variant="twitter" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-twitter"></span>
                                    </custom-icon>
                                </b-avatar>
                            </div>
                            <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                <span class="font-weight-normal">
                                    Chưa có tài khoản? <router-link :to="{ name: 'register' }" style="color: #ea2c5a">Đăng ký</router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState } from "vuex"
import { required, email } from 'vuelidate/lib/validators'
import store from '@/store'
import VMessages from '@/components/VMessages'
import {
    CHANGE_LAYOUT,
    LOGIN,
} from '@/store/actions.type'

export default {
    name: 'Login',
    title: 'Đăng nhập',
    components: {
        VMessages,
    },
    data() {
        return {
            user: {
                email: null,
                password: null,
            },
        }
    },
    validations: {
        user: {
            email: {
                required,
                email,
            },
            password: {
                required,
            }
        },
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    },
    methods: {
        onSubmit() {
            this.$store.dispatch(LOGIN, this.user)
                .then(() => {
                    this.$router.replace({ name: 'home' })
                })
                .catch(() => {
                  this.user.password = null
                })
        },
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(CHANGE_LAYOUT, 'full-layout')
        ]).then(() => {
            next()
        })
    },
    beforeRouteLeave(to, from, next) {
        store.dispatch(CHANGE_LAYOUT, 'base-layout')
        next()
    },
}
</script>
