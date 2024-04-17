export interface IPostDataToSend {
    userId: number;
    title: string;
    body: string;
}

export interface IPost extends IPostDataToSend {
    id: number;
}