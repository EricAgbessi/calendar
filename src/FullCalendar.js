import React, { useState } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
} from 'react-calendar-timeline'
import moment from 'moment';


const NewItemModal = ({ onClose, onSubmit,onNewItem }) => {
  const [title, setTitle] = useState('');
  const [tip, setTip] = useState('');

  const handleSubmit = () => {
    onSubmit(title, tip);
  };

  return (
    <div className="modal" style={{position:"absolue",top:"10px",left:"50%",backgroundColor:"wheat"}}>
      <div className="modal-content">
        <h2>New Item</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Tip:
          <input type="text" value={tip} onChange={e => setTip(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Add Item</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};



 const MyCalendar = () =>{

// Groupes pour la timeline
const groups = [
  { id: 1, title: 'CHANTIER 1',bgColor:"green" },
  { id: 2, title: 'CHANTIER 2',bgColor:"yellow" },
  { id: 3, title: 'CHANTIER 3',bgColor:"blue" },
  { id: 4, title: 'CHANTIER 4',bgColor:"red" }
];

// Événements avec descriptions textuelles
const items = [
 {
    id: 1,
    group: 1,
    title: 'Réunion de planification',
    start_time: new Date(2024, 6, 9, 0, 0),
    end_time: new Date(2024, 6, 9, 24, 0),
    description: 'Réunion pour discuter des plans de construction du projet',
    className: 'custom-event-class', // Classe CSS personnalisée
    style: { backgroundColor: 'lightblue', color: 'black' }, // Style inline
    canResize: false,
    canMove: false,

  },
  {
    id: 2,
    group: 2,
    title: 'Inspection du site',
    start_time: new Date(2024, 6, 8, 0, 0), // Date et heure de début (2024, 6, 11 représente le 11 juillet 2024)
    end_time: new Date(2024, 6, 8, 24, 0), // Date et heure de fin
    description: 'Inspection des progrès sur le chantier 2'
  },
  {
    id: 3,
    group: 3,
    title: 'Livraison de matériaux',
    start_time: new Date(2024, 6, 12, 0, 0), // Date et heure de début (2024, 6, 12 représente le 12 juillet 2024)
    end_time: new Date(2024, 6, 12, 24, 0), // Date et heure de fin
    description: 'Réception des matériaux pour le chantier 3',

      },
  {
    id: 4,
    group: 4,
    title: 'Réunion de coordination',
    start_time: new Date(2024, 6, 13, 0, 0), // Date et heure de début (2024, 6, 13 représente le 13 juillet 2024)
    end_time: new Date(2024, 6, 13, 24
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        , 0), // Date et heure de fin
    description: 'Réunion pour coordonner les activités des différents chantiers',
    tip: 'additional information',
    color: 'rgb(158, 14, 206)',
    selectedBgColor: 'rgba(225, 166, 244, 1)',
    bgColor : 'rgba(225, 166, 244, 0.6)',
    canResizeLeft: true,
   
  }
];


const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItemGroupId, setNewItemGroupId] = useState(null);
  const [newItemTime, setNewItemTime] = useState(null);

  const onCanvasClick = (groupId, time, e) => {
    console.log(groupId, time);
    setNewItemGroupId(groupId);
    setNewItemTime(time);
    setIsModalOpen(true);
  };




const today = new Date();
const startOfWeek = new Date(2024, 6, 8, 9, 0);
startOfWeek.setHours(0, 0, 0, 0); // Début du jour actuel à 00:00:00
const endOfWeek = new Date(today);
endOfWeek.setDate(startOfWeek.getDate() +4); // Fin de la semaine actuelle (7 jours plus tard)

// Filtrer les éléments pour ne montrer que ceux qui sont dans la semaine en cours
const filteredItems = items.filter(item => {
  const startTime = new Date(item.start_time);
  return startTime >= startOfWeek && startTime < endOfWeek;
});


const [visibleTimeStart, setVisibleTimeStart] = useState(startOfWeek.getTime());
const [visibleTimeEnd, setVisibleTimeEnd] = useState(endOfWeek.getTime());






const itemRenderer = ({
  item,
  itemContext,
  getItemProps,
  getResizeProps
}) => {
  const { dimensions } = itemContext;


   const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

  // Exemple de calcul de dimensions personnalisées
  const customWidth = itemContext.dimensions.width || 100;
  const customHeight = 50;

  const customStyles = {
    ...itemContext.style,
    width: `${customWidth}px`,
    height: `${customHeight}px`,
    backgroundColor: '#bada55',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div
      {...getItemProps({
        style: {
          ...itemContext.style,
          width: `${customWidth}px`,
          height: `${customHeight}px`,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '10px',
          top:"0px",
          boxSizing: 'border-box',
          cursor: 'pointer',
          overflow: 'hidden',
          position: 'absolute', 
          minwidth: "150px",
          color: "black",

        }
      })}
    >

      <div className='custom-item' style={{height:"100%",width:"100%" }}>
            <section style={{  fontSize: '14px',height:"100%",width:"100%", fontWeight: 'bold', marginBottom: '8px',display:"grid", gridTemplateColumns:"auto auto" , gap:"0.5rem"}}>
                <article style={{height:"100%",width:"100%"}}>{item.title} </article>
                <article style={{wordWrap:"break-word",height:"100%",width:"100%"}}>{item.description || 'Description de l\'événement'}</article>
            </section>
        </div>

    </div>
  );
};




const groupRenderer = ({ group }) => {
  return (
    <div className="custom-group" style={{backgroundColor:`${group.bgColor}`}}>
      <span className="title">{group.title}</span>
      <p className="tip">{group.tip}</p>
    </div>
  )
}


  const someCustomHandler = () => {
    alert('Custom marker clicked!');
  };

  const tomorrow = moment(today).add(1, 'days').toDate();

return (
    <>



  <Timeline groups={groups}
    items={filteredItems}
    lineHeight={250}
    itemRenderer={itemRenderer}
    itemHeightRatio={1}
    groupRenderer={groupRenderer}
    buffer={1}
    defaultTimeStart={visibleTimeStart}
    defaultTimeEnd={visibleTimeEnd}
    visibleTimeStart={visibleTimeStart}
    visibleTimeEnd={visibleTimeEnd}
    traditionalZoom={false}
    timeSteps={
                {
       
        hour:24,
     
        }
    }
    onCanvasClick={onCanvasClick}>

      {/* custom renderer for this marker */}
      {({ styles, date }) => {
        const customStyles = {
          ...styles,
          backgroundColor: 'deeppink',
          width: '400px'

        }
        return <div style={customStyles} onClick={someCustomHandler} />
      }}

</Timeline>

   {isModalOpen && (
        <NewItemModal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  
);
}


export default MyCalendar ;

