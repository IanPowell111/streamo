<template>
    <div class="flex items-center lg:justify-between lg:flex-row flex-col justify-center">
        <div class="copyright lg:mt-0 mt-5 lg:order-1 order-2">
            <p class="copyright-text text-white text-[14px] text-center">
                Copyright ©2022 All rights reserved
            </p>
        </div>
        <div class="login-alert flex items-center md:flex-row flex-col lg:order-2 order-1">
            <p class="text-white mb-3 md:mb-0 text-[14px] mr-[15px]">Already have an Account? <n-link class="text-white uppercase font-semibold hover:text-green-brand" to="/login">LOGIN</n-link></p>

            <div class="flex items-center justify-center">
                <n-link class="text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-green-brand text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]" to="/pricing">Become a Member</n-link>
            </div>
        </div>
    </div>
</template>