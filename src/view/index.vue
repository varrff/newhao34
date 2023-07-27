<template>
    <div class="container1">
        <background class="background" :style="[page2AnimationValue < 96 ? `transform: scale(${page2AnimationValue}%);` : 'transform: scale(1);',
        page2AnimationValue < 96 ? `border-radius:${page2AnimationValue / 2}px;` : 'border-radius:0px;',
        page2AnimationValue < 80 ? `position: absolute;top:290vh;` : 'position: fixed;'
        ]" />
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

            <p :class="page1AnimationValue > 0.1 && page1AnimationValue < 0.25 ? 'act' : ''">一名正在实习的前端的想法:</p>
            <p :class="page1AnimationValue > 0.25 && page1AnimationValue < 0.4 ? 'act' : ''">在我看来，以兴趣为驱动去学习是一件特别棒的事情。</p>
            <p :class="page1AnimationValue > 0.4 && page1AnimationValue < 0.5 ? 'act' : ''">毕竟在读大学之前,自己一直是一个学业上的学渣,显得毫无用处。
            </p>
            <p :class="page1AnimationValue > 0.5 && page1AnimationValue < 0.6 ? 'act' : ''">当然,在现实的引力下,各种过于理想的想法都会被拖拽下来。</p>
            <p :class="page1AnimationValue > 0.6 && page1AnimationValue < 0.7 ? 'act' : ''">所以掌握足够扎实的理论基础后，以业务为驱动的学习是尤为重要的。
            </p>
            <p :class="page1AnimationValue > 0.7 && page1AnimationValue < 0.8 ? 'act' : ''">人生的意义或许也只是想找到个自圆其说。</p>
            <p :class="page1AnimationValue > 0.8 && page1AnimationValue < 0.9 ? 'act' : ''">或许这就是生活，不够完美但真实。</p>

        </div>
        <div class="main"></div>
        <div class="main"></div>
        <div id="page3" class="main">
            <h1>你的下一个关注，何必是大佬</h1>

            <div class="page3-top" ref="page3Top">
                <!-- <img src="@assets/images/index/1.PNG" alt="">
                <img src="@assets/images/index/2.PNG" alt="">
                <img src="@assets/images/index/3.PNG" alt="">
                <img src="@assets/images/index/4.PNG" alt="">
                <img src="@assets/images/index/5.PNG" alt=""> -->
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/1.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/2.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/3.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/4.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/5.PNG" alt="">
            </div>
            <div class="page3-buttom" ref="page3Buttom">
                <span
                    @click="jumpSite('https://www.douyin.com/user/MS4wLjABAAAA-XHf1bm4eLyMDfa8pzXP2yiwLVBDbBdfq0eEe2G62FI')"
                    class="icon" style="color: #232323;">&#xe673;</span>
                <span @click="jumpSite('https://www.douban.com/people/190819556/?_i=3324722LkWkaot')" class="icon"
                    style="color: #009605;">&#xe643;</span>
                <span
                    @click="jumpSite('https://m.okjike.com/users/76fa93ff-f9b1-45c2-b4e1-e3fdb011ebf9?ref=PROFILE_CARD&utm_source=user_card')"
                    class="icon" style="transform: scale(0.8) translateX(-10%); color: #ffe120;">&#xe8ae;</span>
                <span @click="jumpSite('https://juejin.cn/user/22462119019479/posts')" class="icon juejin">&#xe643;</span>
                <span @click="jumpSite('https://github.com/varrff')" class="icon"
                    style="transform: scale(0.8) translateX(-10%); color: #242424;">&#xe600;</span>
            </div>

        </div>
        <div id="page4" class="main">
            <h1>留言板</h1>

            <div id="page4-content">
                <div class="page4-content-scoll">
                    <span v-for="item in biaoqianData" :key="item.id" :style="[`top:${item.y}%;`, `left:${item.x}%`]">
                        {{ item.value }}
                    </span>
                </div>
                <button @click="postBiaoqian()" class="icon">&#xe8a6;</button>
                <input type="text" v-model="liuyanText" name="" id="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import background from '../components/backgroundThreejs.vue'
import BackgroundAnimation from '../js/BackgroundAnimation'
import { getMessageData, postMessage } from '../api/index'
import { ElMessage } from 'element-plus'
let page1AnimationValue = ref(0)
let page2AnimationValue = ref(110)
let page4AnimationValue = ref(0)


/**
 *  给一个变化的变量，然后给这个变量变化的区间，然后给返回的值的变化区间
 * 例如：scaleValue(bgAnimation.scrollFraction, [0.54, 0.66], [0, .7]);
 **/
function scaleValue(input, inputRange, outputRange) {
    return (input - inputRange[0]) * (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0]) + outputRange[0];
}
const page2Animation = () => {
    const scoll1 = new BackgroundAnimation(50, 200)
    const scoll2 = new BackgroundAnimation(200, 300)
    const scoll3 = new BackgroundAnimation(500, 600)
    window.addEventListener('scroll', () => {
        page1AnimationValue.value = scoll1.getScrollFraction()
        page2AnimationValue.value = scaleValue(scoll2.getScrollFraction(), [0.1, 0.9], [100, 80])
        page4AnimationValue.value = scoll3.getScrollFraction()
    })
}
const page3Top = ref(null)
const page3Buttom = ref(null)
const page3Animation = () => {

    for (let index = 0; index < page3Buttom.value.children.length; index++) {
        const ele = page3Buttom.value.children[index];
        const ele2 = page3Top.value.children;
        ele.addEventListener('mousemove', e => {
            let item = e.target
            let itemRect = item.getBoundingClientRect()
            let offset = Math.abs(e.clientY - itemRect.top) / itemRect.height

            let prev = item.previousElementSibling || null
            let next = item.nextElementSibling || null;

            let prev2 = ele2[index - 1] || null
            let next2 = ele2[index + 1] || null;

            let scale = 0.6

            resetScale()
            // console.log(offset);
            if (prev) {
                prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
                // prev2.style.setProperty('--scale',1-offset)
            }

            item.style.setProperty('--scale', 1 + scale)
            ele2[index].style.setProperty('--scale', 1 + scale)
            if (next) {
                next.style.setProperty('--scale', 1 + scale * offset)
                // next2.style.setProperty('--scale',offset)
            }
        })
    }
    // page3Buttom.value.addEventListener('mouseleave', e => {
    //     resetScale()
    // })
    function resetScale() {
        for (let index = 0; index < page3Buttom.value.children.length; index++) {
            let item = page3Buttom.value.children[index];

            item.style.setProperty('--scale', 1)
            page3Top.value.children[index].style.setProperty('--scale', 1)
        }
    }

}

const biaoqianData = ref(null)

const getBiaoqiant = async () => {
    biaoqianData.value = await getMessageData()
}
const liuyanText = ref('')
const postBiaoqian = async () => {

    try {
        const res = await postMessage(liuyanText.value)
        console.log(res);
        if (res.response.status == 1) {
            ElMessage({
                message: '添加成功',
                type: 'success',
            })
            getBiaoqiant()
        }
        if (res.response.status == 429) {
            ElMessage.error('一次只能添加一个标签，请在2小时后再添加')
        }
    } catch (error) {
        ElMessage.error('服务器故障，请稍后再试')
    }
    // console.log(res.response.status);
}
/**
 * 跳转其他网站，接收一个URL参数
 */
const jumpSite = url => {
    window.open(url, "_blank")
}
onMounted(() => {
    window.scrollTo(0, 0)
    page2Animation()
    page3Animation()
    getBiaoqiant()
})
</script>

<style lang="less" scoped>
.container1 {
    .background {
        // position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
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

        .act {
            color: rgba(255, 255, 255);
        }
    }

    #page3 {
        width: 100%;
        height: 115vh;
        margin-top: -30vh;
        background-color: rgba(245, 245, 247);
        // color: #222222;
        color: #a18cd1;
        justify-content: center;
        flex-wrap: nowrap;
        position: relative;

        h1 {
            margin-top: 5vh;
            font-size: 3vw;
        }

        .page3-top {
            position: absolute;

            height: 70vh;
            top: 0;
            // bottom: 50%;
            transform: translate(-15%,50%);
            display: flex;

            img {
                --scale: 1;
                width: calc(10.5vw + 4vw * var(--scale));
                height: calc(23vw + 4vw * var(--scale));
                position: relative;
                // top: calc((5em *var(--scale)-5em)/5*-1);
                transition: all .5s ease-out;
                // transform: scale(calc(1 * var(--scale)));
            }
        }

        .page3-buttom {
            position: absolute;
            width: 25%;
            height: 100%;
            // background-color: rgba(191, 191, 191);
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            --scale: 1;

            span {
                font-size: calc(6rem * var(--scale));
                cursor: pointer;
                position: relative;
                top: calc((5em *var(--scale)-5em)/5*-1);
                transition: 15ms all ease-out;
                padding: 0 .5rem;

                &.juejin {
                    color: transparent;
                    background-image: url('@assets/images/index/6.svg');
                    // transform: scale(2.3) translate(-5%, -20%);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 80%;
                }
            }

        }
    }

    #page4 {
        width: 100%;
        height: 110vh;
        position: relative;
        justify-content: center;
        align-items: start;
        flex-wrap: nowrap;
        background-color: rgb(28, 28, 28);

        h1 {
            margin-top: 10vh;
            font-size: 85px;
        }

        #page4-content {
            position: absolute;
            width: 95%;
            height: 78%;
            border-radius: 10px;
            top: 20%;
            background-color: #393939;
            overflow: hidden;

            .page4-content-scoll {
                width: 300%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                animation: biaoqianScoll infinite backwards 50s linear;

                span {
                    position: absolute;
                }
            }

            button {
                position: absolute;
                bottom: 2%;
                right: 1%;
                background-color: transparent;
                border: 0;
                font-size: 50px;
                color: #a18cd1;
                cursor: pointer;
            }

            input {
                position: absolute;
                bottom: 2%;
                right: 4%;
                width: 10%;
                height: 5%;
                border-radius: 15px;
                border: 0;
                padding: 10px;
            }

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

@keyframes biaoqianScoll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>