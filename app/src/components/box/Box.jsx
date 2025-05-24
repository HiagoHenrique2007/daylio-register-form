import { Activity } from "../activity/Activity";

export function Box() {
  const activitys = ['comer', 'beber', 'transar', 'meditar', 'conversar'];
  return <>
    <div className="box">
      {
        activitys.map((activity, index) => {
          return <Activity key={index} title={activity} />
        })
      }
    </div>
  </>
}
