 echo $1 $2 
 ffmpeg -i videos/$1.mp4 audios/$1.$2
 #ffmpeg -i audio.mp3 -f ffmetadata metadados.txt
 