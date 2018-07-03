<!--彩种列表-->
<template>
	<div class='recommend-lottery'>
        <div class='top-bar'>
            <div v-for="item in list2" class='' @Click='changeGame'>
                  <span v-text="item.name"></span>
                  <div class='btm-choose-line'></div>
            </div>
        </div>
        <div  class="recommend-lotteries-box">
        	<div v-for='item in list' class="buy-lottery-item">
        		<img src="/static/faith_game_signl_logo.png" class="faith-lottery" />
        		<img :src="item.url" class='lottery-icon'/>
        		<span class="span-title" v-text='item.title'></span>
        		<span class="span-msg"></span>
        	</div>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				list2:[
				   {
				   	name:'官方玩法'
				   },{
				   	name:'信用玩法'
				   }
				],
				list:[
				 {
				    title: '重庆时时彩',
				    lotteryId: '1',
				    cctype: 'SSC',
				    type: 'CQSSC',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/cqssc.png',
				  },
				    {
				    title: '新疆时时彩',
				    lotteryId: '5',
				    cctype: 'SSC',
				    type: 'XJSSC',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/xjssc.png',
				  },
				    {
				    title: '台湾五分彩',
				    lotteryId: '15',
				    cctype: 'SSC',
				    type: 'TWWFC',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/twwfc.png',
				  },
				  {
				    title: '极速时时彩',
				    lotteryId: '16',
				    cctype: 'SSC',
				    type: 'JSSSC',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/jsssc.png',
				  },
				  {
				    title: '十一运夺金',
				    lotteryId: '2',
				    cctype: 'YYXW',
				    type: 'SYYDJ11x5',
				    numberRange: [1, 11],
				    url: '../../static/sd115.png',
				  },
				  {
				    title: '北京快乐八',
				    lotteryId: '3',
				    cctype: 'KLC',
				    type: 'BJKL8',
				    numberRange: [1, 80],
				    url: '../../static/bjkl8.png',
				  },
				  {
				    title: '上海时时乐',
				    lotteryId: '4',
				    cctype: 'SHSSL',
				    type: 'SHSSL',
				    numberRange: [0, 9],
				    url: '../../static/shssl.png',
				  },
				
				  {
				    title: '江西多乐彩',
				    lotteryId: '8',
				    cctype: 'YYXW',
				    type: 'JXDLC',
				    numberRange: [1, 11],
				    url: '../../static/jx115.png',
				  },
				  {
				    title: '广东十一选五',
				    lotteryId: '9',
				    cctype: 'YYXW',
				    type: 'GD11x5',
				    numberRange: [1, 11],
				    url: '../../static/gd115.png',
				  },
				  {
				    title: '福彩3D',
				    lotteryId: '11',
				    cctype: 'FC3D',
				    type: 'FC3D',
				    faith: false,
				    numberRange: [0, 9],
				    url: '../../static/fucai3d.png',
				  },
				  {
				    title: '排列三、五',
				    lotteryId: '12',
				    cctype: 'PL35',
				    type: 'PL3,5',
				    faith: false,
				    numberRange: [0, 9],
				    url: '../../static/p3p5.png',
				  },
				  {
				    title: '江苏快3',
				    lotteryId: '13',
				    cctype: 'K3',
				    type: 'JSK3',
				    numberRange: [1, 6],
				    faith: true,
				    url: '../../static/jskl3.png',
				  },
				  {
				    title: '天津时时彩',
				    lotteryId: '14',
				    cctype: 'SSC',
				    type: 'TJSSC',
				    numberRange: [0, 9],
				    url: '../../static/tjssc.png',
				  },
				
				  {
				    title: '好运夺金',
				    lotteryId: '17',
				    cctype: 'YYXW',
				    numberRange: [1, 11],
				    type: 'SD11x5',
				    url: '../../static/sd115.png',
				  },
				  {
				    title: '韩式1.5分彩',
				    lotteryId: '18',
				    cctype: 'SSC',
				    type: 'HSYDWFC',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/hsydwfc.png',
				  },
				  {
				    title: '北京PK10',
				    lotteryId: '19',
				    cctype: 'PK10',
				    type: 'BJPK10',
				    faith: true,
				    url: '../../static/bjpk10.png',
				  },
				  {
				    title: '安徽快三',
				    lotteryId: '21',
				    cctype: 'K3',
				    type: 'ahk3',
				    faith: true,
				    numberRange: [1, 6],
				    url: '../../static/ahkl3.png',
				  },
				  {
				    title: '广西快三',
				    lotteryId: '22',
				    cctype: 'K3',
				    type: 'hebk3',
				    faith: true,
				    numberRange: [1, 6],
				    url: '../../static/gxkl3.png',
				  },
				  {
				    title: '新加坡快三',
				    lotteryId: '23',
				    cctype: 'K3',
				    type: 'gxik3',
				    faith: true,
				    numberRange: [1, 6],
				    url: '../../static/xjpkl3.png',
				  },
				  {
				    title: '夏威夷快三',
				    lotteryId: '24',
				    cctype: 'K3',
				    type: 'huibk3',
				    faith: true,
				    numberRange: [1, 6],
				    url: '../../static/xwykl3.png',
				  },
				  {
				    title: '幸运飞艇',
				    lotteryId: '25',
				    cctype: 'PK10',
				    type: 'XYFT',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/xyft.png',
				  },
				  {
				    title: '极速赛马',
				    lotteryId: '26',
				    cctype: 'PK10',
				    type: 'XYFT',
				    numberRange: [0, 9],
				    faith: true,
				    url: '../../static/jssm.png',
				  },
				  {
				    title: '香港六合彩',
				    lotteryId: '27',
				    faith: true,
				    cctype: 'LHC',
				    type: 'xglhc',
				    url: '../../static/hklhc.png',
				  },
				  {
				    title: '幸运六合彩',
				    lotteryId: '28',
				    faith: true,
				    cctype: 'LHC',
				    type: 'xglhc',
				    url: '../../static/xylhc.png',
				  },
				]
			}
		},
		methods:{
		   changeGame(){
		   	
		   }
		}
	}
</script>

<style lang="scss" scoped>
.recommend-lottery{
	width: 100%;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: white;
    border-top: 1px solid #eee;
    .top-bar{
    	width: 100%;
	    height: 40px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: horizontal;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    border-bottom: 1px solid #E2E2E2;
	    div{
	    	height: 40px;
    	    line-height: 40px;
	    	width: 5rem;
		    justify-content: center;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;
		    position: relative;
	    }
    }
    .recommend-lotteries-box{
	    width: inherit;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	    -webkit-box-orient: horizontal;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -webkit-box-pack: start;
	    -ms-flex-pack: start;
	    justify-content: flex-start;
	    -ms-flex-line-pack: distribute;
	    align-content: space-around;
	    .buy-lottery-item{
		    width: 3.3rem;
            height: 3.3rem;
		    margin-top: 5px;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    -ms-flex-direction: column;
		    flex-direction: column;
		    -ms-flex-pack: distribute;
		    justify-content: space-around;
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;
		    position: relative;
		    .lottery-icon{
		    	width: 1.5rem;
                height: 1.5rem;
		    }
		    .faith-lottery{
		    	width: 25px;
			    height: 25px;
			    position: absolute;
			    top: 0;
			    left: 26px;
			    font-size: 14px;
			    color: white;
			    -webkit-transform: scale(0.7);
			    transform: scale(0.7);
			    display: -webkit-box;
			    display: -ms-flexbox;
			    display: flex;
			    -webkit-box-pack: center;
			    -ms-flex-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    -ms-flex-align: center;
			    align-items: center;
		    }
	    }
    }
    
}
</style>