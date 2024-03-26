import { GlobalContext } from "@/context/GlobalContext";
import { CChart } from "@coreui/react-chartjs";
import { useContext } from "react";

function getStyle(property) {
  // Return the computed value of the specified CSS property
  return getComputedStyle(document.documentElement).getPropertyValue(property);
}

export default function HomeDashboard() {
  const { storedIncomeData, storedExpenseData } = useContext(GlobalContext);

  // console.log(storedIncomeData);

  const labels = storedIncomeData?.map((item) => {
    return item.date;
  });
  const data = storedIncomeData?.map((item) => {
    return item.amount;
  });
  const data1 = storedExpenseData?.map((item) => {
    return item.amount;
  });

  const totalIncome = storedIncomeData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );

  const totalExpense = storedExpenseData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );

  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <div className="">
        <h1 className="text-4xl text-[#433756] font-semibold">
          All Transactions
        </h1>

        <section className="mt-10 flex gap-10">
          <div className="w-[65%] ">
            <div className="mb-10 gap-10 grid grid-cols-3 justify-center items-center">
              <div className=" p-6 bg-[#f7f7f7] space-y-3 rounded-lg shadow-md ">
                <p className="text-center text-2xl text-black font-semibold">
                  Total Income
                </p>
                <p className="text-center text-xl font-semibold text-[#736b8e]">
                  $ {totalIncome}
                </p>
              </div>
              <div className="p-6 bg-[#f7f7f7] space-y-3 rounded-lg shadow-md">
                <p className="text-center text-2xl text-black font-semibold">
                  Total Expenses
                </p>
                <p className="text-center text-xl font-semibold text-[#736b8e]">
                  $ {totalExpense}
                </p>
              </div>
              <div className="p-6 bg-[#f7f7f7] space-y-3 rounded-lg shadow-md">
                <p className="text-center text-2xl text-black font-semibold">
                  Total Balance
                </p>
                <p className="text-center text-xl font-semibold text-[#736b8e]">
                  $ {totalBalance}
                </p>
              </div>
            </div>
            <div className="bg-[#faf6f9] rounded-lg shadow-md p-8">
              <CChart
                type="line"
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Income",
                      backgroundColor: "green",
                      borderColor: "rgba(220, 220, 220, 1)",
                      pointBackgroundColor: "rgba(220, 220, 220, 1)",
                      pointBorderColor: "#fff",
                      data: data,
                    },
                    {
                      label: "Exprese",
                      backgroundColor: "red",
                      borderColor: "rgba(151, 187, 205, 1)",
                      pointBackgroundColor: "rgba(151, 187, 205, 1)",
                      pointBorderColor: "#fff",
                      data: data1, // for chart to start from
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: "#e5ebf3",
                      },
                      ticks: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                    y: {
                      grid: {
                        color: "#e5ebf3",
                      },
                      ticks: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="w-[35%]">
            <h1 className="text-2xl mb-7 font-semibold text-[#433756]">
              Recent History
            </h1>

            <div className="flex flex-col  h-[100%] ">
              <div className="">
                <h1 className="mb-4 text-center text-xl text-black font-semibold">
                  Income
                </h1>
                {storedIncomeData.map((item, index) => (
                  <>
                    <div className="flex justify-between p-3 bg-[#f7f7f7] rounded-xl mb-4">
                      <p className="text-green-500 font-semibold">
                        {item.incomeData}
                      </p>
                      <p className="text-green-500 font-semibold">
                        +$ {item.amount}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-6  ">
                <h1 className="mb-4 text-center text-xl text-black font-semibold">
                  Expense
                </h1>
                {storedExpenseData.map((item, index) => (
                  <>
                    <div className="flex justify-between p-3 bg-[#f7f7f7] rounded-xl mb-4">
                      <p className="text-red-500 font-semibold">
                        {item.expenseData}
                      </p>
                      <p className="text-red-500 font-semibold">
                        -$ {item.amount}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
