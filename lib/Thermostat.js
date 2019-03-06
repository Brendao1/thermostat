function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.up = function(temp) {
  this.temperature += temp
  console.log(this.temperature)
}
