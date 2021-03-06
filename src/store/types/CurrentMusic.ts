import { Artists } from "./user";

export interface CurrentMusicState {
    id: number;
    br: number;
    url: string;
    name: string;
    artists: string | Artists[];
    likes: boolean;
    pic: string;
    currentTime: string;
    totalTime: string;
    play: boolean;
}

export interface CurrentMusic {
    namespaced: true;
    state: CurrentMusicState;
    mutations: {
        clearState: (state: CurrentMusicState) => void;
        playSong: (state: CurrentMusicState, play: boolean) => void;
        changeState: (state: CurrentMusicState, data: CurrentMusicState) => void;
        changeTotalTime: (state: CurrentMusicState, totalTime: string) => void;
        changeCurrentTime: (state: CurrentMusicState, currentTime: string) => void;
    };
}
