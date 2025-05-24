import { useState } from "react"

export function Activity({ title }) {
  const [activity_selected, setActivitySelected] = useState({ activity: title, selected: false});
  function handleActivityClick(e) {
    const activity_title = e.target.dataset.activity_title;
    setActivitySelected({ activity: activity_title, selected: !activity_selected.selected })
    
  }
  
  return <>
    <div className="activity-box">
      <div
        className="activity-icon"
        data-activity_title={title}
        onClick={handleActivityClick}
        style={activity_selected.selected ? {backgroundColor: 'green'} : {}}
      ></div>
      <div>
        <p>
          { title }
        </p>
      </div>
    </div>
  </>
}
