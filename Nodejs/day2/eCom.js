amz.createNewOrder(a, (b, err) => {
    if (err) throw new Error(err);
    amz.proceedToPayment(b, (c, err) => {
      if (err) throw new Error(err);
      amz.showOrderSummary(c, (d, err) => {
        if (err) throw new Error(err);
        amz.updateWallet(d, (e, err) => {
          if (err) throw new Error();
          console.log("Order placed!");
        });
      });
    });
  });
