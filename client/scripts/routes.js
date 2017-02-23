import { Config } from 'angular-ecmascript/module-helpers';
 
import chatsTemplateUrl from '../templates/chats.html';
import contactsTemplateUrl from '../templates/contacts.html';
import tabsTemplateUrl from '../templates/tabs.html';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: tabsTemplateUrl
      })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: chatsTemplateUrl,
            controller: 'ChatsCtrl as chats'
          }
        }
      })
      .state('tab.contacts', {
        url: '/contacts',
        views: {
          'tab-contacts': {
            templateUrl: contactsTemplateUrl,
            controller: 'contactsCtrl as contacts'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('tab/chats');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
