<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroOne
            :PageLink="'movie'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <RecentMovie />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <HorrorSeries />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <OldMovie />
        </div>

        <HeroTwo
            :PageLink="'movie'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <WatchWithFamilyMovie />
        </div>

        <SeriesBannerOne 
            :PageLink="'series'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <AwardedMovie />
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
import authentication from "../../mixins/authentication.js";

import activeplan from "../../mixins/activeplan.js";
import { Auth, API } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Plan } from '../../src/models';
// import { createTodo } from './graphql/mutations';
export default {
    
    mixins:[authentication],
    components: {
        MainHeader: () => import('@/components/header/MainHeader'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        HeroOne: () => import('@/components/hero/HeroOne'),
        HeroTwo: () => import('@/components/hero/HeroTwo'),
        SeriesBannerOne: () => import('@/components/banner/SeriesBannerOne'),
        RecentMovie: () => import('@/components/movie/RecentMovie'),
        OldMovie: () => import('@/components/movie/OldMovie'),
        WatchWithFamilyMovie: () => import('@/components/movie/WatchWithFamilyMovie'),
        AwardedMovie: () => import('@/components/movie/AwardedMovie'),
        HorrorSeries: () => import('@/components/series/HorrorSeries'),
        FooterTop: () => import('@/components/footer/FooterTop'),
        FooterBottom: () => import('@/components/footer/FooterBottom')
    },
    async mounted() {
        console.log(this.$route.query.session_id);
        let user = await Auth.currentAuthenticatedUser({ bypassCache: false })
        const models = await DataStore.query(Plan, p => p.user.eq(user.username));
        console.log('models', models);
        if(this.$route.query.session_id){
            // call rest api

            const customer = await API.get('stripeAPI', '/checkout', {
                                queryStringParameters: {
                                    session_id: this.$route.query.session_id
                                }
                            });
            console.log("customer=>", customer);
            console.log('payment success');
            
            // const models = await DataStore.query(Plan({
            //     'user': user.username
            // }));
            // const oneTodo = await API.graphql<GraphQLQuery<GetTodoQuery>>(
            // graphqlOperation(queries.getTodo, { id: 'some id' })
            // );
            if(models.length > 0){
                /* Models in DataStore are immutable. To update a record you must use the copyOf function
                to apply updates to the item’s fields rather than mutating the instance directly */
                await DataStore.save(Plan.copyOf(models[0], item => {
                    // Update the values on {item} variable to update DataStore entry
                    // item.plan.eq("true")
                    console.log(item)
                }));
            }else{
                await DataStore.save(
                    new Plan({
                        "plan": true,
                        "user": user.username
                    })
                ).then(res => console.log('res', res)).catch(e => console.log('err', e));
            }
            
            
        }else{
            if (!models.length || models.length && !models[0].plan) {
                this.$router.push('/pricing')
            }
        }
        
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