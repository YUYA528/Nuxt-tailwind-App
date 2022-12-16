<template>
    <div class="h-full relative bg-black">
        <p>テキストテキストテキストテキスト</p>
        <div id="titles" class="">
            <div id="titlecontent">
                <p>テキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキスト</p>
                ...
                ...
            </div>
        </div>
    </div>
</template>

<style scoped>
#titles {
    background-color: black;
    position: absolute;
    /* width: 100%;
    height: 100%; */
    top: -1000px;
    bottom: 0;
    left: 0;
    right: 0;
    /* margin-left: -9em; */
    font-size: 350%;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    transform-origin: 50% 100%;
    /* transform: perspective(100%) rotateX(25deg); */
    transform: perspective(300px) rotateX(25deg);
}

#titles:after {
    position: absolute;
    content: ' ';
    left: 0;
    right: 0;
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
    pointer-events: none;
}

#titlecontent {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation: scroll 100s linear 4s infinite;
}

@keyframes scroll {
    0% {
        top: 100%;
    }

    100% {
        top: -170%;
    }
}
</style>