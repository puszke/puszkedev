$(document).ready(function(){
    $(".SkillSlide").slideUp();
    $(".Skill").click(function(){
        $(this).children(".SkillSlide").slideToggle("slow");
      }); 
    $(".SkillSlide").scroll(function() {
        $(".SkillSlide").slideDown("slow");
    }); 
}); 