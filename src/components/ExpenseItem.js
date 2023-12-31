import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description ">{props.description}</h2>
      <div className="expense-item__price ">{props.price}</div>
    </div>
  );
}
export default ExpenseItem;
