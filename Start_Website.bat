@echo off
title AVARIA Luxury Real Estate Server
echo ====================================================
echo Starting AVARIA Real Estate Website on Port 3000...
echo ====================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
