<template>
    <div class="centent">
        <div class="active" @click="optionflg = !optionflg">
            <p>{{now}}</p>
            <span :class="{'up' : optionflg}"></span>
        </div>
        <div v-show="optionflg" class="option" ref="option">
            <ul>
                <li v-for="(item,index) in list" @click="changeValue(item)">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            optionflg:false
        }
    },
    props:{
        list:{
            type:Array,
            default:[]
        },
        now:{
            type:String,
            default:''
        }
    },
    methods:{
        changeValue(str){
            this.optionflg = !this.optionflg
            this.$emit('changeoption',str)
        }
    }
}
</script>
<style lang="less" scoped>
    .centent{
        font-size: .26rem;
        color:#000;
        line-height: .6rem;
        position: relative;
        width:100%;
        .active{
            display: flex;
            align-items: center;
            p{
                padding-right: 12px;
            }
            span{
                display: block;
                width: .2rem;
                height: .12rem;
                background: url('../assets/icon_down.png') center center no-repeat;
                background-size: 100%;
                transform: rotate(0);
                transition: 1s transform ease;
            }
            span.up{
                transform: rotate(180deg);
            }
        }
        .option{
            position: absolute;
            top:.6rem;
            left: 0;
            right: 0;
            background-color: #fff;
            ul{
                line-height: .6rem;
            }
        }
    }
</style>


