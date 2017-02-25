import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';
 
 // don gian cai nay chi la create db??
 // config template o da 
export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);
    debugger;
    alert("here is debug");

    // create helper to get data from the server
    // if you really spend time in project i believe you can do
    this.helpers({
      data() {
        return Chats.find();
      }
    });
  }

  remove(chat) {
    Chats.remove(chat._id);
  }
}
 
ChatsCtrl.$name = 'ChatsCtrl';