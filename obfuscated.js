var _0x351da0=_0x6b06;(function(_0x2909da,_0x16a623){var _0x3d8144=_0x6b06,_0x575b77=_0x2909da();while(!![]){try{var _0x5a315e=parseInt(_0x3d8144(0x144))/0x1+-parseInt(_0x3d8144(0x12a))/0x2+-parseInt(_0x3d8144(0x164))/0x3*(parseInt(_0x3d8144(0x127))/0x4)+-parseInt(_0x3d8144(0x139))/0x5+parseInt(_0x3d8144(0x15f))/0x6+-parseInt(_0x3d8144(0x12b))/0x7*(-parseInt(_0x3d8144(0x121))/0x8)+parseInt(_0x3d8144(0x14a))/0x9*(parseInt(_0x3d8144(0x154))/0xa);if(_0x5a315e===_0x16a623)break;else _0x575b77['push'](_0x575b77['shift']());}catch(_0xefdb6e){_0x575b77['push'](_0x575b77['shift']());}}}(_0x4c82,0x5ac4d));let previous=document['querySelector']('#pre'),play=document[_0x351da0(0x142)](_0x351da0(0x13d)),next=document['querySelector'](_0x351da0(0x149)),title=document[_0x351da0(0x142)](_0x351da0(0x156)),recent_volume=document[_0x351da0(0x142)](_0x351da0(0x157)),volume_icon=document[_0x351da0(0x142)](_0x351da0(0x122)),volume_show=document[_0x351da0(0x142)](_0x351da0(0x162)),slider=document[_0x351da0(0x142)](_0x351da0(0x163)),full_duration=document['querySelector']('#full_duration'),passed_duration=document[_0x351da0(0x142)](_0x351da0(0x11b)),track_image=document[_0x351da0(0x142)](_0x351da0(0x12c)),present=document[_0x351da0(0x142)](_0x351da0(0x124)),total=document[_0x351da0(0x142)](_0x351da0(0x15b)),artist=document[_0x351da0(0x142)]('#artist'),main=document[_0x351da0(0x142)](_0x351da0(0x136)),list=document['querySelector']('#list'),repeat=document['querySelector'](_0x351da0(0x133)),shuffle=document[_0x351da0(0x142)](_0x351da0(0x158)),genreSearch=document[_0x351da0(0x142)](_0x351da0(0x155)),timer,link,All_song,max,gen,index_no=0x0,track=document['createElement'](_0x351da0(0x143));fetch(_0x351da0(0x13e))[_0x351da0(0x14f)](function(_0x58ce0a){var _0x3a2b1b=_0x351da0;return _0x58ce0a[_0x3a2b1b(0x159)]();})[_0x351da0(0x14f)](function(_0x8c40aa){var _0x6cb559=_0x351da0;All_song=_0x8c40aa,max=All_song[_0x6cb559(0x147)],track[_0x6cb559(0x132)]=All_song[index_no][_0x6cb559(0x125)],title[_0x6cb559(0x12f)]=All_song[index_no]['name'],track_image[_0x6cb559(0x132)]=All_song[index_no]['img'],artist[_0x6cb559(0x12f)]=All_song[index_no][_0x6cb559(0x14e)],track['load'](),track[_0x6cb559(0x14c)]=recent_volume[_0x6cb559(0x148)]/0x64,timer=setInterval(range_slider,0x3e8),total['innerHTML']=All_song[_0x6cb559(0x147)],present[_0x6cb559(0x12f)]=index_no+0x1,genreSearch[_0x6cb559(0x14d)]('input',function(){var _0x41934f=_0x6cb559;list['innerHTML']='',gen=this['value'],All_song[_0x41934f(0x150)](_0x233622=>{var _0xf66999=_0x41934f;if(_0x233622[_0xf66999(0x13a)]==gen)link=document['createElement']('a'),link['innerHTML']=_0x233622['id']+'.\x20'+_0x233622['name']+'\x20&rarr;'+_0x233622[_0xf66999(0x14e)],link['addEventListener'](_0xf66999(0x13c),function(){var _0x3806e0=_0xf66999;index_no=_0x233622['id']-0x1,track['src']=All_song[_0x233622['id']-0x1]['path'],title[_0x3806e0(0x12f)]=All_song[_0x233622['id']-0x1]['name'],track_image[_0x3806e0(0x132)]=_0x233622[_0x3806e0(0x11f)],artist[_0x3806e0(0x12f)]=_0x233622[_0x3806e0(0x14e)],present['innerHTML']=All_song[_0x233622['id']-0x1]['id'],nochange(),reset_slider(),playsong();}),list['append'](link);else gen==''&&(link=document['createElement']('a'),link[_0xf66999(0x12f)]=_0x233622['id']+'.\x20'+_0x233622['name']+_0xf66999(0x146)+_0x233622[_0xf66999(0x14e)],link['addEventListener']('click',function(){var _0x235c76=_0xf66999;index_no=_0x233622['id']-0x1,track[_0x235c76(0x132)]=All_song[_0x233622['id']-0x1][_0x235c76(0x125)],title[_0x235c76(0x12f)]=All_song[_0x233622['id']-0x1][_0x235c76(0x134)],track_image[_0x235c76(0x132)]=_0x233622['img'],artist[_0x235c76(0x12f)]=_0x233622[_0x235c76(0x14e)],present[_0x235c76(0x12f)]=All_song[_0x233622['id']-0x1]['id'],nochange(),reset_slider(),playsong();}),list[_0xf66999(0x169)](link));});}),All_song[_0x6cb559(0x150)](_0x2ca97e=>{var _0x40783f=_0x6cb559;link=document[_0x40783f(0x13b)]('a'),link[_0x40783f(0x12f)]=_0x2ca97e['id']+'.\x20'+_0x2ca97e[_0x40783f(0x134)]+_0x40783f(0x146)+_0x2ca97e[_0x40783f(0x14e)],link[_0x40783f(0x14d)](_0x40783f(0x13c),function(){var _0x4bc679=_0x40783f;index_no=_0x2ca97e['id']-0x1,track[_0x4bc679(0x132)]=All_song[_0x2ca97e['id']-0x1][_0x4bc679(0x125)],title[_0x4bc679(0x12f)]=All_song[_0x2ca97e['id']-0x1][_0x4bc679(0x134)],track_image[_0x4bc679(0x132)]=_0x2ca97e[_0x4bc679(0x11f)],artist[_0x4bc679(0x12f)]=_0x2ca97e[_0x4bc679(0x14e)],present['innerHTML']=All_song[_0x2ca97e['id']-0x1]['id'],nochange(),reset_slider(),playsong();}),list[_0x40783f(0x169)](link);});});var first_click=!![];pausesong(),play[_0x351da0(0x161)]=function(){first_click?(playsong(),first_click=![]):(pausesong(),first_click=!![]);};var first=!![];volume_icon[_0x351da0(0x161)]=function(){var _0x29f514=_0x351da0;first?(mute_sound(),first=![],volume_icon['classList'][_0x29f514(0x138)]('fa-volume-off'),volume_icon[_0x29f514(0x140)][_0x29f514(0x120)]('fa-volume-up'),volume_icon[_0x29f514(0x166)]=_0x29f514(0x13f)):(reset_sound(),first=!![],volume_icon[_0x29f514(0x140)][_0x29f514(0x120)](_0x29f514(0x141)),volume_icon[_0x29f514(0x140)][_0x29f514(0x138)](_0x29f514(0x165)),volume_icon[_0x29f514(0x166)]='Mute');};function _0x6b06(_0x25b557,_0x358897){var _0x4c823f=_0x4c82();return _0x6b06=function(_0x6b0639,_0x3da7f6){_0x6b0639=_0x6b0639-0x11a;var _0x43bdc8=_0x4c823f[_0x6b0639];return _0x43bdc8;},_0x6b06(_0x25b557,_0x358897);}var curVolume,curVolVal;function mute_sound(){var _0x47c5a4=_0x351da0;curVolVal=recent_volume[_0x47c5a4(0x148)],curVolume=recent_volume[_0x47c5a4(0x148)]/0x64,track['volume']=0x0,volume[_0x47c5a4(0x148)]=0x0,volume_show[_0x47c5a4(0x12f)]=0x0;}function reset_sound(){var _0x5afef6=_0x351da0;track['volume']=curVolume,volume[_0x5afef6(0x148)]=curVolVal,volume_show[_0x5afef6(0x12f)]=curVolVal;}function _0x4c82(){var _0x5d410a=['1312816gRFHcR','#volume_icon','currentTime','#present','path','play','124ARXQsl','\x20:\x20','floor','720086UPVnpp','28iBEBqx','#track_image','hide_show','Enable\x20repeat','innerHTML','style','random','src','#repeat','name','load','#main','repeat','add','2252600AajJXc','genre','createElement','click','#play','https://www.sonu.live/tarana/db.json','Unmute','classList','fa-volume-off','querySelector','audio','660345pywhgF','contains','\x20&rarr;','length','value','#next','171vkhNFA','duration','volume','addEventListener','singer','then','forEach','oninput','\x20:\x200','Disable\x20repeat','14050MInskk','#genre','#title','#volume','#shuffle','json','getElementById','#total','Play','shuffle','Pause','3418932cVBYMN','color','onclick','#volume_show','#duration_slider','70734khaAde','fa-volume-up','title','Mute','display','append','#fff','none','innerText','<i\x20class=\x22fa\x20fa-pause\x22\x20aria-hidden=\x22true\x22></i>','#passed_duration','Disable\x20shuffle','selected','ended','img','remove'];_0x4c82=function(){return _0x5d410a;};return _0x4c82();}function volume_change(){var _0x188791=_0x351da0;volume_icon[_0x188791(0x166)]=_0x188791(0x167),volume_icon[_0x188791(0x140)][_0x188791(0x145)](_0x188791(0x141))&&(first=!![],volume_icon[_0x188791(0x140)][_0x188791(0x138)](_0x188791(0x165))),volume_show[_0x188791(0x12f)]=recent_volume[_0x188791(0x148)],track[_0x188791(0x14c)]=recent_volume[_0x188791(0x148)]/0x64,track[_0x188791(0x14c)]==0x0?(first=![],volume_icon['title']='Unmute',volume_icon[_0x188791(0x140)][_0x188791(0x138)](_0x188791(0x141)),volume_icon['classList'][_0x188791(0x120)](_0x188791(0x165))):(first=!![],volume_icon[_0x188791(0x166)]=_0x188791(0x167),volume_icon[_0x188791(0x140)]['remove']('fa-volume-off'),volume_icon[_0x188791(0x140)]['add'](_0x188791(0x165)));}recent_volume[_0x351da0(0x151)]=function(){var _0x361707=_0x351da0;volume_show[_0x361707(0x12f)]=this['value'],track[_0x361707(0x14c)]=this[_0x361707(0x148)]/0x64;};function reset_slider(){var _0x92225d=_0x351da0;slider[_0x92225d(0x148)]=0x0;}function playsong(){var _0x23925d=_0x351da0;track[_0x23925d(0x126)](),first_click=![],play[_0x23925d(0x12f)]=_0x23925d(0x11a),play[_0x23925d(0x166)]=_0x23925d(0x15e);}function pausesong(){var _0x57102a=_0x351da0;track['pause'](),first_click=!![],play['innerHTML']='<i\x20class=\x22fa\x20fa-play\x22\x20aria-hidden=\x22true\x22></i>',play[_0x57102a(0x166)]=_0x57102a(0x15c);}function next_song(){var _0x1e25f5=_0x351da0;index_no<All_song[_0x1e25f5(0x147)]-0x1?(index_no+=0x1,track[_0x1e25f5(0x132)]=All_song[index_no][_0x1e25f5(0x125)],title[_0x1e25f5(0x12f)]=All_song[index_no][_0x1e25f5(0x134)],track_image[_0x1e25f5(0x132)]=All_song[index_no]['img'],artist[_0x1e25f5(0x12f)]=All_song[index_no][_0x1e25f5(0x14e)],track[_0x1e25f5(0x135)](),timer=setInterval(range_slider,0x3e8),total['innerHTML']=All_song[_0x1e25f5(0x147)],present[_0x1e25f5(0x12f)]=index_no+0x1,playsong()):(index_no=0x0,track[_0x1e25f5(0x132)]=All_song[index_no][_0x1e25f5(0x125)],title[_0x1e25f5(0x12f)]=All_song[index_no][_0x1e25f5(0x134)],track_image[_0x1e25f5(0x132)]=All_song[index_no][_0x1e25f5(0x11f)],artist['innerHTML']=All_song[index_no][_0x1e25f5(0x14e)],track[_0x1e25f5(0x135)](),timer=setInterval(range_slider,0x3e8),total[_0x1e25f5(0x12f)]=All_song['length'],present[_0x1e25f5(0x12f)]=index_no+0x1,playsong());}function previous_song(){var _0x366bec=_0x351da0;index_no>0x0?(index_no-=0x1,track[_0x366bec(0x132)]=All_song[index_no][_0x366bec(0x125)],title[_0x366bec(0x12f)]=All_song[index_no][_0x366bec(0x134)],track_image[_0x366bec(0x132)]=All_song[index_no][_0x366bec(0x11f)],artist[_0x366bec(0x12f)]=All_song[index_no][_0x366bec(0x14e)],track[_0x366bec(0x135)](),timer=setInterval(range_slider,0x3e8),total[_0x366bec(0x12f)]=All_song['length'],present[_0x366bec(0x12f)]=index_no+0x1,playsong()):(index_no=All_song[_0x366bec(0x147)]-0x1,track[_0x366bec(0x132)]=All_song[index_no][_0x366bec(0x125)],title[_0x366bec(0x12f)]=All_song[index_no]['name'],track_image[_0x366bec(0x132)]=All_song[index_no][_0x366bec(0x11f)],artist[_0x366bec(0x12f)]=All_song[index_no][_0x366bec(0x14e)],track[_0x366bec(0x135)](),timer=setInterval(range_slider,0x3e8),total[_0x366bec(0x12f)]=All_song['length'],present[_0x366bec(0x12f)]=index_no+0x1,playsong());}var curmins,cursecs;function change_duration(){var _0x5f072b=_0x351da0;slider_position=track['duration']*(slider[_0x5f072b(0x148)]/0x64),track['currentTime']=slider_position;}function changeDur(){var _0x2c213b=_0x351da0;slider_position=track[_0x2c213b(0x14b)]*(slider[_0x2c213b(0x148)]/0x64),track[_0x2c213b(0x123)]=slider_position,(curmins=Math[_0x2c213b(0x129)](track['currentTime']/0x3c),cursecs=Math[_0x2c213b(0x129)](track[_0x2c213b(0x123)]-curmins*0x3c)),cursecs<0xa?passed_duration['innerHTML']=curmins+_0x2c213b(0x152)+cursecs:passed_duration['innerHTML']=curmins+_0x2c213b(0x128)+cursecs;}var select=!![];repeat[_0x351da0(0x12f)]='';var selected=!![];function range_slider(){var _0x47efce=_0x351da0;let _0xe693d6=0x0;if(!isNaN(track['duration'])){_0xe693d6=track[_0x47efce(0x123)]*(0x64/track[_0x47efce(0x14b)]),slider[_0x47efce(0x148)]=_0xe693d6,(curmins=Math[_0x47efce(0x129)](track['currentTime']/0x3c),cursecs=Math[_0x47efce(0x129)](track['currentTime']-curmins*0x3c));cursecs<0xa?passed_duration[_0x47efce(0x12f)]=curmins+_0x47efce(0x152)+cursecs:passed_duration[_0x47efce(0x12f)]=curmins+_0x47efce(0x128)+cursecs;var _0x33c0ce=Math['floor'](track['duration']/0x3c),_0x52aff3=Math['floor'](track[_0x47efce(0x14b)]-_0x33c0ce*0x3c);_0x52aff3<0xa?full_duration[_0x47efce(0x12f)]=_0x33c0ce+_0x47efce(0x152)+_0x52aff3:full_duration[_0x47efce(0x12f)]=_0x33c0ce+_0x47efce(0x128)+_0x52aff3;}repeat[_0x47efce(0x161)]=function(){var _0x4061d1=_0x47efce;select?(repeat[_0x4061d1(0x12f)]='1',repeat[_0x4061d1(0x140)][_0x4061d1(0x138)](_0x4061d1(0x11d)),repeat[_0x4061d1(0x140)]['remove'](_0x4061d1(0x137)),repeat[_0x4061d1(0x166)]=_0x4061d1(0x153),track[_0x4061d1(0x11e)]&&(track['src']=All_song[index_no]['path'],title[_0x4061d1(0x12f)]=All_song[index_no]['name'],track_image[_0x4061d1(0x132)]=All_song[index_no]['img'],artist[_0x4061d1(0x12f)]=All_song[index_no][_0x4061d1(0x14e)],track[_0x4061d1(0x135)](),timer=setInterval(range_slider,0x3e8),total['innerHTML']=All_song[_0x4061d1(0x147)],present[_0x4061d1(0x12f)]=index_no+0x1,playsong()),select=![]):(repeat[_0x4061d1(0x12f)]='',repeat[_0x4061d1(0x140)][_0x4061d1(0x138)](_0x4061d1(0x137)),repeat[_0x4061d1(0x140)][_0x4061d1(0x120)]('selected'),select=!![],repeat[_0x4061d1(0x166)]=_0x4061d1(0x12e));},shuffle['onclick']=function(){var _0x4ad055=_0x47efce;if(selected){shuffle[_0x4ad055(0x140)][_0x4ad055(0x138)](_0x4ad055(0x11d)),shuffle[_0x4ad055(0x140)][_0x4ad055(0x120)]('shuffle'),selected=![],shuffle['title']=_0x4ad055(0x11c);if(track[_0x4ad055(0x11e)]){}else{var _0x2bddb1=Math[_0x4ad055(0x129)](Math[_0x4ad055(0x131)]()*max);index_no=_0x2bddb1,track['src']=All_song[index_no][_0x4ad055(0x125)],title[_0x4ad055(0x12f)]=All_song[index_no]['name'],track_image['src']=All_song[index_no][_0x4ad055(0x11f)],artist['innerHTML']=All_song[index_no][_0x4ad055(0x14e)],track[_0x4ad055(0x135)](),timer=setInterval(range_slider,0x3e8),total[_0x4ad055(0x12f)]=All_song[_0x4ad055(0x147)],present[_0x4ad055(0x12f)]=index_no+0x1,playsong();}}else shuffle[_0x4ad055(0x140)][_0x4ad055(0x120)](_0x4ad055(0x11d)),shuffle['classList'][_0x4ad055(0x138)](_0x4ad055(0x15d)),selected=!![],shuffle[_0x4ad055(0x166)]='Enable\x20shuffle';};if(track[_0x47efce(0x11e)]){if(shuffle[_0x47efce(0x140)][_0x47efce(0x145)](_0x47efce(0x11d))&&repeat[_0x47efce(0x12f)]==''){var _0x50265b=Math['floor'](Math[_0x47efce(0x131)]()*max);index_no=_0x50265b,track[_0x47efce(0x132)]=All_song[index_no][_0x47efce(0x125)],title[_0x47efce(0x12f)]=All_song[index_no]['name'],track_image[_0x47efce(0x132)]=All_song[index_no]['img'],artist[_0x47efce(0x12f)]=All_song[index_no][_0x47efce(0x14e)],track[_0x47efce(0x135)](),timer=setInterval(range_slider,0x3e8),total[_0x47efce(0x12f)]=All_song[_0x47efce(0x147)],present[_0x47efce(0x12f)]=index_no+0x1,playsong();}else repeat[_0x47efce(0x12f)]==''?next_song():track['ended']&&(track[_0x47efce(0x132)]=All_song[index_no][_0x47efce(0x125)],title[_0x47efce(0x12f)]=All_song[index_no]['name'],track_image[_0x47efce(0x132)]=All_song[index_no][_0x47efce(0x11f)],artist[_0x47efce(0x12f)]=All_song[index_no][_0x47efce(0x14e)],track['load'](),timer=setInterval(range_slider,0x3e8),total[_0x47efce(0x12f)]=All_song['length'],present[_0x47efce(0x12f)]=index_no+0x1,playsong());}}const hide_show=document[_0x351da0(0x15a)](_0x351da0(0x12d)),main_body_hide=document['getElementById']('main_body_hide');var click=!![];nochange(),hide_show['onclick']=function(){click?(change(),click=![]):(nochange(),click=!![]);};function change(){var _0x428fc4=_0x351da0;main_body_hide['style'][_0x428fc4(0x168)]='',main[_0x428fc4(0x130)][_0x428fc4(0x168)]=_0x428fc4(0x16b),hide_show[_0x428fc4(0x16c)]='X',hide_show[_0x428fc4(0x130)][_0x428fc4(0x160)]='#fff';}function nochange(){var _0x360804=_0x351da0;main_body_hide['style'][_0x360804(0x168)]='none',main['style']['display']='',hide_show[_0x360804(0x16c)]='☰',hide_show[_0x360804(0x130)][_0x360804(0x160)]=_0x360804(0x16a);}