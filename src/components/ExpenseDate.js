import './ExpenseDate.css';
function ExpenseDate(props) {
  const date = props.date.getUTCFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[props.date.getMonth()];
  const day=props.date.getUTCDate();
  return (
    <div className="expense-date">
      <div className="expense-date__year">{date}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
