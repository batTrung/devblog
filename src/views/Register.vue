<template>
    <div>
        <section class="min-vh-100 d-flex align-items-center py-5 py-lg-0 bg-login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="text-center mb-4 mt-2">
                            <h1 class="mb-0 h3">Đăng ký</h1>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="mt-3 mt-lg-0 bg-white border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <b-form
                                @submit.prevent="onSubmit()">
                                <VMessages :messages="errors" />
                                <b-form-group>
                                    <label for="email">Địa chỉ email</label>
                                    <b-input-group class="mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-envelope"></span>
                                            </span>
                                        </div>
                                        <b-input
                                            autofocus
                                            v-model.trim="$v.user.email.$model"
                                            placeholder="email"
                                            type="text"
                                            @keyup="emailChecker($event.target.value)">
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
                                        <b-form-invalid-feedback
                                        :state="!emailExists">
                                            Địa chỉ email đã được sử dụng. Vui lòng chọn email khác.
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <label for="password1">Mật khẩu</label>
                                    <b-input-group class="mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-unlock-alt"></span>
                                            </span>
                                        </div>
                                        <b-input
                                            id="password1"
                                            v-model.trim="$v.user.password1.$model"
                                            placeholder="password"
                                            type="password">
                                        </b-input>
                                    </b-input-group>
                                    <div v-show="$v.user.password1.$anyDirty">
                                        <b-form-invalid-feedback
                                        :state="$v.user.password1.required">
                                            Hãy nhập mật khẩu
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback
                                        :state="$v.user.password1.minLength">
                                            Mật khẩu quá ngắn, tối thiểu là {{ $v.user.password1.$params.minLength.min }} từ
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <label for="password2">Nhập lại mật khẩu</label>
                                    <b-input-group class="mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-unlock-alt"></span>
                                            </span>
                                        </div>
                                        <b-input
                                            v-model.trim="$v.user.password2.$model"
                                            placeholder="password"
                                            id="password2"
                                            type="password">
                                        </b-input>
                                    </b-input-group>
                                    <div v-show="$v.user.password2.$anyDirty">
                                        <b-form-invalid-feedback
                                        :state="$v.user.password2.required">
                                            Nhập lại mật khẩu của bạn
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback
                                        :state="$v.user.password2.minLength">
                                            Mật khẩu quá ngắn, tối thiểu là {{ $v.user.password2.$params.minLength.min }} từ
                                        </b-form-invalid-feedback>
                                        <b-form-invalid-feedback
                                        :state="$v.user.password2.sameAsPassword1">
                                            Mật khẩu không khớp
                                        </b-form-invalid-feedback>
                                    </div>
                                </b-form-group>
                                <b-button
                                    block
                                    type="submit"
                                    variant="primary"
                                    :disabled="$v.user.$invalid || emailExists">
                                    Đăng ký
                                </b-button>
                            </b-form>
                            <div class="mt-3 mb-4 text-center"><span class="font-weight-normal">hoặc</span></div>
                            <div class="btn-wrapper my-4 text-center">
                                <b-avatar variant="facebook" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                    </custom-icon>
                                </b-avatar>
                                <b-avatar variant="google" class="mr-3">
                                    <custom-icon>
                                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
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
                                    Bạn đã có tài khoản? <router-link :to="{ name: 'login' }" style="color: #ea2c5a">Đăng nhập</router-link>
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
import { mapState } from "vuex";
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
import ApiService from '@/common/api.service'
import store from '@/store'
import VMessages from '@/components/VMessages'
import {
    CHANGE_LAYOUT,
    REGISTER,
} from '@/store/actions.type'

export default {
    name: 'Register',
    title: 'Đăng ký',
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(CHANGE_LAYOUT, 'full-layout'),
        ]).then(() => {
            next()
        })
    },
    beforeRouteLeave(to, from, next) {
        store.dispatch(CHANGE_LAYOUT, 'base-layout')
        next()
    },
    components: {
        VMessages,
    },
    data() {
        return {
            user: {
                email: null,
                password1: null,
                password2: null,
            },
            emailExists: false,
        }
    },
    validations: {
        user: {
            email: {
                required,
                email,
            },
            password1: {
                required,
                minLength: minLength(8),
            },
            password2: {
                required,
                minLength: minLength(8),
                sameAsPassword1: sameAs('password1'),
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
            this.$store.dispatch(REGISTER, this.user)
                .then(() => {
                    this.$router.replace({ name: 'home' })
                })
                .catch(() => {
                    this.user.password1 = ''
                    this.user.password2 = ''
                })
        },
        emailChecker(email) {
            ApiService.get(
                'check/account/email/checker',
                email,
            ).then(({ data }) => {
                this.emailExists = data.invalid
            })
        },
    },
}
</script>
