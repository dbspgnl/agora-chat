let client = AgoraRTC.createClient({mode:'rtc', codec:"vp8"})

let config = {
    appid:null,
    token:null,
    uid:null,
    channel:null,
}

let localTracks = {
    audioTrack:null,
    videoTrack:null
}

let localTrackState = {
    audioTrackMuted:false,
    videoTrackMuted:false
}

let remoteTracks = {}

// getElementsById('join-btn') -> addEventListener('client')

