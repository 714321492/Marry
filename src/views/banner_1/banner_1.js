/**
 * Created by 86186 on 2022/10/18.
 */
const animateTime = (time, animate) => {
  setTimeout(() => {
    animate();
  }, time)
}
const timeList = [500, 1500, 2000, 5000, 4000]
// const timeList = [0, 0, 0, 0, 0]

const bannerPositionAnimate = () => {
  $(".banner_1_2_1,.banner_1_3_1").css({transform: `translateX(-50%) translateY(0)`})
  $(".banner_1_2_2").css({transform: `translateX(75%) translateY(0)`})
  $(".banner_1_3_2").css({transform: `translateX(87.5%) translateY(0)`})
  $(".banner_1_1_1").css({right: '1.5vw'})
  $(".banner_1_1_2").css({left: '6.5vw'})
}
const bannerShowAnimate = () => {
  $(".banner_1_2_1,.banner_1_3_1").css({opacity: 1})
  $(".banner_1_2_2,.banner_1_3_2").css({opacity: 1})
}
const lineShowAnimate = () => {
  $(".banner_1_1_1").css({opacity: 1})
  $(".banner_1_1_2").css({opacity: 1})
}
const bannerRotateAnimate = () => {
  $(".banner_1_2_1").addClass('banner_1_2_1_rotate')
  $(".banner_1_3_1").addClass('banner_1_3_1_rotate')
  $(".banner_1_2_2").addClass('banner_1_2_2_rotate')
  $(".banner_1_3_2").addClass('banner_1_3_2_rotate')
}

const bannerCenterShowAnimate = () => {
  $(".center_open_top,.center_open_bottom").animate({
    opacity: 1,
  }, timeList[1], 'linear', () => {})
}
const bannerCenterAnimate = () => {
  $(".center_img_top,.center_img_bottom").animate({
    height: '100%',
    opacity: 1,
  }, timeList[3], 'linear', () => {})
  $(".center_img_top,.center_img_bottom").animate({
    opacity: 1,
  }, timeList[1], 'linear', () => {})
  $(".center_open_top").css({transition: 'all 5s linear 0ms', bottom: 'calc(100% - 1.5vw)'})
  $(".center_open_bottom").css({transition: 'all 5s linear 0ms', top: 'calc(100% - 1.5vw)'})
}

const bannerCenterFlowerAnimate = () => {
  $(".paintBrush").addClass('paintBrushLeftTopAnimate');
  $(".center_top_flower").animate({
    width: '50%'
  }, timeList[3], 'linear', () => {
    $(".paintBrush").removeClass('paintBrushLeftTopAnimate');

    setTimeout(() => {
      $(".paintBrush").addClass('paintBrushRightTopAnimate');
      $(".center_top_flower2").animate({
        height: '30vh'
      }, timeList[3], 'linear', () => {
        $(".paintBrush").removeClass('paintBrushRightTopAnimate');

        setTimeout(() => {
          $(".paintBrush").addClass('paintBrushRightBottomAnimate')
          $(".center_bottom_flower").animate({
            right: '0.35vw',
            width: '20vh'
          }, timeList[3], 'linear', () => {
            $(".paintBrush").removeClass('paintBrushRightBottomAnimate');

            setTimeout(() => {
              $(".paintBrush").addClass('paintBrushLeftBottomAnimate')
              $(".center_bottom_flower2").animate({
                height: '30vh',
                bottom: '1.5vw'
              }, timeList[3], 'linear', () => {
                $(".paintBrush").removeClass('paintBrushLeftBottomAnimate');
                centerLogoAnimate();
              })
            }, timeList[0])

          })
        }, timeList[0])
      })

    }, timeList[0])
  })
}

const centerLogoAnimate = () => {
  setTimeout(() => {
    $(".center_logo_circular_right,.center_logo_circular_left").show();
    $(".paintBrush").addClass('paintBrush_rotateAnimate')
    $(".center_logo").css({border : '1px #aa1e2e solid'})
    $(".center_logo_circular_right").animate({
      height: 0,
    }, timeList[4], 'swing', () => {
      $(".center_logo_circular_left").animate({
        height: 0,
      }, timeList[4], 'swing', () => {
        setTimeout(() => {
          $(".paintBrush").removeClass('paintBrush_rotateAnimate')
          $(".paintBrush").addClass('paintBrushCenterLogoShow')
          $(".center_logo_show").animate({
            height: '21.1vh',
          }, timeList[3], 'linear', () => {

            $(".paintBrush").removeClass('paintBrushCenterLogoShow')
            $('.center_text').show();
            setTimeout(() => {
              $('.maobi').show();
              $('.maobi').addClass(`maobi1`)
              $('.center_text_hide_4').css('height', 0)
                setTimeout(() => {
                  $('.maobi').removeClass(`maobi1`);
                  $('.maobi').addClass(`maobi2`);
                  $('.center_text_hide_3').css('height', 0)
                }, 5000)
                setTimeout(() => {
                  $('.maobi').removeClass(`maobi2`);
                  $('.maobi').addClass(`maobi3`);
                  $('.center_text_hide_2').css('height', 0)
                }, 10000)
                setTimeout(() => {
                  $('.maobi').removeClass(`maobi3`);
                  $('.maobi').addClass(`maobi4`);
                  $('.center_text_hide_1').css('height', 0)
                }, 15000)
                setTimeout(() => {
                  $('.maobi').removeClass(`maobi4`);
                  $('.maobi').hide();
                }, 20000)
            }, 1000)

          })
        }, timeList[0])
      })
    })
  }, timeList[0])
}
let sjian = false;
export function init() {
  animateTime(0, bannerPositionAnimate);
  animateTime(sjian || 500, lineShowAnimate);
  animateTime(sjian || 1500, bannerShowAnimate);
  animateTime(sjian || 3000, bannerRotateAnimate);
  animateTime(sjian || 3500, bannerCenterShowAnimate);
  animateTime(sjian || 6500, bannerCenterAnimate);
  animateTime(sjian || 12000, bannerCenterFlowerAnimate);
}