<template>

    <div class="flex justify-between flex-col md:flex-row items-center px-[15px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] mx-auto py-5 lg:py-[0px] shadow-[0_2px_18px_rgba(0,0,0,0.1)] z-999 w-full bg-[#000000]">

        <div class="flex items-center">
            <Logo logLink="/home"/>
            <MainMenu class="2xl:ml-[100px] ml-[50px]"/>
        </div>

        <div class="flex items-center mt-4 md:mt-0">
            <HeaderSearch/>
            <!--<Notification/>-->
            <Profile/>
            <BtnDefault
                :btnLink="'/contact'"
                :btnClass="'py-[5px] px-[15px] bg-green-brand text-white font-medium hover:bg-white hover:text-[#333333]'"
                :btnText="'Subscribe Now'"
                class="ml-[10px] sm:ml-[15px]"
            />
            <!-- Offcanvas Button Start -->
            <div class="lg:hidden block leading-[1rem] ml-[10px] sm:ml-[15px]">
                <button class="overflow-hidden bg-transparent h-[18px] relative w-[26px]" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                    <span class="w-full h-[2px] bg-white block my-2 transition-all before:content-[''] before:top-0 before:bottom-auto before:absolute before:left-0 before:w-full before:h-[2px] before:bg-white after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-white after:top-auto after:bottom-0"></span>
                </button>
            </div>
            <!-- Offcanvas Button End -->
        </div>
    </div>

</template>

<script>
export default {
    components: {
        Logo: () => import('@/components/logo/Logo'),
        MainMenu: () => import('@/components/header/MainMenu'),
        HeaderSearch: () => import('@/components/header/HeaderSearch'),
        Notification: () => import('@/components/header/Notification'),
        Profile: () => import('@/components/header/Profile'),
            BtnDefault: () => import('@/components/buttons/BtnDefault'),
    },
    methods: {
        // offcanvas mobile-menu
        mobiletoggleClass(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        }
    }
}
</script>
<style lang='scss'>

</style>