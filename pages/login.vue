<template>
    <div>
        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <div class="py-[25px] bg-[#1E272D]">
            <Breadcrumb 
                :BreadcrumbTitle="'Login & Register'" 
                :BreadcrumbEnd="'Login & Register'"
            />
        </div>

        <div class="py-[50px] md:py-[80px] bg-[#000000]">
            <div class="container">
                <div class="flex items-center justify-center text-center login-register-tab mb-8 md:mb-[60px]">
                    <n-link to="/login" class="text-white text-[25px] font-bold mr-5 pr-5 relative hover:text-green-brand before:content-[''] before:bg-[#454545] before:h-[18px] before:mx-auto before:absolute before:-right-[2px] before:top-[3px] before:transition-all before:w-[1px]">Login</n-link>
                    <n-link to="/register" class="text-white text-[25px] font-bold relative hover:text-green-brand">Register</n-link>
                </div>
                <Login />
            </div>
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]">
            <FooterTop/>
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <FooterBottom/>
        </div>

    </div>
</template>

<script>
    export default {
        components: {
            MainHeader: () => import('@/components/header/MainHeader'),
            OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Login: () => import('@/components/Login'),
            FooterTop: () => import('@/components/footer/FooterTop'),
            FooterBottom: () => import('@/components/footer/FooterBottom')
        },
        data () {
            return {
                navOpen: false
            }
        }
    }
</script>
<style lang='scss'>
.login-register-tab{
    & .nuxt-link-exact-active{
        @apply text-green-brand;
    }
}
</style>