<template>
    <div class="flex flex-wrap md:flex-row flex-col">
        <div class="flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <Logo logLink="/home"/>
            <p class="text-sm text-white w-full sm:w-[75%] my-5">A web platform that offers sports decision-making training through high-quality videos for athletes and coaches</p>
            <ul class="fotter-socail">
                <li class="inline-block" v-for='(link, index) in socialData' :key="index">
                    <a class="sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2" :href="link.url" :class="link.mediaName"><i :class="link.iconName"></i></a>
                </li>
            </ul>
        </div>
        <div class="lg:w-3/4 md:w-2/3 w-full">
            <div class="footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0">

                <div class="footer-quicklink">
                    <ul class="flex items-center flex-wrap">
                        <li class="md:mr-10 mr-5 last:mr-0" v-for='(link, index) in footerMenuData' :key="index">
                            <n-link class="text-white text-[16px] md:text-[18px] hover:text-green-brand" :to="link.mainlink">
                                {{link.name}}
                            </n-link>
                        </li>
                    </ul>
                </div>

                <!--<BrandLogo />

                <div class="footer-quicklink-2">
                    <ul class="flex items-center flex-wrap">
                        <li class="mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2" v-for='(link, index) in footerSubmenuData' :key="index">
                            <n-link class="text-white text-[14px] hover:text-green-brand" :to="link.mainlink">
                                {{link.name}}
                            </n-link>
                        </li>
                    </ul>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import socialData from "@/data/new/social.json";
import footerMenuData from "@/data/new/footermenudata.json";
import footerSubmenuData from "@/data/new/footersubmenudata.json";
export default {
    components: {
        Logo: () => import('@/components/logo/Logo'),
        BrandLogo: () => import('@/components/footer/BrandLogo')
    },
    data() {
        return{
            socialData,
            footerMenuData,
            footerSubmenuData
        }
    }
}
</script>

<style lang="scss" scoped>
.facebook{
    @apply border-1 border-[#3b5998] bg-[#3b5998] text-white hover:bg-transparent hover:text-white;
}
.twitter{
    @apply border-1 border-[#00B3EC] bg-[#00B3EC] text-white hover:bg-transparent hover:text-white;
}
.linkedin{
    @apply border-1 border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-transparent hover:text-white;
}
.instagram{
    @apply border-1 border-[#E4405F] bg-[#E4405F] text-white hover:bg-transparent hover:text-white;
}
</style>