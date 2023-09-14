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

            <p :class="page1AnimationValue > 0.1 && page1AnimationValue < 0.25 ? 'act' : ''">刚出来工作的一些想法：</p>
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
                <img src="@assets/images/index/1.PNG" alt="">
                <img src="@assets/images/index/2.PNG" alt="">
                <img src="@assets/images/index/3.PNG" alt="">
                <img src="@assets/images/index/4.PNG" alt="">
                <img src="@assets/images/index/5.PNG" alt="">
                <!-- <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/1.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/2.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/3.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/4.PNG" alt="">
                <img src="https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/5.PNG" alt=""> -->
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
        <div id="page5" class="main">
            <backgroundThree2 class="background2" :style="[page5AnimationValue > 0.05 && page5AnimationValue < 0.72 ? 'position:fixed' : 'position: absolute;top:0vh;',
            page5AnimationValue > 0.72 ? 'position: absolute;top:200vh;' : ''
            ]" />
            <div class="text">
                <h1 v-show="page5AnimationValue > 0.1 && page5AnimationValue < 0.25"
                    :style="[`option:${page5AnimationValue + 0.3};`, `transform:scale(${page5AnimationValue + 0.6})`]">
                    不止是程序员
                </h1>
                <h1 v-show="page5AnimationValue > 0.25 && page5AnimationValue < 0.35"
                    :style="[`option:${page5AnimationValue + 0.3};`, `transform:scale(${page5AnimationValue + 0.6})`]">
                    也想成为一个逍遥自在的诗人</h1>
                <h1 v-show="page5AnimationValue > 0.35 && page5AnimationValue < 0.50"
                    :style="[`option:${page5AnimationValue + 0.3};`, `transform:scale(${page5AnimationValue + 0.6})`]">
                    欢迎来到我的小诗记
                </h1>
            </div>
            <Transition name="page5">
                <div class="page5-content" v-show="page5AnimationValue > 0.55 && page5AnimationValue < 0.75">
                    <div class="page5-content-item" style="top: 30vh;left: 20vw;">
                        <h1>春夜饮酒记</h1>
                        <p>
                            无端空虚思万千,酒杯抚摸情难言。<br />
                            微醺之际世事忘,内心澄澈如山泉。<br />
                            万籁俱寂心神定,沉醉片刻若仙境。<br />
                            然而春风吹又起,此身应慕长安城。<br />
                        </p>
                    </div>
                    <div class="page5-content-item" style="top: 70vh;left: 65vw;">
                        <h1>无题..</h1>
                        <p>
                            内心若淡如灰烬，生命似淡淡蓝天。<br />
                            虽然外界似静止画卷，心情却如浮云游荡。<br />
                            向上苍祈问来日之路，莫惧，只管低首前行。<br />
                        </p>
                    </div>
                    <div class="page5-content-item" style="top: 70vh;left: 65vw;">
                        <h1>无题..</h1>
                        <p>
                            内心若淡如灰烬，生命似淡淡蓝天。<br />
                            虽然外界似静止画卷，心情却如浮云游荡。<br />
                            向上苍祈问来日之路，莫惧，只管低首前行。<br />
                        </p>
                    </div>
                </div>
            </Transition>
            <button class="page5-content-button ">
                <span>（暂未上线）</span>
                <span></span>
            </button>
        </div>
        <div id="page6" class="main">
            <video autoplay muted loop src="../assets/video/large.mp4"
            :style="[page6AnimationValue>0&&page6AnimationValue<0.6?`opacity:${page6AnimationValue*1.5};`:`opacity:${1-page6AnimationValue}`,page6AnimationValue > 0.05 && page6AnimationValue < 0.72 ? 'position:fixed' : 'position: absolute;top:0vh;',
            page6AnimationValue > 0.72 ? 'position: absolute;top:90vh;' : '']"
            ></video>
            <div class="text" :style="[page6AnimationValue > 0.05 && page6AnimationValue < 0.62 ? 'position:fixed;top:15vh;left:19.3vw;' : 'position: absolute;top:10vh;',
            page6AnimationValue > 0.62 ? 'position: absolute;top:125vh;' : '']">
                <h1
                 >
                    音乐，嘈杂世界的逃生舱
                </h1>
                <h1
                  style="font-size: 2vw;margin-top: 5%;">
                    最近在听
                </h1>

            </div>
            <div :style="[page6AnimationValue > 0.05 && page6AnimationValue < 0.62 ? 'position:fixed;top:25vh;left:2.2vw;' : 'position: absolute;top:20vh;left:3vw;',
            page6AnimationValue > 0.62 ? 'position: absolute;top:135vh;left:3vw;' : '','width:30vw;']">
                <music/>
            </div>
        </div>
        <div id="page4" class="main">
            <h1>留言板</h1>

            <div id="page4-content" :style="[page6AnimationValue>0.6?`transform:scale(${page6AnimationValue})`:`transform:scale(0.6)`]">
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
import backgroundThree2 from "../components/backgroundThree2.vue"
import BackgroundAnimation from '../js/BackgroundAnimation'
import music from '../components/music.vue'
import { getMessageData, postMessage } from '../api/index'
import { ElMessage } from 'element-plus'
const page1AnimationValue = ref(0)
const page2AnimationValue = ref(110)
const page4AnimationValue = ref(0)
const page5AnimationValue = ref(0)
const page6AnimationValue = ref(0)
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
const page5Animation = () => {
    const scoll = new BackgroundAnimation(500, 800)
    window.addEventListener('scroll', () => {
        page5AnimationValue.value = scoll.getScrollFraction()
    })
}
const page6Animation = () => {
    const scoll = new BackgroundAnimation(800, 1000)

    window.addEventListener('scroll', () => {
        page6AnimationValue.value = scoll.getScrollFraction()
    })
}

const biaoqianData = ref(null)

const getBiaoqiant = async () => {
    biaoqianData.value = await getMessageData()
}
const liuyanText = ref('')
const postBiaoqian = async () => {

    try {
        const res = await postMessage(liuyanText.value)
   
        if (res.data.status == 1) {
            ElMessage({
                message: '添加成功',
                type: 'success',
            })
            getBiaoqiant()
        }
    } catch (error) {
        if (error.response.status == 429) {
            ElMessage.error('一次只能添加一个标签，请在2小时后再添加')
        } else {
            ElMessage.error('服务器无响应，请稍后再试')
        }

    }

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
    page5Animation()
    page6Animation()
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
        overflow: hidden;
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
        padding: 0;

        h1 {
            margin-top: 5vh;
            font-size: 3vw;
        }

        .page3-top {
            position: absolute;

            height: 70vh;
            top: 0;
            // bottom: 50%;
            transform: translate(-15%, 50%);
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
        width: 100vw;
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

    #page5 {
        height: 300vh;
        position: relative;
        width: 100vw;
        margin: 0;
        .background2 {
            position: absolute;
            top: 0;
            left: 0;
        }

        .text {
            position: fixed;
            top: 30%;
            left: 20%;
            transform: translate(-50%, -50%);

            h1 {
                color: #fff;
                font-size: 3vw;
            }
        }

        .page5-content-button {
            position: absolute;
            bottom: 20vh;
            left: 50vw;
            border-radius: 12px;
            position: absolute;
            border: #393939 1px;
            cursor: pointer;
            width: 10vw;
            height: 3vh;
            transform: translatex(-50%);
            transition: all 1s;
        }
        .page5-content-button:hover{
            background-color: rgb(74, 74, 74);
            color: #fff;
        }


        .page5-content {
            position: fixed;

            .page5-content-item {
                position: fixed;
                background-color: rgba(74, 74, 74, 0.3);
                padding: 1%;
                z-index: 10;
            }
        }

        .page5-enter-active,
        .page5-leave-active {
            transition: all 0.5s ease;
        }

        .page5-enter-from,
        .page5-leave-to {
            opacity: 0;
        }
    }

    #page6 {
        width: 100vw;
        height: 200vh;
        // overflow: hidden;
        padding: 0;
        position: relative;
        background-color: black;

        video {
            width: 150vw;
            height: 130vh;
            position: absolute;
            top: 0;
            left: -20vw;
            opacity: 0;
            // margin-top: -60vh;
        }
        .text {
            position: fixed;
            top: 10vh;
            left: 20vw;
            z-index: 10;
            transform: translate(-50%, -50%);

            h1 {
                font-size: 3vw;
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
}</style>