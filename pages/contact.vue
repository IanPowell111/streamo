<template>
    <div>
        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <div class="py-[25px] bg-[#1E272D]">
            <Breadcrumb 
                :BreadcrumbTitle="'Contact Us'" 
                :BreadcrumbEnd="'Contact'"
            />
        </div>

        <div class="py-[50px] md:py-[80px] bg-[#000000]">
            <div class="container">
                <ContactForm/>
            </div>
        </div>

        <div class="pb-[50px] md:pb-[80px] bg-[#000000] relative">
            <ContactMap/>
            <ContactInfo/>
        </div>


        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#000000]">
            <FooterTop/>
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#000000] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <FooterBottom/>
        </div>

    </div>
</template>

<script>
import activeplan from "../mixins/activeplan";
import authentication from "../mixins/authentication.js";
    export default {
        mixins:[authentication, activeplan],
        components: {
            MainHeader: () => import('@/components/header/MainHeader'),
            OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ContactForm: () => import('@/components/ContactForm'),
            ContactMap: () => import('@/components/ContactMap'),
            ContactInfo: () => import('@/components/ContactInfo'),
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
</style>