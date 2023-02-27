
// {"inPlay":null,
// "output":"",
// "reproduced":null,
// "status":"",
// "videoQueue":
// [{"id":"6f35f42b-f491-41f9-a717-b5928b402558","name":"video.mp4","duration":"0.0"}]}*

export interface IVideo  {
    id: string;
    name: string;
    duration: string;
}
export interface Videos {
    videoQueue: Array<IVideo>
}