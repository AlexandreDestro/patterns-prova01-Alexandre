class Device {
    turnOn() {}
    turnOff() {}
    setChannel(channel) {}
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
  
    turnOff() {
      console.log("TV desligada.");
    }
  
    setChannel(channel) {
      console.log(`Canal alterado para ${channel}.`);
    }
  }

  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  

  class AdvancedRemoteControl extends RemoteControl {
    changeChannel(channel) {
      this.device.setChannel(channel);
    }
  }

  const tv = new TV();
  const remote = new RemoteControl(tv);
  const smartRemote = new AdvancedRemoteControl(tv);
  
  remote.pressPowerButton(true);
  smartRemote.changeChannel(5);
  remote.pressPowerButton(false);
  