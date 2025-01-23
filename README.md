# YandexMusicModClient
[![TotalDownloads](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/total?label=Downloads)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - Windows](https://img.shields.io/badge/OS-Windows-blue?logo=windows&logoColor=white)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download")

<p align="left">
	<a href="https://discord.gg/HGNKDxwHEH">
      <img height="35.48" alt="Сервер" src="https://github.com/user-attachments/assets/b7c8a272-b48c-411f-aca3-6512086a9a18">
   </a>
   <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/">
      <img width="96" alt="English" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/En_Badge_Highlighted.png">
   </a>
  <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/doc/ru/README.md">
      <img width="96" alt="Русский" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/Ru_Badge.png">
   </a>
</p>

## This is a modification for Yandex Music Desktop application which unmodified version can be downloaded [here](https://music.yandex.com/download/)
### YandexMusicModClient or its developer is not affiliated with Yandex or any of their companies, staff etc.
<details>
   <summary>Message for Yandex Music Staff</summary>
   
   Since you found my code usefull and copied some parts from [here](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/5384285a8de1101102fc21f593266807b38a304f#diff-c314348839e9fcfdd871cc449297e9cf3f9631701ff29758014ba11bf9200ba0) (more specifically PLAYER_ACTION event) and added it to vanilla client. You might want to hire me.
   My work will be much more efficient if I work on the source code in a cozy office rather than with a minified & webpacked version of the code
</details>


## Install

> [!WARNING]  
> ### Installing the modification for an unsuitable client version can lead to unpredictable results.
> Before installing, make sure that the client version and the version for which the modification was made coincide.
> This can be checked on the Releases page

0. Download latest Yandex music client from offical site https://music.yandex.com/download/
1. Open command line (Win + R -> cmd -> Enter)
2. Execute this command
   ```bat
   curl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/latest/download/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar
   ```
3. Done!

> [!NOTE]  
> Relogin may be required after patch install.


## Features

### Discord Rich Presence
<details>
   <summary>Details</summary>

   
Adds support for Discord Rich Presence

<details>
   <summary>Settings</summary>
   
      "discordRPC": {
			"enable": true or false,                         //Enables or disables disocrd RPC
			"applicationIDForRPC": "1124055337234858005",    //ID of your custom application for discord RPC
			"showButtons": true or false,                    //Enables or disables all buttons in discord Status 
			"overrideDeepLinksExperiment": true or false,    //Enables or disables split web and desktop buttons into one button
			"showGitHubButton": true or false,               //Enables or disables Github button if overrideDeepLinksExperiment set to true
			"afkTimeout": 15,				 //Timeout for activity to be cleared if track paused. Value in minutes.
			"showAlbum": true or false,                      //Enables or disables album string in discord Status 
   			"showSmallIcon": true or false,                  //Enables or disables status icon in discord Status 
      }
      
</details>

![image](https://github.com/user-attachments/assets/dd793a12-d67c-4d9e-930a-00c7f7ce47c1)

</details>

### Global Shortcuts
<details>
   <summary>Details</summary>

   
Adds support for Global Shortcuts.

Currently supported only this actions (I tried add more but others work pretty unstable due to horrible babel & webpack config on Yandex's end)

<details>
   <summary>Settings</summary>
   
	"globalShortcuts": {
		"TOGGLE_PLAY": "Ctrl+/",
		"MOVE_FORWARD": "Ctrl+,",
		"MOVE_BACKWARD": "Ctrl+.",
		"TOGGLE_SHUFFLE": "Ctrl+\'",
  		"REPEAT_NONE": undefined,
  		"REPEAT_CONTEXT": undefined,
  		"REPEAT_NONE": undefined,
  		"TOGGLE_LIKE": undefined,
  		"TOGGLE_DISLIKE": undefined,
	}
      
</details>

</details>

### Taskbar Extensions
<details>
   <summary>Details</summary>

   
Adds support for Taskbar Extensions

<details>
   <summary>Settings</summary>
      
      "taskBarExtensions": {
			"enable": true or false //Enables or disables Taskbar Extensions
      }
      
</details>

![image](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/8c3711a3-4bb7-4601-a291-b5c7eb5f58f0)

</details>

### Return dislike button
<details>
   <summary>Details</summary>
   
Returns dislike button on main player bar

![image](https://github.com/user-attachments/assets/22a83331-dfc4-4c7b-92c9-4fdbe2758910)

</details>

### Track quality display
<details>
   <summary>Details</summary>
   
Displayes track quality or codec

<details>
   <summary>Settings</summary>
      
	"playerBarEnhancement": {
 		"showDislikeButton": true //Enabels or disabels Return dislike button feature
		"showCodecInsteadOfQualityMark": true //Show codec instead of quality mark
	}
      
</details>

![image](https://github.com/user-attachments/assets/da143017-b9ff-4faf-91dc-b9ccc81b1e2f)
![image](https://github.com/user-attachments/assets/3e5b6fb2-fbd3-4e04-880c-f1e556d8c4ef)

</details>

### Enhanced Vibe Animation
<details>
   <summary>Details</summary>
   
Enhances Vibe Animation behavior. It better adapts to music. Also allows custom FPS of the animation rendering.
<details>
   <summary>Settings</summary>
      
      "vibeAnimationEnhancement": {
	    "maxFPS": 25,              	// Max allowed FPS. Defalut 25. Recommended 25 - 144. Don't set this value below 1
	    "intensityCoefficient": 1, 	// Sensitivity of music analysis. Default 1, Recommended: 0.5 - 2. If set to 0 disables enhancement behavior (almost :D)
	    "linearDeBoost": 5,		// [DEPRECATED] Separation coefficient of track peaks from the main track. Default 5. Recommended 2 - 8. If 1 disables libear deboost.
	    "playOnAnyEntity": false,	// If enabled Animation plays even if not My Vibe used as track source.
	    "disableRendering": false	// Disables rendering of the animation. Use only if you feel significant fps drops. Else try adjust maxFPS value.
      }
      
</details>

before:

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

after:

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c


</details>

### Downloaded tracks info
<details>
   <summary>Details</summary>
   
Adds information about downloaded tracks to the settings page (tracks count and used storage for downloaded tracks)

![image](https://github.com/user-attachments/assets/d3ba9ada-941c-4bd2-8c53-dad54090bf4e)


</details>

### Download current track to a file
<details>
   <summary>Details</summary>
   
Allows download track that is currently playing into a file. Click to the quality/codec icon to show download dialog.

</details>

### Experiment overrides
<details>
   <summary>Details</summary>
   
Allows you to enable/disable any experiment in the app. To do so you need set `"enableDevTools": true` and then you'll see the button in the dev panel:

</details>

### Devtools & DevPanel
<details>
   <summary>Details</summary>
   
Devtools are disabled by default. To enable them you need modify `%appdata%\YandexMusic\config.json`:

Change `"enableDevTools": false` to `"enableDevTools": true`

![electron_L6SeZLnSAH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/ae841087-d910-45e5-a007-3fd869a493e1)

![electron_y6aOeckPLH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/4bde4785-9196-4ac6-ad3b-9ac5db5b61c8)

</details>

## Settings
Settings can be found in `%appdata%\YandexMusic\config.json`

In app UI:
<p align="left">
<img width="500" alt="UI Settings example" src="https://github.com/user-attachments/assets/89630ab8-a89c-41c3-983d-6352306398df">
</p>

> [!NOTE]  
> App restart required for settings apply.

## Support
If you really enjoyed the new experience with this modification, you can support my work on it:
<p align="left">
   <a href="https://boosty.to/thekingoftime/donate">
      <img width="250" alt="Support me on Boosty" src="https://github.com/user-attachments/assets/7b341f16-6513-4138-a3c5-b5892b062f63">
   </a>
</p>

## Sponsors
Thanks a lot to the sponsors who allow me to actively work on this project.
<p align="left">
   <a href="https://github.com/xab4er">
      <img width="50" alt="xab4er" src="https://avatars.githubusercontent.com/u/60750449?v=4">
   </a>
   <a href="https://github.com/foreA-adoxid">
      <img width="50" alt="foreA-adoxid" src="https://avatars.githubusercontent.com/u/72875762?v=4">
   </a>
   <a href="https://github.com/Maks1mio">
      <img width="50" alt="Maks1mio" src="https://avatars.githubusercontent.com/u/44835662?v=4">
   </a>
   <a href="https://github.com/FaSSteR">
      <img width="50" alt="FaSSteR" src="https://avatars.githubusercontent.com/u/50427367?v=4">
   </a>
   <a href="https://github.com/Dott-rus">
      <img width="50" alt="Dott-rus" src="https://avatars.githubusercontent.com/u/78660260?v=4">
   </a>
   <a href="https://github.com/Lemon4ksan">
      <img width="50" alt="Lemon4ksan" src="https://avatars.githubusercontent.com/u/122788290?v=4">
   </a>
   <a href="https://github.com/SergheyUmca">
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/33039150?v=4">
   </a>
   <a href="https://github.com/schwarzalexey">
      <img width="50" alt="schwarzalexey" src="https://avatars.githubusercontent.com/u/97682066?v=4?v=4">
   </a>
   <a href="https://github.com/dudoska">
      <img width="50" alt="dudoska" src="https://avatars.githubusercontent.com/u/94677394?v=4">
   </a>
   <a href="https://github.com/Diramix">
      <img width="50" alt="Diramix" src="https://avatars.githubusercontent.com/u/79011730?v=4">
   </a>
   <a href="https://github.com/trigger-off">
      <img width="50" alt="trigger-off" src="https://avatars.githubusercontent.com/u/71810229?v=4">
   </a>
   <a href="https://github.com/Baduga">
      <img width="50" alt="Baduga" src="https://avatars.githubusercontent.com/u/69755854?v=4">
   </a>
   <a href="https://github.com/LazyMind">
      <img width="50" alt="LazyMind" src="https://avatars.githubusercontent.com/u/87148057?v=4">
   </a>
   <a href="https://github.com/Schelchki">
      <img width="50" alt="Schelchki" src="https://avatars.githubusercontent.com/u/162707132?v=4">
   </a>
   <a href="https://github.com/entaneey">
      <img width="50" alt="entaneey" src="https://avatars.githubusercontent.com/u/195827686?v=4">
   </a>
</p>

> This list updates manually.
