// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
 
// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ContactsCtrl from '../controllers/contacts.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';
const App = 'Whatsapp';
 
// App
// tuc la thang angular no chay dua vao module a
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);
 

// vay viec tao Loader o day de lam gi??
// ok, learn basic tu tutorial truoc -> chyen sang product cung khong 

new Loader(App)
  .load(ChatsCtrl)
  .load(ContactsCtrl)
  .load(CalendarFilter)
  .load(RoutesConfig);
 

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}
