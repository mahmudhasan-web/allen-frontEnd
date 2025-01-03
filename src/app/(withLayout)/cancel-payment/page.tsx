import CancelPayment from "./CancelPayment";

export default function Page() {
    return (
        <section className="min-h-96 px-3">
        {/* <div id="invalid URL">
          {!sessionId ? (
            <p className="text-center text-2xl mt-5">No session ID found in the URL.</p>
          ) : !paymentData ? (
            <h1 className="text-2xl text-center mt-5">Loading payment data...</h1>
          ) : (
            <div className="mt-5">
              <div>
                <Lottie className="w-80 mx-auto" animationData={success} />
              </div>
              <div className="w-fit mx-auto space-y-2">
                <h1 className="text-2xl font-semibold text-center">
                  Success Payment
                </h1>
                <p>OrderId: {paymentData.result.orderId}</p>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">Customer Details</h1>
                  <p>Customer Name: {paymentData.result.customerDetails.name}</p>
                  <p>
                    Customer Email: {paymentData.result.customerDetails.email}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div> */}
  
        <div>
         <CancelPayment></CancelPayment>
        </div>
      </section>
    );
}