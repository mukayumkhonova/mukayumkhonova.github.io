/*------------------------------
    AUDIO
--------------------------------*/

var wavesurfer = WaveSurfer.create({
    container: '#module-audio',
    waveColor: '#72e7ae',
    progressColor: '#1ca562',
    cursorWidth: 0
});

wavesurfer.on('audioprocess', function () {
    $('.waveform__counter').text( formatTime(wavesurfer.getCurrentTime()) );
});

wavesurfer.on('ready', function () {
    $('.waveform__duration').text( formatTime(wavesurfer.getDuration()) );
});

wavesurfer.load("assets/audio/Mohsen Yeganeh - Behet Ghol Midam ( I promise you ).mp3")

var formatTime = function (time) {
    return [
        Math.floor((time % 3600) / 60), // minutes
        ('00' + Math.floor(time % 60)).slice(-2) // seconds
    ].join(':');
};