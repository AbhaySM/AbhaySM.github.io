 $('.horse-anime__btn-wrap .btn').on('click', function(e){
    e.preventDefault();

    var loopCount = $(this).data('tap');
    console.log(loopCount,timelineH);

    var horseImg = SVG('#horse-anime-main-image');
    var timelineH = new SVG.Timeline();
    var footA = SVG('image#Foot_A');
    var footB = SVG('image#Foot_B');
    var footC = SVG('image#Foot_C');

    footA.timeline(timelineH);
    footB.timeline(timelineH);
    footC.timeline(timelineH);

    console.log(timelineH);

    footA.animate(100,0,'absolute').opacity(0).loop(parseInt(loopCount),false,800);
    footB.animate(100,0,'absolute').opacity(1).loop(parseInt(loopCount),false,800);
    footB.animate(100,400,'absolute').opacity(0).loop(parseInt(loopCount),false,800);
    footC.animate(100,400,'absolute').opacity(1).loop(parseInt(loopCount),false,800);
    footC.animate(100,600,'absolute').opacity(0).loop(parseInt(loopCount),false,800);
    footA.animate(100,600,'absolute').opacity(1).loop(parseInt(loopCount),false,800);

    for(i=1;i<=loopCount;i++){
      setTimeout( function timer(){
        console.log('tap');       

        var snareAudio = $('#Snare-Audio');
        var snareAudioEl = snareAudio.get(0);
        snareAudioEl.currentTime = 0;
        snareAudioEl.play();
      }, i*800 );
    }

    // timelineH.timeline().finish();

    // footA.animate({
    //   opacity: 0,
    // },50);

    // footB.animate({
    //   display: 'block';
    //   opacity: 1,
    // },100);

    // footB.animate({
    //   display: 'block';
    //   opacity: 1,
    // },300);

  });