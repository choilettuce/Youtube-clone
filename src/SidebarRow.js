import React from 'react';
import './SidebarRow.css';

function SlidebarRow({Icon, title, selected}) {
  return (
    <div className={`SidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow_icon" />
        <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  );
}

export default SlidebarRow;
