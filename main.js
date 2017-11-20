const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow

let mainWindow

const defaultBus = 27;

var request2 = require('then-request');

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var web     = express();
web.get('/:line', function(req, res){
  request('https://schedules.sofiatraffic.bg/autobus/' + encodeURI(req.params.line), function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var data = `<style>
                  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic');
                  body {
                    font-family: Roboto, Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                  }
                  .wrapper {
                    width: calc(25% - 1px);
                    margin: 0;
                    text-align: center;
                    float: left;
                    border-right: 1px dashed #999;
                    padding: 0 5px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                  }
                  .wrapper:last-child {
                    border: 0;
                  }
                  td {
                    display:inline;
                    float:left;
                  }
                  .schedule_times {
                    display:flex;
                    flex-flow: row wrap;
                    align-content: flex-start;
                  }
                  a {
                    flex: 0 1 20%;
                    display: block;
                    color: #000;
                    text-decoration: none;
                    font-size: 13px;
                  }
                  h1 {
                    line-height: 1;
                    margin: 10px 0 0;
                    padding: 0;
                    font-size: 15px;
                  }
                  h6 {
                    line-height:1;
                    margin:5px 0;
                    padding:0;
                    font-size: 13px;
                    font-weight: 700;
                    border-bottom: 1px solid #000;
                    letter-spacing: -0.04rem;
                  }
                  </style>`;

          data += `<div class="wrapper"><h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').first().find('h3').text()}</h1>`;
          $('.schedule_view_direction_container').each(function( index ) {
            if(index == 2) {
              data += `<h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').last().find('h3').text()}</h1>`;
            }
            data += $(this).filter(function(){
              $(this).find('colgroup').remove();
              $(this).find('thead').remove();
              $(this).find('.hours_incomplete_notice').remove();
              $(this).find('.schedule_direction_view_course').remove();
              $(this).find('td').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').remove();
              $(this).find('.line_print').remove();
              return $(this);
            }).html();
          });
          data += '</div>';

          data += `<div class="wrapper"><h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').first().find('h3').text()}</h1>`;
          $('.schedule_view_direction_container').each(function( index ) {
            if(index == 2) {
              data += `<h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').last().find('h3').text()}</h1>`;
            }
            data += $(this).filter(function(){
              $(this).find('colgroup').remove();
              $(this).find('thead').remove();
              $(this).find('.hours_incomplete_notice').remove();
              $(this).find('.schedule_direction_view_course').remove();
              $(this).find('td').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').remove();
              $(this).find('.line_print').remove();
              return $(this);
            }).html();
          });
          data += '</div>';

          data += `<div class="wrapper"><h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').first().find('h3').text()}</h1>`;
          $('.schedule_view_direction_container').each(function( index ) {
            if(index == 2) {
              data += `<h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').last().find('h3').text()}</h1>`;
            }
            data += $(this).filter(function(){
              $(this).find('colgroup').remove();
              $(this).find('thead').remove();
              $(this).find('.hours_incomplete_notice').remove();
              $(this).find('.schedule_direction_view_course').remove();
              $(this).find('td').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').remove();
              $(this).find('.line_print').remove();
              return $(this);
            }).html();
          });
          data += '</div>';

          data += `<div class="wrapper"><h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').first().find('h3').text()}</h1>`;
          $('.schedule_view_direction_container').each(function( index ) {
            if(index == 2) {
              data += `<h1>Автобус №${req.params.line} - ${$('.schedule_active_list_content').last().find('h3').text()}</h1>`;
            }
            data += $(this).filter(function(){
              $(this).find('colgroup').remove();
              $(this).find('thead').remove();
              $(this).find('.hours_incomplete_notice').remove();
              $(this).find('.schedule_direction_view_course').remove();
              $(this).find('td').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').children().each(function(index, element){
                  $(element).insertBefore($(element).parent());
              })
              $(this).find('.hours_cell').remove();
              $(this).find('.line_print').remove();
              return $(this);
            }).html();
          });
          data += '</div>';
    }
    res.send(data)
  })
})
web.listen('8081')
exports = module.exports = web;

function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL('http://localhost:8081/27')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () { mainWindow = null })
}
function changeWindow(bus) {
  mainWindow.loadURL('http://localhost:8081/'+bus)
}
app.on('ready', createWindow)
app.on('window-all-closed', function () { if (process.platform !== 'darwin') { app.quit() } })
app.on('activate', function () { if (mainWindow === null) { changeWindow() } })

const template = [
  {
    label: 'Меню',
    submenu: [
      {
        label: 'Избери линия',
        submenu: [
          // { label: 'Налични линии' }
        ]
      },
      {type: 'separator'},
      { label: 'Принтиране', click() { mainWindow.webContents.print({printBackground:true}) } },
      {type: 'separator'},
      {role: 'close'}
    ],
  },
]

/*
request2('GET', 'https://schedules.sofiatraffic.bg/autobus/').done(function (res) {
  var _$ = cheerio.load(res.getBody('utf8'));
  _$("#lines_quick_access").find('.lines_section').last().find('ul').find('li').each(function( index ){
    var bus = _$(this).text();

  });
});
*/

template[0].submenu[0].submenu.push(
  { label: '1', type: 'radio', checked: false, click() { changeWindow('1') } },
  { label: '3', type: 'radio', checked: false, click() { changeWindow('3') } },
  { label: '4', type: 'radio', checked: false, click() { changeWindow('4') } },
  { label: '5', type: 'radio', checked: false, click() { changeWindow('5') } },
  { label: '6', type: 'radio', checked: false, click() { changeWindow('6') } },
  { label: '7', type: 'radio', checked: false, click() { changeWindow('7') } },
  { label: '8', type: 'radio', checked: false, click() { changeWindow('8') } },
  { label: '10', type: 'radio', checked: false, click() { changeWindow('10') } },
  { label: '12', type: 'radio', checked: false, click() { changeWindow('12') } },
  { label: '14', type: 'radio', checked: false, click() { changeWindow('14') } },
  { label: '18', type: 'radio', checked: false, click() { changeWindow('18') } },
  { label: '20', type: 'radio', checked: false, click() { changeWindow('20') } },
  { label: '21-22', type: 'radio', checked: false, click() { changeWindow('21-22') } },
  { label: '23', type: 'radio', checked: false, click() { changeWindow('23') } },
  { label: '24', type: 'radio', checked: false, click() { changeWindow('24') } },
  { label: '26', type: 'radio', checked: false, click() { changeWindow('26') } },
  { label: '27', type: 'radio', checked: true, click() { changeWindow('27') } },
  { label: '28', type: 'radio', checked: false, click() { changeWindow('28') } },
  { label: '29', type: 'radio', checked: false, click() { changeWindow('29') } },
  { label: '30', type: 'radio', checked: false, click() { changeWindow('30') } },
  { label: '31', type: 'radio', checked: false, click() { changeWindow('31') } },
  { label: '42', type: 'radio', checked: false, click() { changeWindow('42') } },
  { label: '44', type: 'radio', checked: false, click() { changeWindow('44') } },
  { label: '44-Б', type: 'radio', checked: false, click() { changeWindow('44-Б') } },
  { label: '47', type: 'radio', checked: false, click() { changeWindow('47') } },
  { label: '48', type: 'radio', checked: false, click() { changeWindow('48') } },
  { label: '49', type: 'radio', checked: false, click() { changeWindow('49') } },
  { label: '54', type: 'radio', checked: false, click() { changeWindow('54') } },
  { label: '56', type: 'radio', checked: false, click() { changeWindow('56') } },
  { label: '56-А', type: 'radio', checked: false, click() { changeWindow('56-А') } },
  { label: '58', type: 'radio', checked: false, click() { changeWindow('58') } },
  { label: '59', type: 'radio', checked: false, click() { changeWindow('59') } },
  { label: '63', type: 'radio', checked: false, click() { changeWindow('63') } },
  { label: '64', type: 'radio', checked: false, click() { changeWindow('64') } },
  { label: '66', type: 'radio', checked: false, click() { changeWindow('66') } },
  { label: '67', type: 'radio', checked: false, click() { changeWindow('67') } },
  { label: '69', type: 'radio', checked: false, click() { changeWindow('69') } },
  { label: '70', type: 'radio', checked: false, click() { changeWindow('70') } },
  { label: '81', type: 'radio', checked: false, click() { changeWindow('81') } },
  { label: '90', type: 'radio', checked: false, click() { changeWindow('90') } },
  { label: '93', type: 'radio', checked: false, click() { changeWindow('93') } },
  { label: '98', type: 'radio', checked: false, click() { changeWindow('98') } },
  { label: '100', type: 'radio', checked: false, click() { changeWindow('100') } },
  { label: '103', type: 'radio', checked: false, click() { changeWindow('103') } },
  { label: '107', type: 'radio', checked: false, click() { changeWindow('107') } },
  { label: '112', type: 'radio', checked: false, click() { changeWindow('112') } },
  { label: '117', type: 'radio', checked: false, click() { changeWindow('117') } },
  { label: '118', type: 'radio', checked: false, click() { changeWindow('118') } },
  { label: '119', type: 'radio', checked: false, click() { changeWindow('119') } },
  { label: '122', type: 'radio', checked: false, click() { changeWindow('122') } },
  { label: '123', type: 'radio', checked: false, click() { changeWindow('123') } },
  { label: '150', type: 'radio', checked: false, click() { changeWindow('150') } },
)


const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
