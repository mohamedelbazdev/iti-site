import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  chatRooms?= [
    // { "image": "https://therichpost.com/wp-content/uploads/2020/06/avatar2.png", "name": "Moahemd Elabz", },
    // { "image": "https://therichpost.com/wp-content/uploads/2020/06/avatar2.png", "name": "Ahmed Ali", },
    // { "image": "https://therichpost.com/wp-content/uploads/2020/06/avatar2.png", "name": "Nage Mohamed", },
    // { "image": "https://therichpost.com/wp-content/uploads/2020/06/avatar2.png", "name": "Reda Mostafa", },
  ]
  receiveMessages = [
    { "content": "Hi How Are You ?", "time": "06:50 pm", "date": "today" },
    { "content": "lorem ipsem", "time": "06:53 pm", "date": "today" },
    { "content": "lorem ipsem ", "time": "06:57 pm", "date": "today" },
  ]
  sendMessages = [
    { "content": "fine and you", "time": "06:50 pm", "date": "today" },
    { "content": "lorem ipsem", "time": "06:54 pm", "date": "today" },
    { "content": "lorem ipsem", "time": "06:58 pm", "date": "today" },
  ]

  // chatRooms = [];
  // chatUserRooms = [];
  // SpecificRooms = [];
  // chatMakeRead: any;
  constructor(private route: ActivatedRoute, private chat: ChatService) { }


  ngOnInit(): void {

    this.chat.getChatRooms().subscribe(res => {
      this.chatRooms = res.data
      console.log(this.chatRooms)
    })

    // this.rate.getOneRate(this.route.snapshot.params['id']).subscribe(res => {
    //   this.reviews = res.data.rate
    //   console.log(this.rateObject);
    // })
    // this.chat.getChatSpecificRoom().subscribe(res => {
    //   this.chatUserRooms = res.data
    //   console.log(res.data)
    // })
    // this.chat.getChatSpecificRoom().subscribe(res => {
    //   this.SpecificRooms = res.data
    //   console.log(res.data)
    // })
    // this.chat.getChatMakeRead().subscribe(res => {
    //   this.chatMakeRead = res.data
    //   console.log(res.data)
    // })
  }

}
