export const tracks = {
  onePiece: new Audio("/audio/onepieceLofi.mp3"),
  rain: new Audio("/audio/rain.mp3"),
  unravel: new Audio("/audio/unravelLofi.mp3"),
  jjk: new Audio("/audio/jjklofi.mp3"),
};

tracks.onePiece.preload = "auto";
tracks.onePiece.loop = true;
tracks.onePiece.volume = 0.03;

tracks.rain.preload = "auto";
tracks.rain.loop = true;
tracks.rain.volume = 0.02;

tracks.unravel.preload = "none";
tracks.unravel.loop = true;
tracks.unravel.volume = 0.03;

tracks.jjk.preload = "none";
tracks.jjk.loop = true;
tracks.jjk.volume = 0.03;
