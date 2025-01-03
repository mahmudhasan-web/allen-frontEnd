
import PaymentSuccess from "./PaymentSuccess";


// interface PaymentData {
//   result: {
//     orderId: string;
//     customerDetails: {
//       name: string;
//       email: string;
//     };
//   };
// }

export default function page() {
  // const searchParams = useSearchParams();
  // const sessionId = searchParams.get("session_id");
  // const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  // const axiosLink = useAxios(); // Move useAxios hook to the top level




  // useEffect(() => {
  //   if (!sessionId) return;

  //   const fetchPaymentData = async () => {
  //     try {
  //       const path = `/payment/retrive-payment/${sessionId}`;
  //       const response = await axiosLink.get(path);
  //       setPaymentData(response.data);
  //     } catch (err) {
  //       console.log("Error fetching payment data:", err);
  //     }
  //   };

  //   fetchPaymentData();
  // }, [sessionId, axiosLink]);

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
       <PaymentSuccess></PaymentSuccess>
      </div>
    </section>
  );
}

// if (!sessionId) {
//   return <p>No session ID found in the URL.</p>;
// }

// if (!paymentData) {
//   return (
//     <section>
//       <h1 className="text-2xl">Loading payment data...</h1>
//     </section>
//   );
// }

// console.log(paymentData);

// return (
//   <section className="mx-h-96">
//     <div>
//       <Lottie className="w-80 mx-auto" animationData={success} />
//     </div>
//     <div className="w-fit mx-auto space-y-2">
//       <h1 className="text-2xl font-semibold text-center">Success Payment</h1>
//       <p>OrderId: {paymentData.result.orderId}</p>
//       <div className="space-y-2">
//         <h1 className="text-lg font-semibold">Customer Details</h1>
//         <p>Customer Name: {paymentData.result.customerDetails.name}</p>
//         <p>Customer Email: {paymentData.result.customerDetails.email}</p>
//       </div>
//     </div>
//   </section>
// );
