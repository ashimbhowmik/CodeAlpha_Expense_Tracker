import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Income() {
  const {
    income,
    handleInputChange2,
    handleSubmitIncome,
    storedIncomeData,
    deleteIncomeItem,
  } = useContext(GlobalContext);
  // console.log(storedIncomeData);
  const totalIncome = storedIncomeData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );
  return (
    <>
      <div className="">
        <h1 className="text-4xl text-[#433756] font-semibold">Incomes</h1>

        <section>
          <div className="w-full mt-6 py-5 bg-slate-100 rounded-xl">
            <h1 className="text-center text-[#433756] font-semibold text-2xl">
              Total Income : ${totalIncome}
            </h1>
          </div>
          <div className="lg:flex w-full gap-10 mt-10">
            <div className="lg:w-[30%]">
              <form action="" className="space-y-7 ">
                <div className=" space-y-7">
                  <input
                    type="text"
                    placeholder="Salary Title"
                    name="incomeData"
                    value={income.incomeData}
                    onChange={handleInputChange2}
                    className="py-3 px-4 rounded-md bg-white border text-black  w-full"
                    required
                  ></input>
                  <input
                    type="text"
                    placeholder="Salary Amount"
                    name="amount"
                    value={income.amount}
                    onChange={handleInputChange2}
                    className="py-3 px-4 rounded-md bg-white border text-black w-full"
                    required
                  ></input>
                  <input
                    type="date"
                    placeholder="Subject"
                    name="date"
                    value={income.date}
                    onChange={handleInputChange2}
                    className="py-3 px-4 rounded-md bg-white border text-black  w-full"
                    required
                  ></input>
                </div>
                <div className="">
                  <textarea
                    type="text"
                    placeholder="Add A Reference"
                    rows="6"
                    cols="50"
                    name="ref"
                    value={income.ref}
                    onChange={handleInputChange2}
                    className="py-3 px-4 rounded-md bg-white text-black border w-full"
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmitIncome}
                  className="flex items-center gap-2 rounded-full font-semibold bg-[#c04e7a] ease-in-out duration-300 hover:bg-[#cc7395] text-white px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Add Income</span>
                </button>
              </form>
            </div>
            <div className="lg:w-[70%] space-y-5 ">
              {storedIncomeData.map((item, index) => (
                <div
                  key={index}
                  className="flex py-2 bg-[#f8f1f2] w-full rounded-xl text-[#433756]"
                >
                  <div className="w-[15%] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-cash-banknote"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                      <path d="M18 12l.01 0" />
                      <path d="M6 12l.01 0" />
                    </svg>
                  </div>
                  <div className="w-[70%] flex flex-col justify-center space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h1 className="font-semibold">{item.incomeData}</h1>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div className="w-[15%]">
                        <h1>$ {item.amount}</h1>
                      </div>
                      <div className="flex gap-1 items-center w-[20%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                          <path d="M16 3l0 4" />
                          <path d="M8 3l0 4" />
                          <path d="M4 11l16 0" />
                          <path d="M8 15h2v2h-2z" />
                        </svg>
                        <p>{item.date}</p>
                      </div>
                      <div className="flex items-center gap-1 overflow-hidden w-[65%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                        </svg>
                        <p>{item.ref}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteIncomeItem(index)}
                    className="w-[15%] flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
