$(function () {
  var text = [];
  var warr = [];
  var loadstr = '<div class="loading">连线中  <span></span><span></span><span></span><span></span><span></span></div>';
  //var str1 = '<div class="line ly-hide" style="display: block;" id="fp"><div class="left"> <img src="images/header.jpg" width="40px"><div id="lx"><i></i> 咱们是要解决皮肤哪些问题？<br><span>点击下方按钮即可↓</span></div></div><div class="ly-clear"></div></div><div id="msg"></div>';

  text[0] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>眼袋主要是随着年龄的增长，胶原蛋白和弹力纤维蛋白自然地减少，导致原本护理眼部的脂肪开始慢慢淤积失去支撑，此刻眼周肌肤兜不住淤积的脂肪，眼袋就会产生。眼袋会让人看上去比实际年龄苍老很多。</div></div><div class="ly-clear"></div></div>';
  text[1] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>眼周细纹是典型的皮肤组织老化。主要是因为肌肤胶原蛋白分泌不足，造成的胶原纤维减少、断裂，导致皮肤弹性减退，眼角皱纹增多显老。平常日晒、干燥、洗脸水温过高等均可导致眼周细纹。</div></div><div class="ly-clear"></div></div>';
  text[2] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>黑眼圈也被定为显老标志。主要是由于熬夜，情绪波动大，眼疲劳、衰老导致眼部皮肤血管血流速度过于缓慢形成滞流，或血管中代谢废物积累过多，造成眼部色素沉着。黑眼圈太重显老又难看。</div></div><div class="ly-clear"></div></div>';
  text[3] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>现代人压力大，稍不留神脸上已经多了一条条眼纹、深深的黑眼圈、还有硕大突出的眼袋，它们不仅毫不留情出卖你的年龄，而且整个人看起来憔悴、苍老、颓废！眼部问题不是老年人才会有，年龄阶段、作息规律不同，形成眼袋的原因也是不同的。</div></div><div class="ly-clear"></div></div>';
  // text[4] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>干痒脱皮一般是因为受损的皮肤屏障，肌肤内部水分蒸发加，且保水力极差，皮肤干燥缺水甚至起皮，表面触感粗糙，滋生干性细纹。为了能更好的帮助你，老师需要先了解一下你的情况，请认真回答老师接下来提问你的问题哦。</div></div><div class="ly-clear"></div></div>';
  // text[5] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>脸上长痘主要是因为皮脂分泌过多、毛囊皮脂腺导管堵塞而产生的，多数分布在脸颊鼻翼等位置，为了能更好的帮助你，老师需要先了解一下你的情况，请认真回答老师接下来提问你的问题哦。</div></div><div class="ly-clear"></div></div>';
  // text[6] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>毛囊皮脂腺导管的角化异常造成导管堵塞形成痤疮，主要表现为白头、黑头粉刺、炎性丘疹、脓疱等问题，为了更好的帮助你，老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦</div></div><div class="ly-clear"></div></div>';

  warr[0] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>您今年多大年龄了？</div></div><div class="ly-clear"></div></div>';
  warr[1] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>出现这个情况多久了？</div></div><div class="ly-clear"></div></div>';
  warr[2] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>好的，平时做过专业护理吗？</div></div><div class="ly-clear"></div></div>';
  warr[3] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>是否经常熬夜</div></div><div class="ly-clear"></div></div>';
  warr[4] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>好的，您的情况已经了解，我们有信心完全解决您目前的眼部问题，针对各种眼部问题我们都有很专业的改善方案，现在联系老师，拍一张照片发给我，根据你眼部的真实情况，给您制定最具有针对性的改善方法，让你在短时间内达到满意的效果，并教你日常如何保养眼部让自己更加年轻美丽！</div></div><div class="ly-clear"></div></div>';
  warr[5] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div> <i></i>这是老师的联系方式 <span class="wxnum" style="color:red; font-weight:bolder;">'+(Arr[n])+'</span>   (长按复制 去微信添加)，每天前30名主动添加老师，还可享受VIP 1对1快速祛眼袋服务，老师会详细指导你正确祛除眼部问题的最好方法，让你美丽不花冤枉钱！</div></div><div class="ly-clear"></div></div>'
  warr[6] = '<div class="line"><div class="left"> <img src="images/header.jpg" width="40px"><div>这是老师的联系方式 <span class="wxnum" style="color:red; font-weight:bolder;">'+(Arr[n])+'</span>  (长按复制 去微信添加)，免费咨询获取改善眼部问题的方法，机会难得，先加先美哟！</div></div><div class="ly-clear"></div></div>'

  setTimeout(function () {
    $('.ly-section1 .line:first')["fadeIn"](100);
  }, 300);
  setTimeout(function () {
    $('.ly-section1 .nav')["fadeIn"](100);
  }, 300);
  setTimeout(function () {
    $('.ly-section1 .bq')["fadeIn"](100);
  }, 300);
  setTimeout(function () {
    $('.ly-section1 .line_zizhi')["fadeIn"](100);
  }, 600);
  setTimeout(function () {
    $("#messbox")["append"](loadstr);
  }, 1000);
  setTimeout(function () {
    $(".loading")["fadeOut"](0);
    $(".line")["css"]('display', 'block');
  }, 3000);
  setTimeout(function () {
    $("#messbox")["append"](str1);
    window["scrollTo"](0, window["document"]["body"]["scrollHeight"]);
  }, 3000);
  setTimeout(function () {
    $("#option_1")["fadeIn"](400);
  }, 3500);
  // 点击答案 
  $(".select_botton a")["click"](function () {
    var p_id = $(this).attr('data-w');
    var p_value = $(this).text();
    var wtindex = $(this).attr('wtindex');
    var index = $(this).attr('index');
    // 重新设置str1的内容
   // $('#lx').html('<span>点击下方按钮即可↓</span>');
    $("#msg").append(pj_html(p_value));
    window.scrollTo(0, document.body.scrollHeight);
    // 第一个答案
    if (p_id <= text.length) {
      addHtml(text[p_id - 1], 1000);
    }
    setTimeout(function () {
      if (wtindex < warr.length - 1) {
        addHtml(warr[wtindex - 1], 1000);
        if (wtindex <= 4) {
          wtindex++;
          setTimeout(function () {
            $("#option_" + wtindex).fadeIn(400);
          }, 1300);
        }
        if (index == 0) {
          setTimeout(function () {
            // addHtml(warr[4], 3000);
            wtindex++;
            setTimeout(function () {
              $("#option_" + wtindex).fadeIn(400)
            }, 1500);
          }, 1000);
        }
      }
      // 最后一个答案选择
      if (wtindex == 6) {
        if (index == 1) {
          addHtml(warr[warr.length - 2], 1000);
        } else if (index == 2) {
          addHtml(warr[warr.length - 1], 1000);
        }
        setTimeout(function () {
          $(".mm").show();
          $("#bq").remove();
          $("#nav").remove();
          $(".talk").css('padding', '10px 0 20px 0')
        }, 1000);
      }
    }, 1000);

    $(".select_botton").fadeOut(400);
  });

  function pj_html(str) {
    var pzixun = '<div class="line"><div class="right"> <img src="images/header2.png" width="40px"><div><i></i> ' + str + '</div></div><div class="ly-clear"></div></div>';
    return pzixun;
  }

  function addHtml(S4, KdIHmU5) {
    KdIHmU5 = KdIHmU5 || 5000;
    setTimeout(function () {
      $("#msg")["append"](S4);
      if ($("#msg").find("#wx").size()) {
        $("#msg").find("#wx").text(mess2);
      }
      window["scrollTo"](0, window["document"]["body"]["scrollHeight"])
    }, KdIHmU5)
  }
})