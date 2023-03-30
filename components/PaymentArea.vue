<template>
    <div class="lg:w-8/12 md:w-5/6 w-full mx-auto">
        <div class="current-plan-wrapper white">
            <div class="section-title-plan mb-10">
                <h3 class="text-white text-[24px] font-normal mb-4">Current Plan</h3>
            </div>
            
            <div class="dic-pricing bg-[#1E272D] border-1 border-[#1E272D] mb-10">	
                <div class="grid md:grid-cols-12 gap-6">
                    <div class="md:col-span-3">
                        <!--header-->
                        <div class="dic-pricing-header bg-[#1E272D] border-r-1 border-[#1E272D] py-[40px] px-[10px] text-center">
                            <!--package-->
                            <h4 class="package text-white text-[18px] tracking-[2px] mb-[15px] uppercase">Gold</h4>
                            <!--/package-->
                            <div class="price">
                                <span class="currency text-white relative top-[10px] align-top inline-block leading-[1]">$</span>
                                <span class="amount text-white text-[60px] inline-block leading-[1]">22.99</span>
                                <span class="period text-white text-[11px] tracking-[2px] opacity-80 uppercase inline-block leading-[1]">/mo</span>
                            </div>
                            <div class="old-price">
                                <span class="text-white text-[18px] opacity-80 px-[5px] relative before:bg-white before:content-[''] before:h-[2px] before:left-0 before:opacity-80 before:absolute before:right-0 before:top-[55%] ">$ 45/mo</span>
                            </div>
                        </div>
                        <!--/header-->
                    </div>
                    <div class="md:col-span-5">
                        <!--items-->
                        <div class="dic-pricing-items">
                            <ul class="p-[20px]">
                                <li class="text-white float-left py-[8px] w-full leading-[2] text-[14px]">Individual access to the platform</li>
                                <li class="text-white float-left py-[8px] w-full leading-[2] text-[14px]">High-quality videos</li>
                                <li class="text-white float-left py-[8px] w-full leading-[2] text-[14px]">Watch anywhere you want</li>
                                <li class="text-white float-left py-[8px] w-full leading-[2] text-[14px]">Unlimited access to our complete catalog</li>
                            </ul>
                        </div>
                        <!--/items-->
                    </div>
                    <div class="md:col-span-4">
                        <div class="dic-pricing-btn py-[35px] px-[30px]">
                            <!--button-->
                            <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-green-brand text-white font-semibold hover:bg-white hover:text-[#333333] text-[14px]" to="/pricing" >Upgrade Plan</n-link>
                            <!--/button-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="payment-plan-wrapper white">
            <div class="section-title-plan mb-10">
                <h3 class="text-white text-[24px] font-normal mb-4">Pay with Card</h3>
            </div>
            
            <div class="payment-plan-method payment-plan-method-white">	
                <div class="row grid md:grid-cols-2 gap-6">
                    <div class="col-md-6 col-xs-12">
                        <stripe-element-card
                            ref="cardRef"
                            :pk="pk"
                            hide-postal-code
                            @token="tokenCreated"/>
                        <stripe-checkout
                            ref="checkoutRef"
                            mode="payment"
                            :pk="pk"                            
                            :line-items="lineItems"
                            :successUrl="successUrl"
                            :cancelUrl="cancelUrl"
                        />
                        <button class="login-btn btn bg-green-brand mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-green-brand transition-all duration-300" @click="checkout">Checkout</button>
                    </div>
                    <div class="col-md">
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      this.pk = "pk_test_51LFOF2EpWzH5XJDZlZP9RQC14xxwyNCcE385fzeFzlPBZO2rHj6fH0lH5dLDBfpzzIcS0XK79HCpZyQwQIib3p1c00ueqcwaWA";
      return {
        lineItems: [
            {
            price: 'price_1MrNoTEpWzH5XJDZL4FB5dIm', // The id of the one-time price you created in your Stripe dashboard
            quantity: 1,
            },
        ],
        successUrl: 'http://localhost:3000',
        cancelUrl: 'http://localhost:3000',
      };
    },
    methods: {
        checkout () {
            this.$refs.checkoutRef.redirectToCheckout();
        },
        tokenCreated (token) {
            this.token = token;
        },
    },
  };
  </script>