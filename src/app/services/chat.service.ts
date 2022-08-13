import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  public createRoomUrl = `${environment.APIBaseURL}chats/create_room`;
  public chatRoomsUrl = `${environment.APIBaseURL}chats/my_rooms`;
  public chatUserRoomsUrl = `${environment.APIBaseURL}chats/user/rooms`;
  public chatSpecificRoomsUrl = `${environment.APIBaseURL}chats/specific_room/`;
  public chatSendMessageUrl = `${environment.APIBaseURL}chats/send_message`;
  public chatMakeReadUrl = `${environment.APIBaseURL}chats/mark_as_read/{id}`;
  public chatDelMessageUrl = `${environment.APIBaseURL}chats/delete_msg/{id}`;

  constructor(private http: HttpClient) { }

  postNewRoom() {
    return this.http.post(this.createRoomUrl, "")
  }
  getChatRooms() {
    return this.http.get<any>(this.chatRoomsUrl);
  }
  getChatUserRooms() {
    return this.http.get<any>(this.chatUserRoomsUrl)
  }
  getChatSpecificRoom() {
    return this.http.get<any>(this.chatSpecificRoomsUrl)
  }
  postSendMessage() {
    return this.http.post<any>(this.chatSendMessageUrl, "")
  }
  putChatMakeRead() {
    return this.http.put<any>(this.chatMakeReadUrl, "")
  }
  getChatMakeRead() {
    return this.http.get<any>(this.chatDelMessageUrl)
  }
}
