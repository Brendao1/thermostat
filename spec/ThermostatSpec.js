describe("Thermostat", function() {

  thermostat = new Thermostat

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

})
