import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        date={props.items[0].date}
        description={props.items[0].title}
        price={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        description={props.items[1].title}
        price={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        description={props.items[2].title}
        price={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        description={props.items[3].title}
        price={props.items[3].amount}
      />
    </div>
  );
}
export default Expenses;
