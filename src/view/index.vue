<template>
    <div class="container1">
        <background class="background" :style="[page2AnimationValue>0.1?`transform: scale(${page2AnimationValue}%);`:' ']"/>
        <div id="intro" class="main">
            <h2 class=" h2">你好啊，我是</h2>
            <h1 class="newh h1">wujiahao</h1>
            <h3 class="newh h3">前端开发</h3>
            <div id="introduce">
                <h4>个人简介</h4>
                <p class="state">天津 | 学生 | 天津现代职业技术学院 | 2021-2024</p>

                <p>一名在天津上学的普通大学生，在学校学习软件专业，并在众多方向中选择了前端方向，</p>
                <p>或许是因为我喜欢构建各种简洁而美观的动画,</p>
                <p>并以前端为引子,开始更深入的了解计算机这个大世界,目前正在学习后端</p>
                <p>热衷各种好玩的新技术新特性</p>

            </div>
        </div>
        <div id="page2" class="main">

            <p :class="page1AnimationValue > 0.1 && page1AnimationValue < 0.25 ? 'act' : ''">一名正在实习的前端的想法</p>
            <p :class="page1AnimationValue > 0.25 && page1AnimationValue < 0.4 ? 'act' : ''">在我看来，以兴趣为驱动去学习是一件特别棒的事情。</p>
            <p :class="page1AnimationValue > 0.4 && page1AnimationValue < 0.5 ? 'act' : ''">毕竟在读大学之前,自己一直是一个学业上的学渣,显得毫无用处。</p>
            <p :class="page1AnimationValue > 0.5 && page1AnimationValue < 0.6 ? 'act' : ''">当然,在现实的引力下,各种过于理想的想法都会被拖拽下来。</p>
            <p :class="page1AnimationValue > 0.6 && page1AnimationValue < 0.7 ? 'act' : ''">所以掌握足够扎实的理论基础后，以业务为驱动的学习是尤为重要的。</p>
            <p :class="page1AnimationValue > 0.7 && page1AnimationValue < 0.8 ? 'act' : ''">人生的意义或许也只是想找到个自圆其说。</p>
            <p :class="page1AnimationValue > 0.8 && page1AnimationValue < 0.95 ? 'act' : ''">或许这就是生活，不够完美但真实。</p>

        </div>

    </div>
</template>

<script setup>
import { ref,onMounted } from "vue"
import background from '../components/background.vue'
import BackgroundAnimation from '../js/BackgroundAnimation'
let page1AnimationValue = ref(0)
let page2AnimationValue = ref(0)
/**
 *  给一个变化的变量，然后给这个变量变化的区间，然后给返回的值的变化区间
 * 例如：scaleValue(bgAnimation.scrollFraction, [0.54, 0.66], [0, .7]);
 **/ 
function scaleValue(input, inputRange, outputRange) {
  return (input - inputRange[0]) * (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0]) + outputRange[0];
}
const page2Animation =()=>{
    const scoll1 = new BackgroundAnimation(50,200)
    const scoll2 = new BackgroundAnimation(200,300)
    window.addEventListener('scroll', () => {
    page1AnimationValue.value = scoll1.getScrollFraction()
    page2AnimationValue.value = scaleValue(scoll2.getScrollFraction(),[0.1, 0.9], [100, 60])
    console.log( page2AnimationValue.value);
  })
} 

onMounted(()=>{
    page2Animation()
})
</script>

<style lang="less" scoped>
.container1 {
    .background {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .main {
        display: flex;
        width: 60%;
        height: 100vh;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        padding: 0 2vmin;
        place-content: center flex-start;
        color: #fff;
    }

    .newh {
        width: 100%;
        background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
        // background-size: 50% 50%;
        background-position: 0 50%;
        /* 增大background-size值 */
        animation: flowing 10s infinite;
        /* 增加动画时间 */
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        position: relative;
        z-index: 0;
        // color: transparent;

    }

    .h1 {
        font-size: 8.25vmax;
        width: 500;
    }

    .h2 {
        font-size: 3.25vmax;
        width: 500;
    }

    .h3 {
        font-size: 1.85vmax;
    }

    .state {
        display: block;
        margin-block-start: .5em;
        margin-block-end: .5em;
    }

    #intro {
        display: flex;

        #introduce {
            margin-top: 2%;
        }
    }

    #page2 {
        margin-top: 30vh;

        p {
            font-size: 55px;
            font-weight: 700;
            color: rgba(228, 228, 228, 0.3);
        }
        .act{
            color: rgba(255, 255, 255);
        }
    }
}

@keyframes flowing {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>