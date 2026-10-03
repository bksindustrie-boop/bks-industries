@echo off
title BKS Industries - Local Web Server
color 0b
echo ======================================================================
echo    Starting BKS Industries Local Server on http://localhost:8080/
echo ======================================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
