var back = 0;

$(document).ready(function(){
    $(".SkillSlide").slideUp();
    $(".Skill").click(function(){
        $(this).children(".SkillSlide").slideToggle("fast");
      }); 
    $(".SkillSlide").scroll(function() {
        $(".SkillSlide").slideDown("fast");
    });
    const interval = setInterval(function() {
        ChangeScreen();
    }, 10000);
}); 
function resolveAfterXSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, x*1000);
    });
  }
async function ChangeScreen()
{
    let backs = ["game1.png","game3.png","game2.png"];
    $(".AboutBackground").addClass("FadeAway");
    await resolveAfterXSeconds(1);
    $(".AboutBackground").addClass("Show");
    $(".AboutBackground").removeClass("FadeAway");
    $(".AboutBackground").css("background-image","url('"+backs[back]+"')");
    await resolveAfterXSeconds(1);
    $(".AboutBackground").removeClass("Show");
    back++;

    if(back>backs.length-1)
        back=0;
}
