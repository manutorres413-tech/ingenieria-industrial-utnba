@echo off
title Ingenieria Industrial UTNBA - Visualizador Local
echo ========================================================
echo Iniciando servidor local para ver la web en tu PC...
echo ========================================================
start "" "http://localhost:4173"
call npx vite preview --port 4173
pause
