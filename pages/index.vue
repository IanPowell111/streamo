<template>

    <div>

        <div class="flex justify-between flex-row items-center px-[15px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] mx-auto py-[10px] z-999 w-full absolute top-0 left-0 right-0">

            <div class="flex items-center">
                <Logo logLink="/home"/>
            </div>

            <div class="flex items-center">
                <BtnDefault
                    :btnLink="'/login'"
                    :btnClass="'py-[13px] px-[30px] bg-green-brand text-white hover:bg-white hover:text-[#333333] text-[18px] font-semibold'"
                    :btnText="'Sign In'"
                    class="ml-[10px] sm:ml-[15px]"
                />
            </div>
        </div>

        <div class="hero-landing h-screen relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-60 flex items-center justify-center" style="background-image:url(/images/bg/bg-stadium.jpg);">
            <div class="container">
                <div class="landing-hero-content text-center relative max-w-3xl mx-auto">
                    <h1 class="title text-white font-semibold text-[34px] md:text-[50px] sm:text-[40px] lg:text-[60px] leading-[1.13] mx-auto">Endless movies, TV shows, and more.</h1>
                    <h4 class="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] font-normal">Enjoy anywhere. Unsubscribe anytime.</h4>
                    <p class="text-white font-[17px] mb-[20px]">Ready to watch? Enter your email to create or restart your membership.</p>

                    <div class="create-membership-wrap mt-8 mx-auto relative">
                        <input placeholder="Email Address" class="w-full bg-white pl-4 pr-[175px] py-5 relative rounded-[4px] text-black placeholder:text-black focus:outline-none focus:shadow-outline">
                        <button class="landing-btn-style h-16 leading-[64px] px-8 text-center bg-green-brand hover:bg-[#cf0408] transition-all text-white absolute rounded-[0_4px_4px_0] right-0" type="button">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <!--<div class="movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]">
            <div class="container">
                <div class="grid gap-8 items-center grid-cols-1 sm:grid-cols-12">
                    <div class="sm:col-span-7 order-2 sm:order-1">
                        <div class="movie-site-info-content info-width-1 mb-8 lg:mb-0">
                            <h2 class="title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold ">Enjoy Watching Them on TV.</h2>
                            <h3 class="sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]">Whether it’s Smart TV, Xbox, Apply TV, Watch Your Favorite Program with Great Pleasure.</h3>
                        </div>
                    </div>
                    <div class="sm:col-span-5 text-center order-1 sm:order-2">
                        <div class="movie-site-img">
                            <img src="/images/landing/watch-everywhere.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <div class="bg-[#000000] py-[50px] md:py-[80px] ">
            <!-- CounterUp Section Start -->
            <div class="container">
                <div v-observe-visibility="{callback: visibilityChanged, once: true}">
                    <div v-if="commentsVisible" class="grid md:grid-cols-4 grid-cols-2 gap-9">
                        <div v-for="(count, imageIndex) in counter" :key="imageIndex"  class="text-center">
                            <div class="count-wrap flex justify-center items-center">
                                <countTo class="text-5xl uppercase font-semibold block text-green-brand" :class="className" :startVal='count.startVal' :endVal='count.endVal' :duration='3000' :autoplay='true'></countTo>
                                <span class="text-green-brand text-[48px] font-semibold">+</span>
                            </div>
                            <p class="capitalize tex-white text-[25px] text-white" :class="className">{{count.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CounterUp Section End -->
        </div>

        <!--<div class="movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]">
            <div class="container">
                <div class="grid gap-8 items-center grid-cols-1 sm:grid-cols-12">
                    <div class="sm:col-span-7 order-2 sm:order-2">
                        <div class="movie-site-info-content info-width-1 mb-8 lg:mb-0">
                            <h2 class="title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold ">Download Favorites, Watch them Offline!.</h2>
                            <h3 class="sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]">It’s super easy to save your favorite shows!</h3>
                        </div>
                    </div>
                    <div class="sm:col-span-5 text-center order-1 sm:order-1">
                        <div class="movie-site-img">
                            <img src="/images/landing/4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <div class="py-[50px] md:py-[80px] bg-[#000000]">
            <PricingArea />
        </div>

        <div class="movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]">
            <div class="container">
                <div class="grid gap-8 items-center grid-cols-1 sm:grid-cols-12">
                    <div class="sm:col-span-7 order-2 sm:order-1">
                        <div class="movie-site-info-content info-width-1 mb-8 lg:mb-0">
                            <h2 class="title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold ">Watch Anywhere You Want.</h2>
                            <h3 class="sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]">Watch an endless number of shows, on your phone, tablet, laptop, and TV.</h3>
                        </div>
                    </div>
                    <div class="sm:col-span-5 text-center order-1 sm:order-2">
                        <div class="movie-site-img">
                            <img src="/images/landing/watch-everywhere.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-[50px] md:py-[80px] bg-[#000000]">
            <div class="container">
                <h2 class="text-center text-white text-[36px] md:text-[40px] lg:text-[50px] font-semibold mb-[50px] leading-[1.5]">Popular Movies And Shows</h2>
                <div class="awardedmovie-area relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="(product, Index) in popularMovie.slice(0, 4)" :key="Index">
                        <SingleProduct 
                            :product="product"
                            :PageLink="'/movie'"
                            :btnLink="'/movie'"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="py-[50px] md:py-[80px] bg-[#12222d]">
            <div class="container">
                <h2 class="text-center text-white text-[36px] md:text-[40px] lg:text-[50px] font-semibold mb-[50px] leading-[1.5]">Frequently Asked Questions</h2>
                <FaqArea />
            </div>
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
    import countTo from 'vue-count-to';
import movieData from "@/data/new/moviedata.json";
export default {
        props: {
            className: String,
        },
    components: {
        Logo: () => import('@/components/logo/Logo'),
        BtnDefault: () => import('@/components/buttons/BtnDefault'),
        PricingArea: () => import('@/components/PricingArea'),
        SingleProduct: () => import('@/components/product/SingleProduct'),
        FaqArea: () => import('@/components/FaqArea'),
        FooterTop: () => import('@/components/footer/FooterTop'),
        FooterBottom: () => import('@/components/footer/FooterBottom'),
        countTo
    },
    data () {
        return {
            movieData,
            popularMovie: [],
            commentsVisible: false,
            counter: [
                {
                    startVal: 0,
                    endVal: 500,
                    text: "Total Videos"
                },
                {
                    startVal: 0,
                    endVal: 10,
                    text: "Position"
                },
                {
                    startVal: 0,
                    endVal: 200,
                    text: "Subscribers"
                },
                {
                    startVal: 0,
                    endVal: 156,
                    text: "Awards"
                }
            ]
        }
    },
    methods: {
        visibilityChanged(isVisible) {
            this.commentsVisible = isVisible;
        },
    },
    mounted () {
        this.popularMovie = this.movieData.filter(product=> product.popular == true)
    }
}
</script>
<style lang='scss'>

</style>