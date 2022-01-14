var quantity = 1;
var unities = 50;

function cantidad(number){
  console.log(number);
  if(number > 0 && number < 50){
    quantity = number;
  }  
}

paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'ARkne3wMtcaRiTagSSoxLVWWGxrsy2GHUr-NwT-MAy0KJo1PACcdeUzXSPtYIuylpBwQgcDKBSMHhr9K',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'es_ES',
    style: {
      size: 'small',
      color: 'black',
      shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
      unities = unities - quantity;
      document.getElementById('unidades').value = unities;
      return actions.payment.create({
        transactions: [{
          amount: {
            total: quantity * 499,
            currency: 'EUR'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
      });
    }
  }, '#paypal-button');