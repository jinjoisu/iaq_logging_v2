// Each button A press will "hold" (log) the data shown in the START block. i.e. Click "A" 5 times (counter will show data points = 5). Then open Show Data -device- window. Press "B: once, and the last 5 (most recent data points) will stream into the window.
input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.logData()
    counter += 1
    kitronik_air_quality.show("Data points: " + counter, 7, kitronik_air_quality.ShowAlign.Centre)
})
// The board can hold 1000 entries max. Then it overwrites. Use this to clear all the logged data from the board's memory.
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.eraseData()
})
// After you have logged all the data points you want (each press of "A" logs a line of data points) - Press B once to send the logged data from the board's memory to the microbit data window. Then export the file as needed. The number of lines of data should match the "counter" used in the program.
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.sendAllData()
})
let counter = 0
kitronik_air_quality.clear()
kitronik_air_quality.show("Here you go, Jin!", 4, kitronik_air_quality.ShowAlign.Left)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
kitronik_air_quality.clear()
kitronik_air_quality.setDate(23, 5, 23)
kitronik_air_quality.setTime(15, 45, 0)
kitronik_air_quality.addProjectInfo("JJ", "myData")
kitronik_air_quality.selectSeparator(kitronik_air_quality.Separator.tab)
kitronik_air_quality.includeDate()
kitronik_air_quality.includeTime()
kitronik_air_quality.includeTemperature(kitronik_air_quality.TemperatureUnitList.F)
kitronik_air_quality.includeHumidity()
kitronik_air_quality.includePressure(kitronik_air_quality.PressureUnitList.mBar)
counter = 0
basic.forever(function () {
    kitronik_air_quality.show(kitronik_air_quality.readDate(), 1, kitronik_air_quality.ShowAlign.Right)
    kitronik_air_quality.show(kitronik_air_quality.readTime(), 1, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.measureData()
    kitronik_air_quality.show("Temp: " + kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.F) + " °F", 3, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("R.H.: " + kitronik_air_quality.readHumidity() + " %", 4, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("Pressure: " + kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.mBar) + " mBar", 5, kitronik_air_quality.ShowAlign.Left)
})
