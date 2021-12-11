import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      {/* <h3 className="widgetLgTitle">Users</h3> */}
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Score</th>
          <th className="widgetLgTh">Gained Score</th>
          <th className="widgetLgTh">Total Score</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1618517048289-4646902edaf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hubert Bates</span>
          </td>
          <td className="widgetLgStatus">
            <Button type="Good" />
          </td>
          <td className="widgetLgScore">189</td>
          <td className="widgetLgPct">23%</td>
          <td className="widgetLgTotalScore">1000</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Elizabeth Bradley</span>
          </td>
          <td className="widgetLgStatus">
            <Button type="Improvement" />
          </td>
          <td className="widgetLgScore">231</td>
          <td className="widgetLgPct">-7%</td>
          <td className="widgetLgTotalScore">1000</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1616271049250-02a7697e99ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Gerald Stewart</span>
          </td>
          <td className="widgetLgStatus">
            <Button type="Bad" />
          </td>
          <td className="widgetLgScore">336</td>
          <td className="widgetLgPct">-17%</td>
          <td className="widgetLgTotalScore">1000</td>
        </tr>

      </table>
    </div>
  );
}
