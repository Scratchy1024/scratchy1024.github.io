@echo off
setlocal enabledelayedexpansion

:: Loop through all .png files in the current directory
for %%f in (*.png) do (
    set "filename=%%f"
    
    :: Replace spaces with underscores
    set "newname=!filename: =_!"
    
    :: Only rename if the name actually changed
    if "!filename!" neq "!newname!" (
        echo Renaming "%%f" to "!newname!"
        ren "%%f" "!newname!"
    )
)

pause