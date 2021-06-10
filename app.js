window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
      document.body.style.setProperty(
        "--scroll-per",
        `${(window.pageYOffset / document.body.offsetHeight) * 100}vh`
      );
    },
    false
  );


  $(document).ready(function(){
    $('#project1').mouseover(function(){
        $('#projecttitle1').css({'visibility': 'hidden'});
        $('#projectintro1').css({'visibility': 'hidden'});
        $('#projectsub1').css({'visibility': 'visible'});
    }).mouseout(function(){
        $('#projecttitle1').css({'visibility': 'visible'});
        $('#projectintro1').css({'visibility': 'visible'});
        $('#projectsub1').css({'visibility': 'hidden'});
    })
    });
    $(document).ready(function(){
        $('#project2').mouseover(function(){
            $('#projecttitle2').css({'visibility': 'hidden'});
            $('#projectintro2').css({'visibility': 'hidden'});
            $('#projectsub2').css({'visibility': 'visible'});
        }).mouseout(function(){
            $('#projecttitle2').css({'visibility': 'visible'});
            $('#projectintro2').css({'visibility': 'visible'});
            $('#projectsub2').css({'visibility': 'hidden'});
        })
        });
        $(document).ready(function(){
            $('#project3').mouseover(function(){
                $('#projecttitle3').css({'visibility': 'hidden'});
                $('#projectintro3').css({'visibility': 'hidden'});
                $('#projectsub3').css({'visibility': 'visible'});
            }).mouseout(function(){
                $('#projecttitle3').css({'visibility': 'visible'});
                $('#projectintro3').css({'visibility': 'visible'});
                $('#projectsub3').css({'visibility': 'hidden'});
            })
            });
            $(document).ready(function(){
                $('#project4').mouseover(function(){
                    $('#projecttitle4').css({'visibility': 'hidden'});
                    $('#projectintro4').css({'visibility': 'hidden'});
                    $('#projectsub4').css({'visibility': 'visible'});
                }).mouseout(function(){
                    $('#projecttitle4').css({'visibility': 'visible'});
                    $('#projectintro4').css({'visibility': 'visible'});
                    $('#projectsub4').css({'visibility': 'hidden'});
                })
                });


                $(document).ready(function(){
                    $('.js-menu').click(function(){
                        $('.js-menu').toggleClass('active');
                        $('.js-nav').toggleClass('open');
                        $('.js-nav_list').toggleClass('show');
                    });
                })
         


