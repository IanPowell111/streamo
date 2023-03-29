<template>
<div class='accordion'>
	<div class='accordion__item' v-for='(item, i) in items' :key='`accordion-item-${i}`' >
		<div
			class='accordion__title'
			:class='{ "accordion__title_active": activeIndex === i }'
			@click='activeIndex = activeIndex === i ? null : i'
		>
			<span>{{ item.title }}</span>
			<span
				class='accordion__arrow'
				:class='{ "accordion__arrow_active": activeIndex === i }'
			><i class="zmdi zmdi-chevron-down"></i></span>
		</div>
		<div class='accordion__value' v-show='i === activeIndex'>
			{{ item.value }}
		</div>
	</div>
</div>
</template>

<script>
  export default {
    data (){ 
        return{
            activeIndex: null,
            items: [
                {
                    title: "What is MySweetSport?",
                    value: "My Sweet Sport is a web platform that provides decision-making solutions for sports enthusiasts, coaches, and athletes, through a catalog of high-quality videos."
                },
                {
                    title: "How can I track my progress?",
                    value: "Our platform allows you to track your progress by providing you with analysis tools and performance indicators."
                },
                {
                    title: "How expensive is MySweetSport?",
                    value: "22.99$/month for an individual plan. If you a looking for a team plan, just contact us."
                },
                {
                    title: "How can I subscribe to My Sweet Sport as a team?",
                    value: "Contact us today to discuss subscription options that are customized for your team and take advantage of the benefits of our complete catalog of high-quality videos."
                },
                {
                    title: "How easy is cancelling the subscription?",
                    value: "Just send an email to subscription@mysweetsport.com and we'll cancel your subscription for you."
                },
                {
                    title: "What do I get with a subscription?",
                    value: "Unlimited access to our complete catalog of high-quality videos for sports making decision training."
                }
            ]
        }
    }
  }
</script>


<style lang='scss' scoped>
.accordion{
    @apply block mx-auto p-0 w-full max-w-[880px] overflow-hidden;

    &__item{
        @apply mb-[10px] p-0 last:mb-0;
    }
    &__title{
        @apply flex justify-between items-center cursor-pointer m-0 px-4 py-5 text-white transition-all bg-[#000000] text-[18px] sm:text-[22px];
        &_active{
            @apply bg-green-brand;
        }
    }
    &__arrow{
        &_active{
            @apply transform rotate-180;
        }
    }
    &__value{
        @apply bg-[#000000] text-[#cccccc] p-[30px];
    }
}
</style>
