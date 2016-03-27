# flyBridCSS3
animate属性，动态弹窗

## 效果图：
![image](https://github.com/xiaojiandong/flyBridCSS3/blob/master/img/animate-mask.png)

## HTML代码：
```html
<body>
    <h1>animate属性，动态弹窗</h1>
		<div class="mask-wrap js_mask_wrap">
      <div class="img-wrap"></div>
      <h1>游戏结束，很遗憾</h1>
		</div>
    <div class="play-btn js_play_btn">点击有惊喜</div>
	</body>
```

## Less代码局部：
```less
.hide-mask-wrap{
  -webkit-animation: hideMaskAnimate 0.3s 0.1s backwards;
}

@-webkit-keyframes hideMaskAnimate {
  0%{
    -webkit-transform: translateY(0px);
    -webkit-opacity : 1;
  }
  10%{
    -webkit-transform: translateY(50px);
  }
  100%{
    -webkit-transform: translateY(-440px);
    -webkit-opacity : 0;
  }
}
```

