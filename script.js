$(document).ready(function(){
    $(".SkillSlide").slideUp();
    $(".Skill").click(function(){
        $(this).children(".SkillSlide").slideToggle("fast");
      }); 
    $(".SkillSlide").scroll(function() {
        $(".SkillSlide").slideDown("fast");
    }); 
}); 