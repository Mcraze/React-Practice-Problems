import { useReducer, useState } from "react";

const MortgageCalculator = () => {

    const initialValues = { loanAmount: "", interestRate: "", loanTerm: "" };

    function reducer(state, action) {
        switch (action.type) {
            case "SET_LOAN_AMOUNT": {
                return { ...state, loanAmount: action.payload };
            }
            case "SET_INTEREST_RATE": {
                return { ...state, interestRate: action.payload };
            }
            case "SET_LOAN_TERM": {
                return { ...state, loanTerm: action.payload };
            }
            case "RESET": {
                return initialValues;
            }
            default: {
                return state;
            }
        }
    }

    const [formData, dispatch] = useReducer(reducer, initialValues);
    const [monthlyPayment, setMonthlyPayment] = useState({});

    function calculateMortgage() {

        const { loanAmount, interestRate, loanTerm } = formData;

        if (!loanAmount || !interestRate || !loanTerm) return;
        if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) return;

        const calculation = loanAmount * (interestRate / 100) / 12 / (1 - Math.pow(1 + (interestRate / 100) / 12, - loanTerm * 12))

        const totalAmount = calculation * loanTerm * 12;
        const interestComponent = totalAmount - loanAmount;

        // console.log(interestComponent);

        // console.log(totalAmount);

        setMonthlyPayment({ monthly: calculation.toFixed(2), total: totalAmount.toFixed(2), interest: interestComponent.toFixed(2) });
    }

    return (
        <div className="max-w-xl m-auto card">
            <div className="grid gap-4">
                <div>
                    <label className="block text-sm mb-1 ml-1">Loan Amount (INR)</label>
                    <input
                        type="number"
                        value={formData.loanAmount}
                        onChange={(e) =>
                            dispatch({ type: "SET_LOAN_AMOUNT", payload: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 ml-1">
                        Annual Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={formData.interestRate}
                        onChange={(e) =>
                            dispatch({ type: "SET_INTEREST_RATE", payload: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 ml-1">Loan Term (Years)</label>
                    <input
                        type="number"
                        value={formData.loanTerm}
                        onChange={(e) =>
                            dispatch({ type: "SET_LOAN_TERM", payload: e.target.value })
                        }
                    />
                </div>

                <button className="btn-primary" onClick={calculateMortgage}>
                    Calculate Mortgage
                </button>
            </div>

            <div className="mt-4">
                {
                    !monthlyPayment.monthly
                        ? "Enter details to calculate monthly EMI."
                        : (
                            <div className="card grid gap-2">
                                <div className="flex justify-between pb-2 border-b border-neutral-300 dark:border-neutral-700">
                                    Your Monthly EMI is
                                    <span className="text-emerald-400">{monthlyPayment.monthly} INR</span>
                                </div>
                                <div className="flex justify-between pb-2 border-b border-neutral-300 dark:border-neutral-700">
                                    Interest Component
                                    <span className="text-red-400">{monthlyPayment.interest} INR</span>
                                </div>
                                <div className="flex justify-between">
                                    Total Amount to Pay
                                    <span className="text-emerald-400">{monthlyPayment.total} INR</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default MortgageCalculator;

export const problemData = {
    difficulty: "Easy",
    name: "Mortgage Calculator",
    description: "Create a Mortgage Calculator in React using useReducer that allows users to input details to calculate the monthly mortgage payment.",
    path: "/problem/mortgage-calculator",
}