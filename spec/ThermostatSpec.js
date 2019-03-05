describe("Thermostat", function() {

  thermostat = new Thermostat

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature", function() {
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(30);
  });
})
