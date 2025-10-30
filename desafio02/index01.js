class LegacyPaymentSystem {
    makePayment(amount) {
      console.log(`Pagando R$${amount} com sistema legado.`);
    }
  }
  
  class ModernPaymentAPI {
    process(amountInCents) {
      console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
  }
  

  class ModernPaymentAdapter {
    constructor(modernAPI) {
      this.modernAPI = modernAPI;
    }
  

    makePayment(amount) {
      const amountInCents = amount * 100;
      this.modernAPI.process(amountInCents);
    }
  }

  class PaymentProcessor {
    constructor(system) {
      this.system = system;
    }
  
    pay(amount) {
      this.system.makePayment(amount);
    }
  }

  const legacy = new LegacyPaymentSystem();
  const processorLegacy = new PaymentProcessor(legacy);
  processorLegacy.pay(100); 
  
  const modernAPI = new ModernPaymentAPI();
  const adapter = new ModernPaymentAdapter(modernAPI);
  const processorModern = new PaymentProcessor(adapter);
  processorModern.pay(100); 
  