


$(function(){

    //swipe
    


    // 메인화면 CD 재생 관련
    let musicFile = new Audio($(this).find('audio').attr('src'));
    $('.cdList .cd')
    .on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            musicFile.currentTime = 0; //오디오의 현재 재생위치를 지정
            // musicFile.currentTime = 10; // 오디오의 재생시점을 10초로 설정
            // musicFile.duration = 10;
            musicFile.loop = true;
            musicFile.play(); //오디오를 플레이
            $(this).css({
                '-webkit-animation': 'spin 1s linear infinite normal running',
                '-moz-animation': 'spin 1s linear infinite normal running',
                'animation': 'spin 1s linear infinite normal running'
            }) //animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state> [,...]; */
            $('.bottomLayer .stopBtn').css('display','block')
            $('.bottomLayer .playBtn').css('display','none');
            //$('.playBar .musician').html($(this).siblings('dl')); 재생바에 음악의 내용 넣기 - 보류
            } else{
                musicFile.pause(); //오디오 일시정지
                musicFile.load(); // 오디오를 다시 로드함
                
                $(this).css({
                    //좀 더 부드럽게 멈출 수 있는 방법은????
                    '-webkit-animation': 'spin 1s linear 1 normal paused',
                    '-moz-animation': 'spin 1s linear 1 normal paused',
                    'animation': 'spin 1s linear 1 normal paused'
                })
                $('.bottomLayer .stopBtn').css('display','none')
                $('.bottomLayer .playBtn').css('display','block');
            }
    })
})



// cd목록 스크롤 시 페이드인 효과. css에 transition 주는거 필수!
function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {// 스크롤 함수 정의
    const elems = document.querySelectorAll('.cdList-ul li');//효과를 적용할 곳를 모두 선택
    elems.forEach(elem => {// 반복문을 이용해 효과를 모두 적용
      if (isElementUnderBottom(elem, -20)) {// 화면보다 아래에 있는지 검사하는 함수
        elem.style.opacity = "0"; // 요소가 화면보다 아래에 있으면 이것을 실행
        elem.style.transform = 'translateY(70px)';
      } else {
        elem.style.opacity = "1";// 화면으로 올라오면 불투명하게
        elem.style.transform = 'translateY(0px)';
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll);// 스크롤 함수 실행


    




// 모바일 환경의 사이드바 표출/ 닫기
//오른쪽
$(function(){
    let sideR = $('.sideR');
    let sideR_btn = $('.mo-profile a');
    let sideR_prev = $('.sideR .R_prevBtn');

    sideR_btn.on('click', function(){
        sideR.stop(true).animate({
            'right' : '-20%'
        }, 600, 'easeOutBack')

        //스크롤 두개 생기는걸 방지하기 위해 사용
        $('#wrap').css('position', 'fixed') // 
        return false; //a 태그를 무효화
    })
    sideR_prev.on('click', function(){
        sideR.stop(true).animate({
            'right' : '-120%'
        }, 600, 'easeInBack')

        //스크롤 원래대로 돌리기
        $('#wrap').css('position', 'relative')
        return false; 
    })

    //왼쪽 사이드
    let sideL = $('.sideL');
    let sideL_btn = $('.h_menu a');
    let sideL_prev = $('.sideL .L_prevBtn');

    sideL_btn.on('click', function(){
        sideL.stop(true).animate({
            'left' : '-20%'
        }, 600, 'easeOutBack')

        //스크롤 두개 생기는걸 방지하기 위해 사용
        $('#wrap').css('position', 'fixed') 
        return false; //a 태그를 무효화
    })
    sideL_prev.on('click', function(){
        sideL.stop(true).animate({
            'left' : '-120%'
        }, 600, 'easeInBack')

        //스크롤 원래대로 돌리기
        $('#wrap').css('position', 'relative')
        return false; 
    })

    //로그인 관련
    $('#loginBtn').click(function(){
        $('#loginContainer').css('display','none');
        $('#logged-in').css('display','block');
        return false;
    })
    $('#logoutBtn').click(function(){
        $('#loginContainer').css('display','block');
        $('#logged-in').css('display','none');
        return false;
    })
    //사이드 속의 팔로우 메뉴 바 열기
    $('.following h2').click(function(){
        
        let d = $(this).siblings('ul').css('display');
        if(d == 'block'){
            $('.following ul').slideUp();
            $(this).removeClass('on');
            $('.followInfo').css({
                'position':'static'
            })
            $('.profile').css('display','block');
        } else{
            $('.followInfo').css({
                'position':'absolute',
                'top':'50px',
                'right':'20%'
            })
            $('.profile').css('display','none');
            $('.following ul').slideUp();
            $(this).siblings('ul').slideDown();
            $('.following h2').removeClass('on');
            $(this).addClass('on');
        }
        return false;
    })




    // 재생 바 보여주기 , 숨기기
    $('.musicBtn')
        .click(function(){
            $(this).siblings('.playBar').toggle("slide", { direction: "right" }, 500);
        })
})