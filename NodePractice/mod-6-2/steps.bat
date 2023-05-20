@echo off

REM Install npm init not working properly
echo Installing npm init...
start npm init --y
pause

REM Install Express.js
echo Installing Express.js...
start npm install express
pause


REM Install nodemon
echo Installing nodemon...
start npm install nodemon -D

REM Finish
echo Installation completed.
pause
