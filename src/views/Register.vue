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
                            <form action="#">
                                <div class="form-group"><label for="email">Địa chỉ email</label>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fas fa-envelope"></span>
                                            </span>
                                        </div>
                                        <input id="email" placeholder="email" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group"><label for="password">Mật khẩu</label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend"><span class="input-group-text"><span class="fas fa-unlock-alt"></span></span></div><input id="password" placeholder="Password" type="password" aria-label="Password" required="required" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group"><label for="password">Nhập lại mật khẩu</label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend"><span class="input-group-text"><span class="fas fa-unlock-alt"></span></span></div><input id="password" placeholder="Password" type="password" aria-label="Password" required="required" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block btn-primary">Đăng ký</button>
                            </form>
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
import store from '@/store'
import {
    CHANGE_LAYOUT,
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
}
</script>